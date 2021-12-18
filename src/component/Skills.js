import { Container, Row, Col, Badge, ProgressBar, ListGroup } from "react-bootstrap";
import { FaAngleDoubleRight } from "react-icons/fa";
import './main.css';

const Skills = () => {
    return (
        <Container style={{paddingTop: '70px', paddingBottom: '50px'}}>
            <Row>
                <Col>
                    <Badge bg="primary">Skills & Technology</Badge>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <h4 className="py-4">
                        <p>
                            <FaAngleDoubleRight /> HTML, CSS, BOOTSTRAP <ProgressBar animated now={100} />
                        </p>
                        <p>
                            <FaAngleDoubleRight /> Javascript, React, jQuery
                            <ProgressBar animated now={80} />
                        </p>
                        <p>
                            <FaAngleDoubleRight /> Wordpress
                            <ProgressBar animated now={80} />
                        </p>
                        <p><FaAngleDoubleRight /> Elementor
                            <ProgressBar animated now={100} /></p>
                        <p>
                            <FaAngleDoubleRight /> Core PHP, Mysql
                            <ProgressBar animated now={80} />
                        </p>
                        <p>
                            <FaAngleDoubleRight /> Flexbox, Tailwind CSS
                            <ProgressBar animated now={80} />
                        </p>
                        <p><FaAngleDoubleRight /> Photoshop, Adobe XD, Figma
                            <ProgressBar animated now={50} /></p>
                    </h4>
                </Col>
                <Col style={{textAlign: 'right'}}>
                    <h4>Front End Developer Roles and Responsibilities</h4>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Decide web page design and structure</ListGroup.Item>
                        <ListGroup.Item>Develop features to enhance the users’ experience</ListGroup.Item>
                        <ListGroup.Item>Striking a balance between functional and aesthetic design.</ListGroup.Item>
                        <ListGroup.Item>Make sure the web design is smartphone-capable</ListGroup.Item>
                        <ListGroup.Item>Build reusable code for future use</ListGroup.Item>
                        <ListGroup.Item>Make sure web pages are optimized for best speed and scalability</ListGroup.Item>
                        <ListGroup.Item>Employ a diverse selection of markup languages to design web pages</ListGroup.Item>
                        <ListGroup.Item>Keep the brand consist throughout the whole design</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default Skills;