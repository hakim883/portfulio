import { Navbar, Nav } from 'react-bootstrap';
import linkedin from '../assets/img/linkedin.webp';
import github from '../assets/img/github.webp';

const Header = () => (
  <header>
    <Navbar
      collapseOnSelect
      style={{
        background: 'linear-gradient(260deg, rgb(60, 78, 106) 0%, rgb(167 198 235 / 99%) 50%, rgb(60, 78, 106) 100%)',
        boxShadow: 'rgb(37 65 92 / 34%) 0px 0px 40px',
      }}
      fixed="top"
      expand="md"
    >
      <Navbar.Brand href="#" className="ms-3 pt-0">Abde Lhakim CHAABANI</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" style={{ boxShadow: '1px 3px 15px #212c56a3' }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="align-items-center w-100">
          <div className="d-flex flex-column flex-md-row">
            <Nav.Link href="#apropos">A propos</Nav.Link>
            <Nav.Link href="#technos">Technos</Nav.Link>
            <Nav.Link href="#projets">Projets</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </div>
          <div className="ms-md-auto container-logo">
            <a href="https://www.linkedin.com/in/chaabani-hakim-964a791b6/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="logo de linkedin" className="logo" />
            </a>
            <a href="https://github.com/hakim883/" target="_blank" rel="noreferrer">
              <img src={github} alt="logo de github" className="logo" />
            </a>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
