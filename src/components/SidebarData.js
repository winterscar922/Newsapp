import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBiking,
  faBowlFood,
  faBurger,
  faBusinessTime,
  faCrop,
  faFaceAngry,
  faFilm,
  faFlask,
  faGamepad,
  faHeart,
  faHome,
  faHouseLaptop,
  faLaptop,
  faLaptopCode,
  faLaptopFile,
  faLaptopHouse,
  faMoneyBill,
  faMusic,
  faPersonBiking,
  faPoop,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
  {
    title: "Home",
    path: "/news",
    icon: <FontAwesomeIcon icon={faHome} />,
    cname: "nav-text",
  },
  {
    title: "Sport ",
    path: "/sport ",
    icon: <FontAwesomeIcon icon={faRunning} />,
    cname: "nav-text",
  },
  {
    title: "Technology  ",
    path: "/tech  ",
    icon: <FontAwesomeIcon icon={faLaptopCode} />,
    cname: "nav-text",
  },
  {
    title: "Finance ",
    path: "/finance ",
    icon: <FontAwesomeIcon icon={faMoneyBill} />,
    cname: "nav-text",
  },
  {
    title: "Business ",
    path: "/business ",
    icon: <FontAwesomeIcon icon={faBusinessTime} />,
    cname: "nav-text",
  },

  {
    title: "Entertainment ",
    path: "/entertainment ",
    icon: <FontAwesomeIcon icon={faFilm} />,
    cname: "nav-text",
  },
  {
    title: "Travel  ",
    path: "/travel  ",
    icon: <FontAwesomeIcon icon={faBiking} />,
    cname: "nav-text",
  },
  {
    title: "Music",
    path: "/music",
    icon: <FontAwesomeIcon icon={faMusic} />,
    cname: "nav-text",
  },
  {
    title: "Food  ",
    path: "/food  ",
    icon: <FontAwesomeIcon icon={faBurger} />,
    cname: "nav-text",
  },
  {
    title: "Science  ",
    path: "/science  ",
    icon: <FontAwesomeIcon icon={faFlask} />,
    cname: "nav-text",
  },
  {
    title: "Gaming  ",
    path: "/gaming  ",
    icon: <FontAwesomeIcon icon={faGamepad} />,
    cname: "nav-text",
  },
];
