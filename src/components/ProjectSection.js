import { Container, Row, Col } from 'react-bootstrap';
import ProjetCard from './ProjectCard';
import projets from '../data';

const ProjectSection = () => (
  <Container style={{ marginTop: '100px' }}>
    <div className="anchor" id="projets" />
    <h1 className="mb-5 mt-5 text-center">Mes Projets</h1>
    <Row>
      {projets.map((projet, index) => (
        <Col key={[index]} className="mb-5 d-flex justify-content-center">
          <ProjetCard {...projet} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default ProjectSection;
