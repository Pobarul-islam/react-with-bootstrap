
import { Button, Spinner } from "react-bootstrap";
import "./App.css";
import Card2 from "./components/Card2/Card2";
import CardGroup2 from "./components/CardGroup2/CardGroup2";


function App() {
  return (
    <div className="App">
      <h1>Using React Bootstrap</h1>
      <Button variant="danger">My Button</Button> <br /> <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;
