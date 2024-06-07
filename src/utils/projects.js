const projects = [
  {
    id: "project-1",
    date: 2023,
    title: "Group Software Engineering Project",
    description: "Restaurant discovery app.",
    extendedDesc: `
## Overview
This project marked my initial foray into web application development, where I assumed the role of Lead Frontend Developer. The tech stack comprised React.js, Firebase, and Redux, providing me with a robust foundation in modern web technologies.

## Key Responsibilities and Achievements:
- **Learning and Implementing React.js**: As a beginner in React.js, I dedicated significant time to understanding its core principles, including component-based architecture, state management, and lifecycle methods. This foundational knowledge was crucial in ensuring the development process was smooth and efficient.
- **Translating Designs to Code**: My primary responsibility involved converting Figma designs into fully functional, responsive components. This task required a keen eye for detail and a deep understanding of CSS and HTML to ensure the UI was both visually appealing and user-friendly. I utilised React's component-based architecture to create reusable components, which streamlined the development process and maintained consistency across the application.
- **Backend Integration**: I collaborated closely with backend developers to integrate Firebase functionalities. This involved setting up Firestore for real-time data updates, implementing authentication with Firebase Auth, and managing cloud storage for user-generated content. The use of Redux for state management was instrumental in handling complex application states, enabling seamless data flow between the frontend and backend.
- **Team Collaboration and Project Management**: Working in a team environment taught me the importance of clear communication, version control with Git, and agile methodologies. Regular stand-ups and code reviews ensured that everyone was aligned with the project goals and timelines. As a team, we faced numerous challenges, such as resolving merge conflicts and optimising performance, but through collaborative problem-solving, we successfully overcame these obstacles.
- **Outcome and Reflection**: The project culminated in a fully functional restaurant discovery application, which allowed users to search for restaurants based on their location and preferences. Users could view restaurant details, reviews, and ratings, with all data being managed efficiently through Firebase. Our team's effort and dedication were recognised with a grade of Distinction, highlighting the quality and impact of our work.

## Skills Acquired and Lessons Learned:
- **Proficiency in React.js**: Gained a thorough understanding of React.js, which is now a cornerstone of my frontend development skills.
- **UI/UX Design**: Enhanced my ability to translate design mockups into interactive, user-centric interfaces.
- **State Management**: Learned to manage complex application states using Redux, ensuring data consistency and predictability.
- **Backend Integration**: Developed skills in integrating frontend applications with backend services, particularly with Firebase.
- **Collaboration and Project Management**: Improved my teamwork, communication, and project management abilities, essential for any successful development project.

This experience not only solidified my technical skills but also taught me the importance of adaptability, continuous learning, and effective collaboration in achieving project success.
`,
    link: "/projects/project-1",
    images: [
      {
        src: "/images/RestaurantApp/restaurant-app-detailspage.jpg",
        caption: "Detail Page",
      },
      {
        src: "/images/RestaurantApp/restaurant-app-filter.jpg",
        caption: "Filter Page",
      },
      {
        src: "/images/RestaurantApp/restaurant-app-home.jpg",
        caption: "Home Page",
      },
      {
        src: "/images/RestaurantApp/restaurant-app-map.jpg",
        caption: "Map Page",
      },
    ],
    tech: ["React", "Firebase", "Zustand"],
  },
  {
    id: "project-2",
    date: 2023,
    title: "Python Machine Learning Tool",
    description:
      "A Machine Learning tool for credit card clustering. Developed for my Thesis.",
    link: "/projects/project-2",
    images: [],
    tech: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    id: "project-3",
    date: 2023,
    title: "Unify",
    description: "A Spotify powered web application matching users.",
    link: "/projects/project-3",
    images: [],
    tech: ["React", "Spotify API", "Firebase", "Zustand"],
  },
  // Add more projects as needed
];

export default projects;
