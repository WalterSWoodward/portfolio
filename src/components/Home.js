import React, { Fragment } from 'react';

import NavBar from './NavBar';
import HomeAbout from './Home/About';
import Footer from './Footer';

class Home extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <HomeAbout/>
        <Footer/>
      </Fragment>
    );
  }
}

export default Home;
