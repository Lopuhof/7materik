import React from "react";
import Header from "./components/header/background/Header";
import Main from "./components/main/Main";

function App() {
    return (
        <div className="App">
          <div className="App-content">
            <Header/>
          </div>
          <div className="App-category-fone"></div>
          <div className="App-content">
            <Main/>
          </div>
        </div>
    );
}

export default App;
