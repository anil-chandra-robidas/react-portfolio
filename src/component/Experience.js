import { Container, Row, Table, Col, Badge } from "react-bootstrap";
import TableRow from "./TableRow";
import User from "./ExperienceData";


const Experience = () => {
    return (
        <Container style={{paddingTop: '70px', paddingBottom: '50px'}}>
            <Row>
                <Col> <Badge bg="primary" className="mb-3">Job Experience</Badge></Col>
            </Row>
            <Row>
                <Col>
                <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Duration</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        User.map((user, i) => {
                          return(
                            <TableRow key={i} cname={user.cname} duration={user.duration} location={user.location}  />
                          );
                        })
                    }
                    
                </tbody>
            </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default Experience;