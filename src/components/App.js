import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import ProjetSection from './ProjectSection';
import AProposSection from './AProposSection';
import TechnoSection from './TechnoSection';
import ScrollToTopButton from './ScrollToTopButton';
import ContactForm from './ContactForm';
import backgroundImage from '../assets/background.webp';

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '100px',
};

const App = () => (
  <div className="App space-background" style={backgroundStyle}>
    <Header />
    <main>
      <div class="row">
      <div class="col-sm-6 col-lg-3" id='jj'>
      <img src="11.jpeg" alt="but.webp" width="250" height="250"/>
</div>      <div class="col-sm-6 col-lg-7" >

      <AProposSection /></div></div>
      <TechnoSection />
      <ProjetSection />
      <ScrollToTopButton />
      <ContactForm />
    </main>
    <Footer />
  </div>
);

export default App;
