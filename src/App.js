import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Experience from "./component/Experience";
import About from "./component/About";
import Home from "./component/Home";
import EducationalQualifications from "./component/EducationalQualifications";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./component/Menu";

function App() {
  return (
    <Container fluid>
      <Router>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
          <Route exact path="/experience" element={<Experience />}></Route>
          <Route exact path="/educationalqualifications" element={<EducationalQualifications />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
