import Sidebar from "./components/Sidebar";
import './app.css'
import Container from "./components/Container";
function App() {
  return (
    <div className="App-container">
    <Sidebar/>
    <div className="content-area">
      <h1 className="title left">Surveys</h1>
      <Container/>
    </div>
    </div>
  );
}

export default App;
