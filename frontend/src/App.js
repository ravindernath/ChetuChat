import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Container>
          <Route path="/" exact component={HomePage} />
          <Route path="/chat" component={ChatPage} />
        </Container>
      </ChakraProvider>
    </div>
  );
}

export default App;
