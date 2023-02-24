import React from 'react'
import {ChatState} from '../../context/ChatProvider';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Avatar } from "@chakra-ui/avatar";

const UserListItem = ({user, handleFunction }) => {

    // const { user } = ChatState();

  return (
    
        <Toast className="mb-1 user-list" onClick={handleFunction} >
          <Toast.Header closeButton={false}>
            <Avatar mr={3} size="sm" cursor="pointer" name={user.name} src={user.pic}/>
            <strong className="me-auto"> {user.name}</strong>
          </Toast.Header>
          <Toast.Body><b>Email: </b> {user.email}</Toast.Body>
        </Toast>
  )
}

export default UserListItem
