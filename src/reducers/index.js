import {
  TOGGLE_DROP_DOWN
} from "../actions";
import {
  faLink
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
    "markdown_previewer": {
      image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575260626/portfolio%20website/portfolio_cards/markdown_previewer_wst.webp",
      alt_image_url: "https://res.cloudinary.com/pacmankana/image/upload/v1575260626/portfolio%20website/portfolio_cards/markdown_previewer_wst.png",
      alt: "markdown previewer screen shot",
      title: "Markdown Previewer",
      languages: "React, Javascript",
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
      languages: "HTML, CSS",
      text: "This was my first FCC project! Just a simple static page with some information on the famous inventor, Nikola Tesla.",
      deploy_link: "https://codepen.io/pacManKana/pen/oPabKx",
      deploy_link_icon: faCodepen
    }
  },
  dropDownOpen: false,
  error: "default error message"
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DROP_DOWN:
      return { ...state, dropDownOpen: !state.dropDownOpen };
    default:
      return state;
  }
};
