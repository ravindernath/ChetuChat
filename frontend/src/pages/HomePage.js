import React, { useEffect } from "react";
import Logo from "../assets/chetu_logo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";
import FormImg from "./FormImg";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if(user) history.push('/chats')
    }, [history]);

  return (
    <>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <img src={Logo} alt="Chetu Logo" className="logo" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-5" justify >
                <Tab eventKey="profile" title="Login">
                  <Row>
                    <Col><FormImg /></Col>
                    <Col><Login /></Col>
                  </Row>
                </Tab>
                <Tab eventKey="home" title="Signup">
                  <Row>
                    <Col> <Signup /></Col>
                    <Col><FormImg /></Col>
                  </Row>
                </Tab>
                <img src={Logo} alt="Chetu Logo" className="logo" />
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
