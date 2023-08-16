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
  gcm,
  codecademy,
  jrw,
  econoexplore
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Figma Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
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
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "Digital Marketing Internship",
    company_name: "Global Commerce Media",
    icon: gcm,
    iconBg: "#E6DEDD",
    date: "March 2021 - April 2022",
    points: [
      "Excelling in remote teamwork through proactive Slack engagement and effective Google Meet participation.",
      "Fusing digital marketing learning with practical strategies, like SEO, social media, and analytics.",
      "Crafting engaging content, managing social platforms, and adapting content to brand identity.",
      "Extracting insights from analytics, optimizing campaigns, and contributing to data-based decisions.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "CodeCademy",
    icon: codecademy,
    iconBg: "#E6DEDD",
    date: "April 2022 - Current",
    points: [
      "Acquiring skills in crafting websites that adapt seamlessly across various devices and screen sizes using HTML and CSS.",
      "Learning JavaScript to build dynamic and interactive elements, enriching user engagement and site functionality.",
      "Exploring popular front-end libraries like React.js to efficiently construct user interfaces and manage state.",
      "Gaining knowledge of techniques to enhance site speed and performance, ensuring efficient loading and seamless user experiences.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Japanese Recipe Recomendations - In Progress",
    description:
      "A web-based hub offering authentic Japanese recipes, from classics to favorites, with clear instructions, creating an at-home culinary adventure.",
    tags: [
      {
        name: "react",
        color: "black",
      },
      {
        name: "tailwind",
        color: "black",
      },
      {
        name: "vite",
        color: "black",
      },
    ],
    image: jrw,
    source_code_link: "https://github.com/",
    website_link: "https://japanese-r5nq.vercel.app/#",
  },
  {
    name: "EconoExplore",
    description:
      "An online guide enabling budget travel with tips on lodging, dining, transportation, and hacks for cost-effective exploration and unforgettable experiences.",
    tags: [
      {
        name: "figma",
        color: "white",
      },
      {
        name: "dora.run",
        color: "white",
      },
      
    ],
    image: econoexplore,
    source_code_link: "https://github.com/",
    website_link: "https://www.figma.com/proto/M1DF7aAafflvlalVXYhjFV/EconoExplore?page-id=0%3A1&type=design&node-id=1-2&viewport=650%2C531%2C0.52&t=1Mq37egS0QduyBoM-1&scaling=min-zoom&mode=design",
  },

];

export { services, technologies, experiences, testimonials, projects };
