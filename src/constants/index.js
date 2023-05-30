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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  AspireSystemsLogoNoBGSmall240,
  ShirtDesignToolPhoto,
  DALLE3Photo,
  PortfolioPhoto,


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
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Front End Developer",
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

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Aspire Systems",
    icon: AspireSystemsLogoNoBGSmall240,
    // iconBg: "#383E56",
    iconBg: "#E6DEDD",
    date: "June 2021 - March 2022",
    points: [
      "Worked with stakeholders to understand their needs and configure Salesforce to meet those requirements. Designed and implemented Salesforce solutions. This involved creating custom objects, fields, workflows, validation rules, and customizing the interface and backend using Salesforce’s declarative and programmatic features",
      "Mentored a team of 4 interns, contributed actively in their training process, suggested and implemented improvements to the training plan, led initiatives throughout the process for their continuous learning in SFDC Technologies",
      // "Worked in the BFSI Sector of Insurance Domain, implemented interactive components based the requirements",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Aspire Systems",
    icon: AspireSystemsLogoNoBGSmall240,
    iconBg: "#E6DEDD",
    date: "Dec 2019 - Jun 2021",
    points: [
      "Wrote test classes and conducted thorough testing of Salesforce functionality to ensure quality and reliability. Also debugged and resolved any issues or bugs that rose during development or post-implementation",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Got trained in Salesforce Administration and Development. Maintained overall configuration, created workflow rules, validation rules and ensured security such as sharing rules, user roles and setting permissions.",
      "Acquired knowledge on cloud infrastructure and its services. got exposed to scripting languages, and performed various sytem administration tasks",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ajay proved me wrong.",
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
    name: "Shirt Design Tool",
    description:
      "Implemented a tool to generate customizable designs that will cater to the users imagination and allows them to tailor product to precisely match their preference using the generative AI image tool.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ShirtDesignToolPhoto,
    source_code_link: "https://github.com/AjayKasthala/3DShirtDesignTool.git",
  },
  {
    name: "DALLE 3.0",
    description:
      "Developed a social media platform for Generative Images using OpenAI. Connected it with DALL-E's image generation AI machine. Built a viewing gallery of all the images which the users have shared with the community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "dalle",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: DALLE3Photo,
    source_code_link: "https://github.com/AjayKasthala/Dall-E_Clone.git",
  },
  {
    name: "Portfolio Website",
    description:
      "Built a personal portfolio website showing the details about my work experience and the details of my projects. Developed the UI using 3D Models, and incorporated them in the page.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: PortfolioPhoto,
    source_code_link: "https://github.com/AjayKasthala/PortfolioWebsite.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
