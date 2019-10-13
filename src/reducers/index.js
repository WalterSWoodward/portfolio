import {
  ERROR,
  CHANGE_BACKGROUND,
  TOGGLE_OVERLAY,
  TOGGLE_DROP_DOWN
} from "../actions";
import {
  faLink,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";

const initialState = {
  projects: {
    "wizard": {
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1556986867/portfolio%20website/portfolio_cards/hpwizard.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1556986867/portfolio%20website/portfolio_cards/hpwizard.png",
      alt: "handicappedpets wizard sizer",
      title: "Wizard Sizer",
      languages: "WordPress, PHP, SQL, JavaScript",
      text: "A highly interactive wheelchair sizing application which I fixed, rebuilt, and refactored for Walkin' Pets",
      deploy_link: "https://www.handicappedpets.com/wheelchair-sizer/",
      deploy_link_icon: faLink
    },
    "exercise_tracker": {
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200388/portfolio%20website/portfolio_cards/exercise_tracker.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200388/portfolio%20website/portfolio_cards/exercise_tracker.png",
      alt: "exercise tracker app",
      title: "Exercise Tracker",
      languages: "React, Netlify, Heroku, Mongoose, Express",
      text: "A MERN stack app which facilitates daily data logging and tracking of user exercise routines",
      deploy_link: "https://relaxed-northcutt-3bf624.netlify.com/",
      deploy_link_icon: faLink,
      code_link: "https://github.com/walterswoodward/exercise_tracker_frontend",
      code_link_icon: faGithub
    },
    "url_shortener": {
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200393/portfolio%20website/portfolio_cards/url_shortener.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200393/portfolio%20website/portfolio_cards/url_shortener.png",
      alt: "url shortener app",
      title: "URL Shortener",
      languages: "React, Netlify, Heroku, Mongoose, Express",
      text: "A MERN stack app which generates a new shortened URL given a valid URL address",
      deploy_link: "https://vibrant-leakey-c7c0f0.netlify.com/",
      deploy_link_icon: faLink,
      code_link: "https://github.com/walterswoodward/url_shortener_frontend",
      code_link_icon: faGithub
    },
    "calculator": {
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200392/portfolio%20website/portfolio_cards/react_calculator.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200392/portfolio%20website/portfolio_cards/react_calculator.png",
      alt: "react calculator screen shot",
      title: "React Calculator",
      languages: "React, Netlify",
      text: "A clone of the macOS basic calculator that I built as the fourth project in the FCC Front End curriculum!",
      deploy_link: "https://ecstatic-noether-3a2a9e.netlify.com/",
      deploy_link_icon: faLink,
      code_link: "https://github.com/walterswoodward/react_calculator",
      code_link_icon: faGithub
    },
    "drum_machine": {
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200388/portfolio%20website/portfolio_cards/drum_machine.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200388/portfolio%20website/portfolio_cards/drum_machine.png",
      url_link: "https://res.cloudinary.com/pacmankana/image/upload/v1543200388/portfolio%20website/portfolio_cards/drum_machine.webp",
      alt: "drum machine screen shot",
      title: "Drum Machine",
      languages: "React, Netlify",
      text: "Make some beats with this simple drum machine I made as my third project in the FCC Front End curriculum!",
      deploy_link: "https://serene-mirzakhani-902b73.netlify.com/",
      deploy_link_icon: faLink,
      code_link: "https://github.com/walterswoodward/react-drum-machine",
      code_link_icon: faGithub
    },
    "markdown_previewer": {
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200389/portfolio%20website/portfolio_cards/markdown_previewer.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200389/portfolio%20website/portfolio_cards/markdown_previewer.png",
      alt: "markdown previewer screen shot",
      title: "Markdown Previewer",
      languages: "React, Javascript, Netlify",
      text: "Instantly preview the output of your HTML markdown using this app! The second project I completed in FCC's Front End curriculum!",
      deploy_link: "https://awesome-stonebraker-052383.netlify.com/",
      deploy_link_icon: faLink,
      code_link: "https://github.com/walterswoodward/react-markdown-previewer",
      code_link_icon: faGithub
    },
    "tesla_tribute": {
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200393/portfolio%20website/portfolio_cards/tesla.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200393/portfolio%20website/portfolio_cards/tesla.jpg",
      alt: "Tesla Making Lightening with his Tesla Coil",
      title: "Tesla Tribute Page",
      languages: "Basic vanilla HTML and CSS",
      text: "This was my first FCC project! Just a simple static page with some information on the famous inventor, Nikola Tesla.",
      deploy_link: "https://codepen.io/pacManKana/pen/oPabKx",
      deploy_link_icon: faCodepen
    },

    "freeCodeCamp": {
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200388/portfolio%20website/portfolio_cards/fcc_card_img.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200388/portfolio%20website/portfolio_cards/fcc_card_img.png",
      alt: "freeCodeCamp company logo",
      title: "freeCodeCamp",
      languages: "Express, MongoDB",
      text: "FCC has been very helpful in learning some of the fundamentals of web app development!",
      deploy_link: "https://www.freecodecamp.org/walterswoodward",
      deploy_link_icon: faExternalLinkAlt
    },
    "codewars": {
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200388/portfolio%20website/portfolio_cards/codewars.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200388/portfolio%20website/portfolio_cards/codewars.png",
      alt: "code wars company logo",
      title: "Codewars",
      languages: "Javascript",
      text: "Codewars has been very important in transitioning me from a beginner to an intermediate javascript coder.",
      deploy_link: "https://www.codewars.com/users/pacManKana",
      deploy_link_icon: faExternalLinkAlt
    }
    // OLDER PROJECTS -- START
    // "quote_machine": {
    //   image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200391/portfolio%20website/portfolio_cards/quote_machine.webp",
    //   alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200391/portfolio%20website/portfolio_cards/quote_machine.png",
    //   alt: "react redux quote machine",
    //   title:"Quote Machine",
    //   languages:"React and Redux",
    //   text:"View a new random quote each time your press the `Next` button icon and share the quotes you like on Twitter!",
    //   deploy_link:"https://walterswoodward.github.io/react-redux-quote-machine/",
    //   deploy_link_icon:  faCode,
    //   code_link: "https://github.com/walterswoodward/react-redux-quote-machine",
    //   code_link_icon: faGithub
    // },
    // "min_portfolio": {
    //   image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200391/portfolio%20website/portfolio_cards/portfolio.webp",
    //   alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200391/portfolio%20website/portfolio_cards/portfolio.png",
    //   alt: "minimalist portfolio about page",
    //   title:"Minimalist Portfolio",
    //   languages:"Responsive Web Design",
    //   text:"A minimalist portfolio that I completed as the final project of freeCodeCamp's Responsive Web Design curriculum.",
    //   deploy_link: "https://codepen.io/pacManKana/pen/XPLooJ",
    //  deploy_link_icon:  faCodepen
    // },

    // "webix": {
    //   image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200394/portfolio%20website/portfolio_cards/webix.webp",
    //   alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200394/portfolio%20website/portfolio_cards/webix.jpg",
    //   alt: "Webix Company Logo",
    //   title: "Webix Mock Docs",
    //   languages:"HTML and CSS",
    //   text: "A mock documentation for those interested in learning how to use Webix. Part of the Responsive Web Design curriculum through FCC.",
    //   deploy_link:"https://codepen.io/pacManKana/pen/xaNjZG?editors=1100",
    //   deploy_link_icon:  faCodepen
    // },
    // "fiji_crafts": {
    //   image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200388/portfolio%20website/portfolio_cards/fpc_logo.webp",
    //   alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200388/portfolio%20website/portfolio_cards/fpc_logo.png",
    //   alt: "Fiji Palm Crafts Logo",
    //   title: "Mock Landing Page",
    //   languages:"HTML and CSS",
    //   text:"A landing page for a fictitious company (Fiji Palm Crafts). Part of the Responsive Web Design curriculum through FCC.",
    //   deploy_link: "https://codepen.io/pacManKana/pen/NLoBvO",
    //   deploy_link_icon:   faCodepen
    // },
    // "fijian_mat": {
    //   image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200388/portfolio%20website/portfolio_cards/fijian_mat.webp",
    //   alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200388/portfolio%20website/portfolio_cards/fijian_mat.png",
    //   alt: "Fijian Mat Traditional Pattern",
    //   title:"Mock Survey Form",
    //   languages:"HTML and CSS",
    //   text:"A mock survey form I created for a fictitious company Fiji Made Mats. Part of the FCC Responsive Web Design curriculum.",
    //   deploy_link:"https://codepen.io/pacManKana/pen/GwpEBL",
    //   deploy_link_icon:  faCodepen
    // },
    // "pomodoro": {
    //   image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200390/portfolio%20website/portfolio_cards/pomodoro.webp",
    //   alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200390/portfolio%20website/portfolio_cards/pomodoro.png",
    //   alt: "react pomodoro screen shot",
    //   title:"React Pomodoro",
    //   languages:"React, Netlify",
    //   text:"An app built to help coders to practice the pomodoro time management technique throughout the work day!",
    //   deploy_link:"https://goofy-fermi-ba815d.netlify.com/",
    //   deploy_link_icon:  faLink,
    //   code_link: "https://github.com/walterswoodward/react_pomodoro",
    //   code_link_icon: faGithub
    // },
    // "randomizer": {
    //   image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200392/portfolio%20website/portfolio_cards/randomizer_black_slim.webp",
    //   alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1543200392/portfolio%20website/portfolio_cards/randomizer_black_slim.png",
    //   alt: "randomizer project logo",
    //   title: "Randomizer",
    //   languages:"MongoDB, Express, React, NodeJS",
    //   text:"An education based application designed to help teachers track, process, and manage class participation data",
    //   deploy_link: "https://github.com/Lambda-School-Labs/CS8-randomizer",
    //   deploy_link_icon: faCode,
    //   code_link:"https://lambda-labs-frontend.herokuapp.com/",
    //   code_link_icon: faLink
    // },
    // OLDER PROJECTS -- END
  },
  backgroundColor: '',
  linearGradient: '',
  darkerBackgroundColor: '',
  dropDownOpen: false,
  loadOverlay: {
    display: 'block',
    zIndex: 2000,
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'black',
  },
  error: "default error message"
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BACKGROUND:
      const HUE = Math.floor(Math.random() * 230);
      const SAT = 70;
      const LIGHT = 70;
      let newColor = `hsl(${HUE}, ${SAT}%, ${LIGHT}%)`;
      let newLinearGradient = 'linear-gradient(to top, ' + newColor + ' 0%, white 100%)';
      let newDarkerBackgroundColor = `hsl(${HUE}, 40%, 25%)`;
      
      return { ...state, linearGradient: newLinearGradient, backgroundColor: newColor, darkerBackgroundColor: newDarkerBackgroundColor };
    case TOGGLE_DROP_DOWN:

      return { ...state, dropDownOpen: !state.dropDownOpen };
    case TOGGLE_OVERLAY:
      let display = state.loadOverlay.display === 'block';
      let newDisplay = '';
      display ? newDisplay = 'none' : newDisplay = 'block';
      return {
        ...state,
        loadOverlay: {
          ...state.loadOverlay,
          display: newDisplay
        }
      }
    case ERROR:
      return { ...state, error: action.errorMessage };
    default:
      return state;
  }
};
