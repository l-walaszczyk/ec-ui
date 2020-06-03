import React from "react";
// import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Header />
      <Page />
      <Footer />
    </Router>
  );
}

export default App;
