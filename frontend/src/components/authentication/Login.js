import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';

const Login = () => {

    
    const [show, setShow] = useState(false)

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    
    const handleClick = () =>setShow(!show)

    const submitHandler = () => {
        
    };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <InputGroup className="mb-3">
            <Form.Control type={show ? "text" : "password"} placeholder="Password" onChange={(e) =>setPassword(e.target.value)}/>
            <InputGroup.Text id="basic-addon2" onClick={handleClick}>{show ? "Hide" : "Show"}</InputGroup.Text>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <div className="d-grid gap-2">
            <Button variant="success" type="submit" size="lg">
            Login
        </Button>
        <Button variant="secondary" type="submit" size="lg" onClick={() => {
                setEmail("guest@example.com");
                setPassword("123456");
            }}>
            Get Guest user Credentials
        </Button>
      </div>
    </Form>
  );
};

export default Login;
