import React from "react";
import { Header } from "./components/Header";
import "./App.css";
import Home from "./components/Home";
const App: React.FC = () => {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Home />
      </div>
    </React.Fragment>
  );
};
export default App;
