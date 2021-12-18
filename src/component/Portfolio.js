import { Col, Container, Row, Badge } from "react-bootstrap";
import PortfolioTab from "./PortfolioTab";

const Portfolio = () => {
    return(
        <Container style={{paddingTop: '70px', paddingBottom: '50px'}}>
            <Row>
                <Col>
                    <Badge bg="primary" style={{marginBottom: '20px'}}>Portfolio</Badge>
                </Col>
            </Row>
            <Row>
                <Col>
                 <PortfolioTab />
                </Col>
            </Row>
        </Container>
    );
}

export default Portfolio;