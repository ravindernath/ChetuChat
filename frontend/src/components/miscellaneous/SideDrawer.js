import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import ToastContainer from 'react-bootstrap/ToastContainer';

import axios from "axios";
import { Tooltip } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import { Avatar } from "@chakra-ui/avatar";
import { ChatState } from "../../context/ChatProvider";
import ProfileModal from "./ProfileModal";
import { useHistory } from "react-router-dom";
import ChatLoading from "../ChatLoading";
import UserListItem from "../usarAvatar/UserListItem";

const SideDrawer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const navDropdownTitle = <i className="fas fa-bell"></i>;

  // const { user, setSelectedChat, caths, setChats } = ChatState();
  const { user, setSelectedChat } = ChatState();
  const userProfileImg = (
    <Avatar size="sm" cursor="pointer" name={user.name} src={user.pic}></Avatar>
  );

  
  const toast = useToast();

  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };


  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/api/user?search=${search}`, config);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);
      const config= {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`
        },
      };

      const {data} = await axios.post('/api/chat', { userId, config });

      setSelectedChat(data);
      setLoadingChat(false);
      // onclose();
    } catch (error) {
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container fluid>
          <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
            <Button variant="primary" onClick={handleShow}>
              <i className="fas fa-search"></i>
            </Button>
          </Tooltip>

          <Navbar.Brand href="#">Chetu Chat</Navbar.Brand>

          <Nav>
            <NavDropdown
              align="end"
              title={navDropdownTitle}
              className="dropdown-toggle-notification"
              id="dropdown-menu-align-end"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              align="end"
              title={userProfileImg}
              id="dropdown-menu-align-end"
            >
              <ProfileModal user={user}>
                <NavDropdown.Item href="#action/3.1">
                  My Profile
                </NavDropdown.Item>
              </ProfileModal>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick={logoutHandler}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Offcanvas show={show} onHide={handleClose} placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Search Users</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search by name or email"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="outline-success" onClick={handleSearch}>Search</Button>
              </Form>

              <div
                aria-live="polite"
                aria-atomic="true"
                style={{ minHeight: 'auto', marginTop:'20px' }}
              >
                {/* <ToastContainer className="p-0"> */}
                    {loading ? (
                  <ChatLoading />
                ) : (
                  searchResult?.map((user) => (
                    <UserListItem
                      key={user._id}
                      user={user}
                      handleFunction={() => accessChat(user._id)}
                    />
                  ))
                )}
                {/* </ToastContainer> */}
              </div>
              
              
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default SideDrawer;
