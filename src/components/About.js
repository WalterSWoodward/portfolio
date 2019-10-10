import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { toggleOverlay } from '../actions';
import { Picture } from 'react-responsive-picture';

class About extends React.PureComponent {
  componentDidMount() {
    this.props.toggleOverlay();
  }

  render() {
    return (
      <Fragment>
        <div style={this.props.loadOverlay} id='loadOverlay' />
        <div
          id='about'
          className='about'
        >
          <div className='box1'>
            <div
              id='fade_wrapper'
              style={{
                background: this.props.linearGradient,
                opacity: 0.9
              }}
            >
              <div id='box1_text'>
                <div className='box1_name'>WALTER WOODWARD</div>
                <div className='box1_description'>WEB DEVELOPER</div>
                <a
                  className='box1_link1'
                  href='#journey'
                  aria-label="Click here to learn more about Walter Woodward's story"
                >
                  MY JOURNEY
                </a>
                <a
                  // id="portfolio_link"
                  className='box1_link2'
                  href='#portfolio'
                  aria-label="Click here to view Walter's current projects"
                >
                  PORTFOLIO
                </a>
                <a
                  className='box1_link3'
                  href='#contact'
                  aria-label="Click here to view Walter's Contact form"
                >
                  CONTACT
                </a>
              </div>
            </div>
          </div>
          <div id='journey' className='box2'>
            <Picture
              className='box2_img'
              alt='walter profile'
              sources={[
                {
                  srcSet: 'https://res.cloudinary.com/pacmankana/image/upload/v1553923628/portfolio%20website/about/profile_fit.webp',
                  srcSet: 'https://res.cloudinary.com/pacmankana/image/upload/v1553923628/portfolio%20website/about/profile_fit.png'
                }
              ]}
            />
            <p>
              Hello World! Welcome to my portfolio website. I built it primarily
              using React, Redux, and Sass. Checkout my
              <a
                href='https://github.com/walterswoodward/walterswoodward.github.io'
                aria-label='Portfolio Github Code here'
                id='box2_here_container'
              >
                <b id='box2_here'> Portfolio Website Code here</b>
              </a>
              . A bit about me. I have spent a lot of time in
              academia, cultivating a broad spectrum of skills in music and
              sustainable agriculture in addition to serving in the 215th Army
              Band in Fall River, MA for six years, and completing a Master of
              Arts in Theology from Gordon-Conwell Theological Seminary. In my final
              semester at seminary it became clear to me that it was time that I put all that I had learned into practice as a working
            professional. The decision to pursue web development was a
            relatively easy one to make, because I was already a computer geek,
            an avid problem solver, and an artist. I decided to make my way
            through some online coursework and a six month intensive coding
            bootcamp (Lambda School).
            </p>
          </div>
          <div className='box3'>
            <Picture
              className='box3_img'
              alt='computer desk with coffee'
              sources={[
                {
                  srcSet: 'https://res.cloudinary.com/pacmankana/image/upload/v1553923321/portfolio%20website/about/dream_fit.webp',
                  srcSet: 'https://res.cloudinary.com/pacmankana/image/upload/v1553923321/portfolio%20website/about/dream_fit.png'
                }
              ]}
            />
            On December 10th, 2018, I started my first
           full-time position as a Javascript Developer for The Atom Group in
           Portsmouth, NH. Most of my work involved working with large-scale
           JavaScript web applications, submitting solutions that added
           enhanced functionality and clarity to an existing codebase. After
           that first contract, I started a full-time position with Walkin'
           Pets as a JavaScript/WordPress Developer, a local business which
           provides wheelchairs and other medical supplies for pets in need. My
           core contribution to Walkin' Pets has been to fix, optimize, and maintain their
           custom sizing web app, referred to in-house as the "Wizard", which
           allows users to calculate the correct wheelchair for their pet by
           entering specific measurements (rear leg height, weight, breed
           etc.). I am happy to say that working full-time as a developer has
           only deepened my love of coding.
          </div>
          <div className='box4'>
            <Picture
              className='box4_img'
              alt='working together'
              sources={[
                {
                  srcSet: 'https://res.cloudinary.com/pacmankana/image/upload/v1553923307/portfolio%20website/about/JAMstack_fit.webp',
                  srcSet: 'https://res.cloudinary.com/pacmankana/image/upload/v1553923307/portfolio%20website/about/JAMstack_fit.png'
                }
              ]}
            />
            My experience as a javascript developer has given me a real appreciation for
            working within opinionated frameworks and strongly typed languages in order to facilitate consistent
            coding practices at scale and to avoid spending excessive amounts of time debugging. While I recognize
            that many of the options out there are
            complex, I believe that it is well-worth establishing ground rules for how things should
            be coded. I am looking to transition into AngularJS as my primary JS framework, and am working
            on a personal project now to show off my skills in that area. That said, I am not strongly tied to
            any one language or framework, and relish the opportunity to learn whilest providing for my family.
            If you'd like to contact me, please use the<a
              href='https://walterswoodward.netlify.com/#contact'
              aria-label='Link to Contact Form'
              className='link_to_contact_form'
            >
              <b id='box2_here'> contact form</b>
            </a> at the bottom of this page. Thanks!
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    backgroundColor: state.backgroundColor,
    loadOverlay: state.loadOverlay,
    linearGradient: state.linearGradient
  };
};

export default connect(
  mapStateToProps,
  { toggleOverlay }
)(About);
