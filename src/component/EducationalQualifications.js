import { Col, Container, Row, Table, Badge } from "react-bootstrap";
import AcademicData from "./AcademicData";

const EducationalQualifications = () => {
    return (
        <Container style={{paddingTop:'70px'}}>
            <Row>
                <Col> <Badge bg="primary" className="mb-3">Educational Qualifications</Badge></Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover variant="primary">
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Subject</th>
                                <th>Institute Name</th>
                                <th>Result</th>
                                <th>Passing Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AcademicData.map((data) => {
                                    return (
                                        <tr>
                                            <td>{data.courseName}</td>
                                            <td>{data.subject}</td>
                                            <td>{data.instituteName}</td>
                                            <td>{data.result}</td>
                                            <td>{data.passingYear}</td>
                                        </tr>
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

export default EducationalQualifications;