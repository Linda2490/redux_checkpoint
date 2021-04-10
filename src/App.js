import "./App.css";
import React from "react";
import ListTask from "./components/ListTask/ListTask";
import Addtask from './components/Addtask/Addtask';



function App() {
  return (
    <div className="App">
      <Addtask/>
      <ListTask/>
    </div>
  );
}

export default App;
