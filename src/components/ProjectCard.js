import { Card, Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ProjetCard = ({
  image,
  alt,
  title,
  description,
  technos,
  detailedDescription,
  process,
  conceptionChoices,
  challenges,
  github,
  site,
  but,
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  // Buttons in the footer of the modal, conditioned by github link or website.
  const conditionedButtons = [
    // {
    //   href: github.hrefFront,
    //   text: 'Github du Front',
    //   show: github.hrefFront !== '' && github.hrefBack !== '',
    // },
    // {
    //   href: github.hrefBack,
    //   text: 'Github du Back',
    //   show: github.hrefFront !== '' && github.hrefBack !== '',
    // },
    // {
    //   href: github.href,
    //   text: 'Voir le Github',
    //   show: github.href !== '',
    // },
    // {
    //   href: site,
    //   text: but ? 'Le site aem.tn' : 'Voir le site',
    //   show: site !== undefined && site !== '',
    // },
    {
      href: but,
      text: 'Le site aem.tn',
      show: but !== undefined,
    },
  ];

  useEffect(() => {
    // Function to close the modal when the back button is used
    const handleBack = (event) => {
      if (
        window.location.hash !== `#${title.split(' ').join('-')}`
      ) {
        event.preventDefault();
        setShow(false);
      }
    };
    window.addEventListener('popstate', handleBack);
    return () => {
      window.removeEventListener('popstate', handleBack);
    };
  }, [show]);

  return (
    <>
      <Card onClick={handleShow} style={{ width: '18rem', boxShadow: '0px 0px 20px #2c3548' }}>
        <Card.Link href={`#${title.split(' ').join('-')}`} style={{ textDecoration: 'none' }}>
          <Card.Img className="card__img-top" variant="top" src={image} alt={alt} width="100%" height="auto" />
          <Card.Body className="card__body d-flex flex-column justify-content-between" style={{ height: '16rem' }}>
            <>
              <Card.Title className="text-center card__title">{title}</Card.Title>
              <Card.Text className="card__text">{description}</Card.Text>
              <Card.Text className="card__text">
                <strong>Technos : </strong>
                {technos.join(', ')}
              </Card.Text>
            </>
            <Button
              style={{
                background: 'rgb(162 185 255 / 0%)',
                color: '#d2dcff',
                border: 'none',
                width: '100%',
              }}
              className="d-flex justify-content-center card__button"
            >
              En savoir plus
            </Button>
          </Card.Body>
        </Card.Link>
      </Card>

      <Modal show={show} onHide={handleShow} size="lg" centered className={`${show ? 'modal-appear' : ''}`}>
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-0">
          <img
            width="100%"
            height="auto"
            src={image}
            alt={alt}
            style={{
              width: '100%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto',
            }}
            className="mb-3"
          />
          {detailedDescription && (
            <>
              <h5>Description détaillée</h5>
              <p>
                {detailedDescription}
              </p>
            </>
          )}
          {process && (
            <>
              <h5>Processus de développement</h5>
              <p>
                {process}
              </p>
            </>
          )}
          {conceptionChoices && (
            <>
              <h5>Choix de conception</h5>
              <p>
                {conceptionChoices}
              </p>
            </>
          )}
          {challenges && (
            <>
              <h5>Challenges</h5>
              <p>
                {challenges}
              </p>
            </>
          )}
          <h5>Technologies utilisées</h5>
          <p>{technos.join(', ')}</p>
        </Modal.Body>
        <Modal.Footer className="pt-0 d-flex flex-column flex-md-row align-items-md-start">
          {conditionedButtons.map((button, index) => (
            button.show && (
            <Button
              key={[index]}
              style={{
                background: 'rgb(162 185 255 / 0%)',
                color: '#d2dcff',
                border: 'none',
              }}
              className="mb-3"
              variant="primary"
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {button.text}
            </Button>
            )
          ))}
        </Modal.Footer>
      </Modal>
    </>
  );
};

ProjetCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technos: PropTypes.arrayOf(PropTypes.string).isRequired,
  detailedDescription: PropTypes.string.isRequired,
  process: PropTypes.string,
  conceptionChoices: PropTypes.string,
  challenges: PropTypes.string,
  github: PropTypes.shape({
    href: PropTypes.string,
    hrefFront: PropTypes.string,
    hrefBack: PropTypes.string,
  }).isRequired,
  site: PropTypes.string,
  but: PropTypes.string,
};

export default ProjetCard;
