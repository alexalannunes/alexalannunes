import React from "react";
import me from "./assets/alexalannunes.jpg";

function App() {
  return (
    <div className="content-app">
      <div className="content-image">
        <div className="arrow">
          <img src={me} alt="Alex Alan Nunes" />
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
