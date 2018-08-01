import { Fragment } from 'react';
import HeadPart from '../components/common/HeadPart';
import Header from '../components/common/Header';
import Nav from '../components/common/Nav';
import About from '../components/common/About';
import Skills from '../components/common/Skills';
import Portfolio from '../components/common/Portfolio';
import Achievements from '../components/common/Achievements';
import Resume from '../components/common/Resume';
import Contact from '../components/common/Contact';
import Footer from '../components/common/Footer';

export default () => {
  return (
    <Fragment>
      <HeadPart />
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Achievements />
      <Resume />
      <Contact />
      <Footer />
      <script type="text/javascript" src="static/js/jquery.1.11.1.js"></script>
      <script type="text/javascript" src="static/js/bootstrap.js"></script>
      <script type="text/javascript" src="static/js/SmoothScroll.js"></script>
      <script type="text/javascript" src="static/js/easypiechart.js"></script>
      <script type="text/javascript" src="static/js/jquery.prettyPhoto.js"></script>
      <script type="text/javascript" src="static/js/jquery.isotope.js"></script>
      <script type="text/javascript" src="static/js/jquery.counterup.js"></script>
      <script type="text/javascript" src="static/js/waypoints.js"></script>
      <script type="text/javascript" src="static/js/jqBootstrapValidation.js"></script>
      <script type="text/javascript" src="static/js/contact_me.js"></script>
      <script type="text/javascript" src="static/js/main.js"></script>
    </Fragment>
  );
}