import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { ChatState } from "../context/ChatProvider";

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Row>
        <Col>{user && <MyChats />}</Col>
        <Col>{user && <ChatBox />}</Col>
      </Row>
    </div>
  );
};

export default ChatPage;
