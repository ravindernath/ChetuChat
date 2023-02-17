import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';

const Signup = () => {

    const [show, setShow] = useState(false)

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmPassword] = useState();
    const [pic, setPic] = useState();


    const handleClick = () =>setShow(!show)

    const postDetails = (pics) => {

    };

    const submitHandler = () => {
        
    };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={(e) =>setName(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <InputGroup className="mb-3">
            <Form.Control type={show ? "text" : "password"} placeholder="Password" onChange={(e) =>setPassword(e.target.value)}/>
            <InputGroup.Text id="basic-addon2" onClick={handleClick}>{show ? "Hide" : "Show"}</InputGroup.Text>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" onChange={(e) =>setConfirmPassword(e.target.value)}/>
      </Form.Group>



      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Your Profile Pick</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={(e) =>postDetails(e.target.file[0])} />
      </Form.Group>

      
      <div className="d-grid gap-2">
        <Button variant="success" type="submit" onClick={submitHandler} size="lg">
            Sign Up
        </Button>
      </div>
    </Form>
  )
}

export default Signup
