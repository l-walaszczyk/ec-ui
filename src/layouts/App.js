import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Header />
      <Page />
      <Footer />
    </Router>
  );
}

export default App;
