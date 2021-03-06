import React, { Fragment } from 'react';

import NavBar from './NavBar';
import HomeAbout from './Home/About';
import Layers from './Layers';
import Footer from './Footer';

class Home extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <HomeAbout/>
        <Layers/>
        <Footer/>
      </Fragment>
    );
  }
}

export default Home;
