import React, { Fragment } from 'react';
import About from './About';
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function Home  (){
    return (
      <Fragment>
        <NavBar />
        <About />
        <Footer />
      </Fragment>
    );
  }

export default Home;
