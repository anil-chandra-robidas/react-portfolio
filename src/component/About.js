import { Container, Row, Col, Badge, Button, Nav, Image } from "react-bootstrap";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import './main.css';

const About = () => {
    return (
        <Container style={{paddingTop: '70px', paddingBottom: '50px'}}>
            <Row>
                <Col>
                    <Badge bg="primary">ABOUT MYSELF</Badge>
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={7}>
                    <h4 className="mt-2">Dear Manager/HR,</h4>
                    <p className="mb-4">Hello, At first take my Greetings. My name is Anil Chandra Robidas and I had completed B.Sc. graduation in Computer Science and Engineering (CSE) from Hajee Mohammad Danesh Science and Technology University. I am a Front End Developer since 2019. Skills at: <p variant="primary" style={{color:'blue'}}>HTML, CSS, FLEXBOX, GRID, SASS, BOOTSTRAP, JAVASCRIPT, JQUERY, Core PHP, Wordpress, Elementor , Gulp, Git/Github</p>I want to learn more by joining your company.

                        Please see my resume for additional information on my experience. Thank you for your time and consideration. I look forward to speaking with you about this employment opportunity.</p>
                    <Button href="https://anilkumer.github.io/portfolio/resume/Anil_Chandra_Robidas_CV.pdf" download="Anil_Chandra_Robidas_CV" variant="primary">Downlaod CV</Button>
                    <Nav className="social-icons">
                        <Nav.Link href="https://www.facebook.com/anil.cse" target="_blank"><FaFacebookSquare /></Nav.Link>
                        <Nav.Link href="https://github.com/anil-chandra-robidas" target="_blank"><FaLinkedin /></Nav.Link>
                        <Nav.Link href="https://github.com/anil-chandra-robidas" target="_blank"><FaGithubSquare /></Nav.Link>
                    </Nav>
                </Col>
                <Col md={1}></Col>
                <Col xs={6} md={4}>
                <Image src="https://anilkumer.github.io/portfolio/images/anil.jpg" rounded />
                </Col>
            </Row>
        </Container>
    );
}

export default About;