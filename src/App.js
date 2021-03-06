import React from "react";
import me from "./assets/20210415_114006.jpg";

function App() {
  return (
    <div className="content-app">
      <div className="content-image">
        <div className="arrow">
          <img src={me} style={{ width: "300px", height: "300px", objectFit: "cover" }} alt="Alex Alan Nunes" />
        </div>
      </div>
      <div className="content-info">
        <h1 data-testid="myName">Alex Alan Nunes</h1>
        <h5 data-testid="whatILoveToDo">I am a web developer</h5>
      </div>
    </div>
  );
}

export default App;
