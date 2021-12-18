import { Container, Row, Col  } from "react-bootstrap";
import PortfolioData from './PortfolioData';

const PortfolioTab = () => {
      return(
        <Container style={{background: '#c6d3d3', paddingTop: '20px', paddingBottom: '20px'}}>
          <Row className="projectthumb">

            {
              PortfolioData.map(itamvalue => {
                 return(
                  <Col lg={6}>
                    <img src={itamvalue.projectThumbnail} alt="" />
                    <h3>{itamvalue.projectName}</h3>
                    <p>{itamvalue.projectTool}</p>
                    <a target="_blank" rel="noreferrer" href={itamvalue.projectUrl}>Demo Link</a>
                    </Col>
                 );
              })
            }
          
        </Row>
        </Container>
      );      
}

export default PortfolioTab;