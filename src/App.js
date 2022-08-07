import Sidebar from "./components/Sidebar";
import './app.css'
import Container from "./components/Container";
import { useState } from "react";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";

function App() {
  const [navigat_e, setNavigat_e] = useState(true);
  const [selected, setSelected] = useState(null);
  const [title, setTitle] = useState(null);

  function filterPage(num, title){
    setNavigat_e(!navigat_e);
    setSelected(num);
    setTitle(title);
  }
  
  return (
    <div className="App-container-pages">
       {navigat_e? <PageOne navigation={filterPage}/> : <PageTwo title={title} num={selected} navigation={filterPage}/>}
    </div>
  );
}

export default App;
