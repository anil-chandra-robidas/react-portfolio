import { Container } from "react-bootstrap"
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import EducationalQualifications from "./EducationalQualifications";
import Experience from "./Experience";
import Footer from "./Footer";

const Home = () => {
    return(
       <Container fluid>
           <h1 className="text-center pt-5">Hi, I Am Anil Chandra Robidas</h1>
           <About />
           <Portfolio />
           <Experience />
           <EducationalQualifications />
           <Contact />
           <Footer />
       </Container>
           
    );
}

export default Home;