import { Avatar } from "@chakra-ui/avatar";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Offcanvas from "react-bootstrap/Offcanvas";

const ProfileModal = ({ user, children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {children ? (
        <span onClick={handleShow}>{children}</span>
      ) : (
        <i className="fas fa-eye"></i>
      )}

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Avatar size="sm" cursor="pointer" name={user.name} /> {user.name}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={user.pic} style={{ width: "100%", padding:"10% 20% 0 20%" }}/>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ProfileModal;
