import { Container, Badge } from 'react-bootstrap';

const technos = ['Git', 'Html', 'Css', 'Bootstrap','librairies css/composants', 'APIs', 'JavaScript', 'Php', 'Typescript','Java', 'React', 'Redux', 'Angular',  'Node.js', 'Express','SpringBoot', 'Mongoose',  'MySQL',  'Mongodb',];

const TechnoSection = () => (
  <Container style={{ marginTop: '80px' }} className="text-center">
    <div className="anchor" id="technos" />
    <h1 className="mt-5">Technologies</h1>
    <p className="paragraph mb-4 mt-4">
      Voici quelques-unes des technologies et outils que j'ai pu utiliser :
    </p>
    {technos.map((techno, index) => (
      <Badge key={[index]} pill className="me-3 bg-dark py-3 px-4 mb-3 fs-6">
        {techno}
      </Badge>
    ))}
  </Container>
);

export default TechnoSection;
