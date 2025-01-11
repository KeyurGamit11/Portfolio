import project1 from "../assets/projects/Project1.jpg";
import project2 from "../assets/projects/Project2.jpg";
import project3 from "../assets/projects/Project3.jpg"


export const HERO_CONTENT = `Competitive Programmer & Full-Stack Web Developer passionate about solving complex problems and crafting efficient, user-friendly applications. Proficient in competitive programming with C++ and skilled in building dynamic web solutions using React, Tailwind CSS, and Node.js.`;

export const ABOUT_TEXT = `I am a Final-Year Information Technology Student at L.D. College of Engineering, Ahmedabad, with a strong passion for Competitive Programming and Full-Stack Web Development. I excel in solving complex problems using C++ and have a keen interest in creating dynamic, user-friendly web applications. My technical expertise includes React, Tailwind CSS, and Node.js, which I leverage to build efficient and scalable web solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Sorting Visualizer",
    image : project1,
    description: "An interactive web application designed to visually demonstrate the functionality and performance of popular sorting algorithms in real-time, helping users understand their inner workings and efficiency",
    techStack: ["Python" , "Pygame"],
    github: "https://github.com/KeyurGamit11/sorting-visualizer",
    liveDemo: "",
  },
  {
    title: "Real-Time Chat App",
    image : project2,
    description: "A chat application supporting real-time messaging with socket.io.",
    techStack: ["React", "Socket.IO", "Node.js"],
    github: "https://github.com/KeyurGamit11/chat-app",
    liveDemo: "https://chat-app.example.com",
  },
  {
    title: "My_Portfolio",
    image : project3,
    description: "My personal portfolio website built using React and Tailwind CSS, showcasing my projects, skills, and experience.",
    techStack: ["React","Tailwind CSS"],
    github: "https://github.com/KeyurGamit11/chat-app",
    liveDemo: "https://chat-app.example.com",
  },
  
];

export const CONTACT = {
  address: "R-304 , S.R.P.F Group 11,Vav,Kamrej,Surat,Gujarat,India",
  phoneNo: "+91 9081208515",
  email: "keyurgamit45@gmail.com",
};
