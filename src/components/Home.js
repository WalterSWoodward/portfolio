import React, { Fragment } from 'react';
import About from './About';
import NavBar from './NavBar';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function Home  (){
    return (
      <Fragment>
        <About />
        <NavBar />
        <Projects />
        <Contact />
        <Footer />
      </Fragment>
    );
  }

export default Home;
