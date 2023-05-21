import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  coach,
  upwork,
  pro1,
  pro2,
  pro3,
  threejs,
  sass,
  nextjs,
  boostrap,
  gaza,
  three,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React JS",
    icon: reactjs,
  },
  {
    title: "Next JS",
    icon: nextjs,
  },
  {
    title: "Three JS",
    icon: three,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
];

const technologies = [
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  // {
  //   name: "bootstrap",
  //   icon: boostrap,
  // },
  {
    name: "HTML 5",
    icon: html,
  },
];

const experiences = [
  {
    title: "Problem Solving",
    company_name: "Coach Academy",
    icon: coach,
    iconBg: "#fff",
    date: "Feb 2022 - May 2022",
  },
  {
    title: "Freelancers Academy",
    company_name: "Gaza Sky Geeks",
    icon: gaza,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Nov 2022",
  },
  {
    title: "Freelancer on Upwork",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "Aug 2022 - until now",
  },
];

const testimonials = [
  {
    testimonial:
      "Sohad helped be creating an upload section in an existing Next JS App. She did an outstanding job, not only everything worked great, everything looked also really nice. Also the comunication was very easy! Great Freelancer",
  },
  {
    testimonial:
      "Anybody who is looking for a great freelancer, don't look further! Sohad is an amazing freelancer. She is very talented and extremly friendly! I really enjoyed working with her and will defiantly hire her again in the future!",
  },
  {
    testimonial:
      "Sohad is everything you dream of when you are looking for in a freelancer. She is extremly good at her work, she is fast, she is friendly and she gave me great suggestions. So in short everything you are looking for!",
  },
];

const projects = [
  {
    name: "Proshop",
    description:
      "Proshop is an ecommerce website created using express js, mongoose, MongoDB, jwt, and bcryptjs for the backend and react-redux, react, and react-bootstrap for the front-end and supports the Paypal method for paying.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "booststrap",
        color: "pink-text-gradient",
      },
    ],
    image: pro3,
    source_code_link: "https://github.com/Sohad-Almadhoon/proshop",
  },
  {
    name: "Tiktik",
    description:
      "A tiktik is a social media website was created using next js ,typescript, tailwindcss,jwt-decode, react-oauth/google, axios for fetching and posting data, zustand instead of using redux, which acts like the store to store userProfile and other details, and sanity.io for the backend!",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: pro2,
    source_code_link: "https://github.com/Sohad-Almadhoon/tiktik-clone",
  },
  {
    name: "Crypto Currency",
    description:
      "Crypto Currency is an economic website was created using (ant-design, react-redux, reduxjstoolkit, axios, chart.js, html-react-parser, millify ,moment, react-chart-js, typescript and RapidAPI).",
    tags: [
      {
        name: "reduxjs/toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "chartjs",
        color: "green-text-gradient",
      },
      {
        name: "rtk-query",
        color: "pink-text-gradient",
      },
    ],
    image: pro1,
    source_code_link: "https://github.com/Sohad-Almadhoon/Cryptocurrency-App",
  },
];

export { services, technologies, experiences, testimonials, projects };
