import { Container, Row, Col, Badge, ListGroup } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
const Contact = () => {
  return (
    <Container style={{ paddingTop: "70px", paddingBottom: "50px" }}>
      <Row>
        <Col>
          {" "}
          <Badge bg="primary" className="mb-3">
            Contact Information
          </Badge>
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <iframe title="form-id"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29212.140122604153!2d90.35977!3d23.764579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1639841575329!5m2!1sen!2sbd"></iframe>
        </Col>
        <Col lg={5}>
            
          <ListGroup>
            <ListGroup.Item>
            <h4>Contact Me</h4>
            </ListGroup.Item>
            <ListGroup.Item><FaHome /> Name: Anil Chandra Robidas</ListGroup.Item>
            <ListGroup.Item><FaHome /> Address: Mohammadpur, Dhaka, Bangladesh
            </ListGroup.Item>
            <ListGroup.Item><FaHome /> Phone: +8801755448113</ListGroup.Item>
            <ListGroup.Item><FaHome /> E-mail: anilkumer.cse@gmail.com</ListGroup.Item>
            <ListGroup.Item><FaHome /> Skype: ak47.hstu@gmail.com</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
