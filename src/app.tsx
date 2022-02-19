import React from "react";
import "./app.scss";
import {Route, Routes} from "react-router-dom";
import {DemoLayout} from "./components/demo-layout";

export const App = () => {
  return <div className="app">
    <div className="container">
      <Routes>
        <Route path="/" element={<DemoLayout/>}/>
      </Routes>
    </div>
  </div>;
}
