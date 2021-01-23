import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="app">
      <Container>
        <Header />
        <Recipes />
      </Container>
    </div>
  );
}

export default App;
