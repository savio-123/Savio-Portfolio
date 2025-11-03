
import { image, source } from "framer-motion/client";
import {
    mobile,
    backend,
    javascript,
    typescript,
    html,
    css,
    sing,
    gaming,
    web,
    webdev,
    edit,
    reactjs,
    tailwind,
    frontend,
    nodejs,
    mysql,
    java,
    git,
    threejs,
    Travel,
    Resumeai,
    Movie
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "interests",
      title: "Interests",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: webdev,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Website Consulting",
      icon: backend,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mysql,
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
      name: "java",
      icon: java,
    },
  ];
  
  const educations = [
    {
      title: "University Of Calicut",
      date: "September 2022 - June 2025",
      points: [
        "Bachelor Of Science In Computer Science",
        "CGPA: 7.7",
      ],
    },
    {
      title: "GVHSS Korangad,Kozhikode",
      date: "June 2020 - April 2022",
      points: [
        "Higher Secondary Education",
        "Percentage: 85.88%",
      ],
    },
    {
      title: "MGM HSS Engapuzha,Kozhikode",
      date: "June 2019 - April 2020",
      points: [
        "High School Education",
        "Percentage: 97%",
      ],
    }
  ];
  
  const works= [
    {
      title: "Movie Info App",
      description:
        "A web application that allows users to search for movies and get information about them using the TMDB API. Built with React, Node.js, and CSS.",
        image: Movie,
        link: "https://savio-123.github.io/MovieSiteInfo/",
        tags: [
          {
            name:"react",
            color:"pink-text-gradient"
          },
          {
            name:"css",
            color:"blue-text-gradient"
          },
          { name:"tmdbapi",
            color:"green-text-gradient"
          },
          {
            name:"tailwind",
            color:"text-white"
          } 
        ]
    },
    {
      title: "Travel Guide App",
      description:
        "A web application that provides information about various travel destinations, including popular attractions and how to get there. Built with React, Node.js, and CSS.",
        image: Travel,
        link: "https://savio-123.github.io/TravelWeb/",
        tags: [
          {
            name:"react", 
            color:"pink-text-gradient"
          },  
          {
            name:"css",
            color:"blue-text-gradient"              
          },
          {
            name:"unsplashapi",
            color:"green-text-gradient"
          },
          {
            name:"tailwind",
            color:"text-white"
          }
        ]
    },
    {
      title: "Resume Analyzer",
      description:
      "A web application that analyzes resumes and provides feedback on their content and structure. Built with React, Node.js, and CSS.",
      image: Resumeai,
      link: "https://ai-resume-analyzer-chi-lemon.vercel.app/",
      tags: [
        {
          name:"react", 
          color:"pink-text-gradient"
        },  
        {
          name:"css",
          color:"blue-text-gradient"              
        },
        {
          name:"puter",
          color:"green-text-gradient"
        },
        {
          name:"typescript",
          color:"green-text-gradient"
        },
        {
          name:"tailwind",
          color:"text-white"
        }
      ]
    }

  ];
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Intermediate" },
    { name: "Tamil", level: "Intermediate" },
    { name: "Malayalam", level: "Native" },
  ];
  
  const interests = [
    {
      title: "Singing",
      description:"Singing is one of my hobbies, I love to sing in a group or by myself, it is so much fun to sing and make people smile.",
      icon: sing,
    },
    {
      title: "Gaming",
      description:"I love to play games with my friends and family, it is so much fun to play and make new friends.My communication skills got stronger by playing games.",
      icon: gaming,
    },
    {
      title: "Front-End Development",
      description:"I love to develop websites and apps, it is so much fun to develop and make new webpages",
      icon: web,
    },
    {
      title: "Video Editing",
      description:"I have been editing videos since I was a kid, it is so much fun to edit and make new videos",
      icon: edit,
    }
  ];
 
  export { services, technologies, educations, interests,languages, works };