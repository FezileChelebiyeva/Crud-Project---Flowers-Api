import "./App.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Routing from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
