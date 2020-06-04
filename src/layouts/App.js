import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Page from "./Page";
import ScrollToTop from "../components/ScrollToTop";

function App() {
  // console.log(process.env.PUBLIC_URL);

  return (
    // <Router basename={process.env.PUBLIC_URL}>
    <Router>
      <ScrollToTop />
      <Header />
      <Page />
    </Router>
  );
}

export default App;
