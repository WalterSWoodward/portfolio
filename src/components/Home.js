import React, { Fragment } from 'react';
import About from './About';
import NavBar from './NavBar';
import Projects from './Projects';
import ContactForm from './ContactForm';
import Footer from './Footer';

function Home  (){
    return (
      <Fragment>
        <About />
        <NavBar />
        <Projects />
        <ContactForm />
        <Footer />
      </Fragment>
    );
  }

export default Home;
