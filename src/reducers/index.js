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
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575260626/portfolio%20website/portfolio_cards/hpwizard_wst.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575260626/portfolio%20website/portfolio_cards/hpwizard_wst.png",
      alt: "handicappedpets wizard sizer",
      title: "Wizard Sizer",
      languages: "WordPress, PHP, mySQL, JavaScript",
      text: "A highly interactive wheelchair sizing application which I built for Walkin' Pets",
      deploy_link: "https://www.handicappedpets.com/wheelchair-sizer/",
      deploy_link_icon: faLink
    },
    "dynamic_html_editor": {
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575260626/portfolio%20website/portfolio_cards/dynamic_html_editor_wst.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575260626/portfolio%20website/portfolio_cards/dynamic_html_editor_wst.png",
      alt: "dynamic html editor",
      title: "HTML Editor",
      languages: "HTML, CSS, JavaScript, NodeJS",
      text: "A custom made HTML editor that I put together for some co-workers. It allows you to edit and duplicate HTML snippets.",
      deploy_link: "https://dynamic-html-editor.netlify.com/",
      deploy_link_icon: faLink
    },
    "exercise_tracker": {
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575339498/portfolio%20website/portfolio_cards/exercise_tracker_webp.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575339498/portfolio%20website/portfolio_cards/exercise_tracker_png.png",
      alt: "exercise tracker app",
      title: "Exercise Tracker",
      languages: "React, Netlify, Heroku, Mongoose, Express",
      text: "A MERN stack app which facilitates daily data logging and tracking of user exercise routines",
      deploy_link: "https://relaxed-northcutt-3bf624.netlify.com/",
      deploy_link_icon: faLink,
      code_link: "https://github.com/walterswoodward/exercise_tracker_frontend",
      code_link_icon: faGithub
    },
    // "url_shortener": {
    //   image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575339499/portfolio%20website/portfolio_cards/url_shortener_webp.webp",
    //   alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575339499/portfolio%20website/portfolio_cards/url_shortener_png.png",
    //   alt: "url shortener app",
    //   title: "URL Shortener",
    //   languages: "React, Netlify, Heroku, Mongoose, Express",
    //   text: "A MERN stack app which generates a new shortened URL given a valid URL address",
    //   deploy_link: "https://q_auto/vibrant-leakey-c7c0f0.netlify.com/",
    //   deploy_link_icon: faLink,
    //   code_link: "https://github.com/walterswoodward/url_shortener_frontend",
    //   code_link_icon: faGithub
    // },
    "calculator": {
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575339498/portfolio%20website/portfolio_cards/calculator_webp.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575339498/portfolio%20website/portfolio_cards/calculator_png.png",
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
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575260626/portfolio%20website/portfolio_cards/drum_machine_wst.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575260626/portfolio%20website/portfolio_cards/drum_machine_wst.png",
      url_link: "https://res.cloudinary.com/pacmankana/image/upload/q_auto/v1543200388/portfolio%20website/portfolio_cards/drum_machine.webp",
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
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575260626/portfolio%20website/portfolio_cards/markdown_previewer_wst.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575260626/portfolio%20website/portfolio_cards/markdown_previewer_wst.png",
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
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575339499/portfolio%20website/portfolio_cards/tesla_png.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575339499/portfolio%20website/portfolio_cards/tesla_png.png",
      alt: "Tesla Making Lightening with his Tesla Coil",
      title: "Tesla Tribute Page",
      languages: "Basic vanilla HTML and CSS",
      text: "This was my first FCC project! Just a simple static page with some information on the famous inventor, Nikola Tesla.",
      deploy_link: "https://codepen.io/pacManKana/pen/oPabKx",
      deploy_link_icon: faCodepen
    },

    "freeCodeCamp": {
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575339498/portfolio%20website/portfolio_cards/fcc_webp.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575339498/portfolio%20website/portfolio_cards/fcc_png.png",
      alt: "freeCodeCamp company logo",
      title: "freeCodeCamp",
      languages: "Express, MongoDB",
      text: "FCC has been very helpful in learning some of the fundamentals of web app development!",
      deploy_link: "https://www.freecodecamp.org/walterswoodward",
      deploy_link_icon: faExternalLinkAlt
    },
    "codewars": {
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575260626/portfolio%20website/portfolio_cards/codwars_wst.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575260626/portfolio%20website/portfolio_cards/codwars_wst.png",
      alt: "code wars company logo",
      title: "Codewars",
      languages: "Javascript",
      text: "Codewars has been very important in transitioning me from a beginner to an intermediate javascript coder.",
      deploy_link: "https://www.codewars.com/users/pacManKana",
      deploy_link_icon: faExternalLinkAlt
    }
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
      const SAT = 40;
      const LIGHT = 30;
      let newColor = `hsl(${HUE}, ${SAT}%, ${LIGHT}%)`;
      let altNewColor = `hsl(${HUE + 30}, ${SAT}%, ${LIGHT}%)`;
      let thirdNewColor = `hsl(${HUE - 30}, ${SAT}%, ${LIGHT}%)`;
      let newLinearGradient = 'linear-gradient(30deg, ' + altNewColor + ' 5%, ' + newColor + ' 55%,' + thirdNewColor + ' 100%)';
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
