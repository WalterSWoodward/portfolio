import {
    TOGGLE_DROP_DOWN
} from "../actions";
import {
    faLink
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faAngular, faReact, faLaravel } from "@fortawesome/free-brands-svg-icons";

const initialState = {
    projects: {
        "full-stack-todolist": {
            tool_icons: [faReact],
            title: "Todolist CRUD App",
            frontend_tools: "React, Redux",
            backend_tools: "Golang",
            database_tools: "Docker, mySQL",
            text: "A todolist built with React/Redux/Axios on the Frontend and Golang, Docker, mySQL on the backend",
            deploy_link: "https://basic-angular-app.netlify.app/",
            deploy_link_icon: faLink,
            code_link: "https://github.com/walterswoodward/basic-angular-app",
            code_link_icon: faGithub
        },
        "angular": {
            tool_icons: [faAngular],
            alt: "handicappedpets wizard sizer",
            title: "Angular Online Store",
            frontend_tools: "Angular 8",
            backend_tools: "???",
            database_tools: "???",
            text: "A demo for an online store using Angular 8",
            deploy_link: "https://basic-angular-app.netlify.app/",
            deploy_link_icon: faLink,
            code_link: "https://github.com/walterswoodward/basic-angular-app",
            code_link_icon: faGithub
        },
        "nine-acre-photography": {
            tool_icons: [faLaravel],
            alt: "nine acre photography community",
            title: "Nice Acre Photography",
            frontend_tools: "Laravel, VueJS, TailwindCSS",
            backend_tools: "???",
            database_tools: "???",
            text: "Nine Acre Photography's official hub for helping aspiring photographers get connected",
            deploy_link: "https://basic-angular-app.netlify.app/",
            deploy_link_icon: faLink,
            code_link: "https://github.com/walterswoodward/basic-angular-app",
            code_link_icon: faGithub
        }
    },
    dropDownOpen: false
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DROP_DOWN:
            return { ...state, dropDownOpen: !state.dropDownOpen };
        default:
            return state;
    }
};
