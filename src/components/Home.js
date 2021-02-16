import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NavBar from './NavBar';
import HomeAbout from './HomeAbout';
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

const mapStateToProps = state => {
  return { };
};

export default connect(mapStateToProps)(Home);
