import { iconsList } from "@tabler/icons-react";
import { link } from "fs";
import { title } from "process";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experiences", link: "#experiences" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently learning financial software development",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Unreal Engine 5 Game Development",
      des: "Exploring the world of game development with Unreal Engine 5, creating a 3D game from scratch.",
      img: "/unrealengine.jpg",
      iconLists: ["/ue.svg", "/c.svg", "/c++.svg"],
      link: "https://www.youtube.com/watch?v=F4fvmBVFKGw",
    },
    {
      id: 2,
      title: "Corvette C8 3D Web Animation",
      des: "A fully interactive web animation created using the latest tech stack for one of my favorite cars, the Corvette C8.",
      img: "/c8.png",
      iconLists: ["/three.svg", "/tail.svg", "/re.svg", "/c.svg"],
      link: "https://carshow1.netlify.app/",
    },
    {
      id: 3,
      title: "ThreeJS Parallax Website",
      des: "A demo Parallax Website created using Three.js, React.js, and Tailwind CSS.",
      img: "/threejs.png",
      iconLists: ["/three.svg", "/tail.svg", "/ts.svg", "/re.svg"],
      link: "https://threejstutorial.netlify.app/",
    },
    {
      id: 4,
      title: "Anti Distraction Extension",
      des: "A chrome extensions that block websites and apps to help you focus on your work.",
      img: "/antidistraction.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
      link: "https://github.com/Saksham-89/Website-Blocker",
    },
    {
      id:5,
      title: "Visual Integration Calculator",
      des: "A calculator that helps you visualize the integration of functions.",
      img:"/integration.png",
      iconLists:['/python.svg'],
      link:"https://github.com/Saksham-89/Integration-Calculator/tree/main",
    },
    {
      id: 6,
      title: "Product Landing Page",
      des: "A product landing page for a Trombone company.",
      img: "/productlanding.png",
      iconLists:["/html.svg", "/css.svg", "/js.svg"],
      link:"https://saksham-89.github.io/Product-Landing-Page/"
    }
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with a local media agency to create a booking system for their clients. The system allows clients to book appointments and services online, and the agency to manage bookings and staff schedules.",
      name: "- Shotmaniacs",
      title: "2024",
    },
    {
      quote:
        "Creating a chat application implementing complex networking concepts such as Multi-hop routing, data encryption, and secure communication. The app allows users to chat with each other in real-time, and share files securely.",
      name: "- University of Twente",
      title: "2024",
    },
    {
      quote:
        "Creating a dots and boxes game using Java. The game allows two players to play against each other, and the player with the most boxes wins. It also included an artificial intelligence which could play against the user.",
      name: "- University of Twente",
      title: "2023",
    },
    {
      quote:
        "A debit card system which uses RFID as debit cards and can be scanned using Arduino. The system ensures secure transactions and allows users to check their balance and transaction history through a web interface connected to a secure database.",
      name: "- University of Twente",
      title: "2023",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Booking System - Shotmaniacs",
      desc: "Collaborating with a local media agency to create a booking system for their clients. The system allows clients to book appointments and services online, and the agency to manage bookings and staff schedules.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Chat Application",
      desc: "Creating a chat application implementing complex networking concepts such as Multi-hop routing, data encryption, and secure communication. The app allows users to chat with each other in real-time, and share files securely.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Debit Card System",
      desc: "A debit card system which uses RFID as debit cards and can be scanned using Arduino. The system ensures secure transactions and allows users to check their balance and transaction history through a web interface connected to a secure database.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Dots and Boxes Video Game",
      desc: "Creating a dots and boxes game using Java. The game allows two players to play against each other, and the player with the most boxes wins. It also included an artificial intelligence which could play against the user",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:"https://github.com/Saksham-89",
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/saksham-singh-birla-82594b276/",
    },
  ];