import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { toggleOverlay } from '../actions';
import { Picture } from 'react-responsive-picture';

class About extends React.PureComponent {
  componentDidMount() {
    this.props.toggleOverlay();
  }

  renderLanding = function (){
    return (
   
      <div
        id='fade_wrapper'
        style={{
          background: this.props.linearGradient,
          opacity: 0.9
        }}
      >
        <div id='box1_text'>
          <div className='box1_name'>WALTER WOODWARD</div>
          <div className='box1_description'>FULL STACK WEB DEVELOPER</div>
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
    );
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
          {this.renderLanding()}
          </div>
         
          <div id='journey'
            className='box2'
            style={{
              background: this.props.darkerBackgroundColor
            }}>
            <Picture
              className='box2_img'
              alt='walter profile'
              sources={[
                {
                  srcSet: 'https://res.cloudinary.com/pacmankana/image/upload/v1553923628/portfolio%20website/about/profile_fit.webp',
                  type: "image/webp"
                },
                {
                  srcSet: 'https://res.cloudinary.com/pacmankana/image/upload/v1553923628/portfolio%20website/about/profile_fit.png',
                  type: "image/png"
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
                <b class='box2_internal_links'> Portfolio Website Code here</b>
              </a>
              . A bit about me. I started learning to program in January of 2018. 
              I accepted my first offer for a full-time position as a Javascript Developer at The Atom Group in
           Portsmouth, NH. Most of my work involved working with large-scale
           JavaScript web applications, submitting solutions that added
           enhanced functionality and clarity to an existing codebase. In March of 
           2019 I accepted a position at Walkin'
           Pets as a LAMP stack Developer, a local business which
           provides wheelchairs and other medical supplies for pets in need. My
           core contribution to Walkin' Pets has been to fix, optimize, and maintain their
           custom sizing web app, referred to in-house as the "Wizard", which
           allows users to calculate the correct wheelchair for their pet by
           entering specific measurements (rear leg height, weight, breed
           etc.).
            </p>
          </div>
          <div className='box3'
            style={{
              background: this.props.darkerBackgroundColor
            }}>
            <Picture
              className='box3_img'
              alt='computer desk with coffee'
              sources={[
                {
                  srcSet: 'https://res.cloudinary.com/pacmankana/image/upload/v1575338983/portfolio%20website/about/dream_fit_webp.webp',
                  type: "image/webp"
                },
                {
                  srcSet: 'https://res.cloudinary.com/pacmankana/image/upload/v1575338984/portfolio%20website/about/dream_fit_png.png',
                  type: "image/png"
                }
              ]}
            />
            
          </div>
          <div className='box4' style={{
              background: this.props.darkerBackgroundColor
            }}>
            <Picture
              className='box4_img'
              alt='working together'
              sources={[
                {
                  srcSet: 'https://res.cloudinary.com/pacmankana/image/upload/v1575338983/portfolio%20website/about/JAMstack_webp.webp',
                  type: "image/webp"
                },
                {
                  srcSet: 'https://res.cloudinary.com/pacmankana/image/upload/v1575338983/portfolio%20website/about/JAMstack_png.png',
                  type: "image/png"
                }

              ]}
            />
            I've been programming for over two years now, and I'm happy to say that I still very much enjoy
            honing my skills in this craft. As a software developer at Scan123, I mainly work
            within the LEMP stack building, maintaining, and utlilizing libraries in various languages
            to suit the company's needs. Check out my<a
              href='#portfolio'
              aria-label='Link to Portfolio Section'
              className='link_to_contact_form'
            >
              <b class="box2_internal_links"> portfolio </b>
            </a>  
             section below. If you'd like to reach out, feel free to use the <a
              href='#contact'
              aria-label='Link to Contact Form'
              className='link_to_portfolio_section'
            >
              <b class="box2_internal_links"> contact form</b>
            </a> at the bottom of this page.
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
    linearGradient: state.linearGradient,
    darkerBackgroundColor: state.darkerBackgroundColor
  };
};

export default connect(
  mapStateToProps,
  { toggleOverlay }
)(About);
