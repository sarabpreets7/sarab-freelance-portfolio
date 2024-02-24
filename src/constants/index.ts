import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import blu from '../assets/blu.png';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
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
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    "title": "Software Developer",
    "companyName": "BluSmart",
    "icon": "https://static.wixstatic.com/media/cc2113_30f05418802a4fad82a19a5074e29da9~mv2.png/v1/fill/w_1001,h_1000,al_c/cc2113_30f05418802a4fad82a19a5074e29da9~mv2.png",
    "iconBg": "#E6DEDD",
    "date": "Aug 2023 - Present",
    "points": [
      "Heading the BluSmart website project, using Angular to build a strong online platform.",
      "Teaming up with designers and coders for a smooth and united user experience.",
      "Aiming for websites that work well and are easy to use by everyone, enhancing visitor satisfaction.",
      "Driving quality improvements in our work by sharing insights and learning from each other."
    ]
    
  },
  {
    "title": "Product Engineer",
    "companyName": "Credable",
    "icon": "data:image/jpeg;base64,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",
    "iconBg": "#383E56",
    "date": "Feb 2022 - Aug 2023",
    "points": [
      "Built web apps with easy-to-use interfaces using popular tools like Angular and React Native.",
      "Involved in all stages of app development, from initial ideas to launching them live.",
      "Made sure our apps look great and work well on any device, for everyone.",
      "Helped our team get better by sharing what I know and learning from feedback."
    ]
  },
  {
    "title": "Software Engineer Intern",
    "companyName": "Optiphoenix",
    "icon": "https://media.licdn.com/dms/image/C4D0BAQFP0n7r3C3kdA/company-logo_200_200/0/1631302286547?e=2147483647&v=beta&t=uriqOZ9KudHM-sbTaZVlRr1T3cLxOyWf-3G251LeDJg",
    "iconBg": "#E6DEDD",
    "date": "Sept 2021 - Feb 2022",
    "points": [
      "Used popular tools like React.js to build user-friendly web apps.",
      "Focused on making websites that look good and run smoothly.",
      "Worked with different teams to make sure our projects were top-notch.",
      "Made sure our websites worked well for everyone, on any device."
    ]
    
  },
 
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sarab proved me wrong.",
    name: "Sara Lee",
    designation: "Tech Lead",
    company: "BluSmart",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sarab does.",
    name: "Chris Brown",
    designation: "Senior Software Engineer",
    company: "Credable",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

// const projects: TProject[] = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     sourceCodeLink: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     sourceCodeLink: "https://github.com/",
//   },
 
// ];
const projects: TProject[] = [
  {
    "name": "BluSmart Website",
    "description": "Developed the official website for BluSmart, an electric vehicle ride-sharing service, showcasing the company's services, mission, and impact on sustainable transportation.",
    "tags": [
      {
        "name": "react",
        "color": "blue-text-gradient"
      },
      {
        "name": "css",
        "color": "pink-text-gradient"
      },
      {
        "name": "javascript",
        "color": "yellow-text-gradient"
      }
    ],
    "image": blu,
    "sourceCodeLink": "https://blu-smart.com/en-IN/"
  },
  // {
  //   "name": "Production Chat App",
  //   "description": "A personal project that mimics the functionality of WhatsApp, featuring real-time messaging, user authentication, and responsive design for seamless communication across devices.",
  //   "tags": [
  //     {
  //       "name": "react",
  //       "color": "blue-text-gradient"
  //     },
  //     {
  //       "name": "firebase",
  //       "color": "orange-text-gradient"
  //     },
  //     {
  //       "name": "material-ui",
  //       "color": "purple-text-gradient"
  //     }
  //   ],
  //   "image": "chatAppImageVariable",
  //   "sourceCodeLink": "https://github.com/sarabpreets7/production-chat-app",
  //   // "deployedLink": "https://react-chat-app-xurc.onrender.com/"
  // }
];

export { services, technologies, experiences, testimonials, projects };
