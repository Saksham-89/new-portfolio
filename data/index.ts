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
      title: "Currently learning Intelligent Embedded Systems",
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
      title: "Smart Walking Stick For Blind People",
      des: "A smart walking stick for blind people that uses ultrasonic sensors to detect obstacles and provide auditory feedback to the user. Includes a web interface for tracking user location and history. The system uses a combination of hardware and software to provide a comprehensive solution for blind people.",
      img: "/stick.png",
      iconLists: ["/python.svg", "/arduino.svg", "/c++.svg", "/re.svg"],
      link: "",
    },
    {
      id: 2,
      title: "Dots and Boxes Multiplayer Game",
      des: "A multiplayer game of dots and boxes that allows two players to play against each other. The game includes an artificial intelligence that can play against the user. The game is implemented in Java and uses a graphical user interface. Uses Object Oriented Programming concepts.",
      img: "/dots.png",
      iconLists: ["/Java.svg",],
      link: "https://github.com/Saksham-89/ProgrammingProject",
    },
    {
      id: 3,
      title: "Graph Isomorphism Algorithm",
      des: "A graph isomorphism algorithm that checks if two graphs are isomorphic. The algorithm uses a combination of depth first search and backtracking to find the isomorphism. The algorithm is implemented in Python. Work on graphs with 100000+ nodes and 100000+ edges in less than 10 seconds. Uses Discrete Mathematics and Abstract Algebra concepts.",
      img: "/graphiso.png",
      iconLists: ["/python.svg"],
      link: "",
    },
    {
      id:4,
      title: "Banking Application",
      des: "A banking application that allows users to create an account, deposit and withdraw money, and check their balance. The application uses a web interface and a secure database to store user information. The application is implemented in JavaScript. Uses up to date security protocols to ensure secure transactions. The application is designed to be user-friendly and easy to use.",
      img:"/banking.png",
      iconLists:['/js.svg', '/html.svg', '/css.svg', '/re.svg', '/ts.svg'],
      link:"https://github.com/Saksham-89/banking-app",
    },
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
      desc: "Collaborating with a local media agency to create a booking system for their clients. The system allows clients to book appointments and services online, and the agency to manage bookings and staff schedules. The system is implemented in JavaScript and uses a web interface. The system uses an API built from scratch to ensure secure transactions.",
      className: "md:col-span-2",
      thumbnail: "/cam.svg",
    },
    {
      id: 2,
      title: "Chat Application",
      desc: "Creating a chat application implementing complex networking concepts such as Multi-hop routing, data encryption, and secure communication. The app allows users to chat with each other in real-time, and share files securely. The app handles packets collisions through CSMA protocol.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/chat.svg",
    },
    {
      id: 3,
      title: "VR Meditation App",
      desc: "A VR app that helps users immerse themselves in a virtual environment and meditate. The app uses a combination of hardware and software to provide a comprehensive solution for meditation. Users can also upload customs environments that they consider to be their 'happy place' and can be transported there at any time.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/VR.svg",
    },
    {
      id: 4,
      title: "Debit Card System",
      desc: "A debit card system which uses RFID as debit cards and can be scanned using Arduino. The system ensures secure transactions and allows users to check their balance and transaction history through a web interface connected to a secure database. The system uses a combination of hardware and software to provide a comprehensive solution for debit card transactions.",
      className: "md:col-span-2",
      thumbnail: "/debit.svg",
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
