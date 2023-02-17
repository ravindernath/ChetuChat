import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Container>
        <Route path="/" exact component={HomePage} />
        <Route path="/chat" component={ChatPage} />
      </Container>
    </div>
  );
}

export default App;
