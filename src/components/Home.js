import React, { Fragment } from 'react';
import About from './About';
import NavBar from './NavBar';
import Projects from './Projects';
import ContactLinks from './ContactLinks';
import Footer from './Footer';

function Home  (){
    return (
      <Fragment>
        <About />
        <NavBar />
        <Projects />
        <ContactLinks />
        <Footer />
      </Fragment>
    );
  }

export default Home;
