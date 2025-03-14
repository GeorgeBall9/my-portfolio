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
- **Translating Designs to Code**: My primary responsibility involved converting Figma designs into fully functional, responsive components. This task required a keen eye for detail and a deep understanding of CSS and HTML to ensure the UI was both visually appealing and user-friendly. I utilised React&apos;s component-based architecture to create reusable components, which streamlined the development process and maintained consistency across the application.
- **Backend Integration**: I collaborated closely with backend developers to integrate Firebase functionalities. This involved setting up Firestore for real-time data updates, implementing authentication with Firebase Auth, and managing cloud storage for user-generated content. The use of Redux for state management was instrumental in handling complex application states, enabling seamless data flow between the frontend and backend.
- **Team Collaboration and Project Management**: Working in a team environment taught me the importance of clear communication, version control with Git, and agile methodologies. Regular stand-ups and code reviews ensured that everyone was aligned with the project goals and timelines. As a team, we faced numerous challenges, such as resolving merge conflicts and optimising performance, but through collaborative problem-solving, we successfully overcame these obstacles.
- **Outcome and Reflection**: The project culminated in a fully functional restaurant discovery application, which allowed users to search for restaurants based on their location and preferences. Users could view restaurant details, reviews, and ratings, with all data being managed efficiently through Firebase. Our team&apos;s effort and dedication were recognised with a grade of Distinction, highlighting the quality and impact of our work.

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
        width: 800, height: 600,
      },
      {
        src: "/images/RestaurantApp/restaurant-app-filter.jpg",
        caption: "Filter Page",
        width: 800, height: 600,
      },
      {
        src: "/images/RestaurantApp/restaurant-app-home.jpg",
        caption: "Home Page",
        width: 800, height: 600,
      },
      {
        src: "/images/RestaurantApp/restaurant-app-map.jpg",
        caption: "Map Page",
        width: 800, height: 600,
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
    extendedDesc: `
## Overview
This study was prompted by a recognition of a significant problem in contemporary marketing: the need to better understand customer behaviours for optimising marketing campaigns. Having recognised this problem, an opportunity was identified to deploy an innovative computer science-based solution in support of marketing, specifically concerning credit card customers. More particularly, the direct application of appropriately deployed ML algorithms as a novel tool for customer segmentation was considered to offer an effective means to meaningfully enhance marketing campaigns within the FinTech industry.

## Key Responsibilities and Achievements:
- **Tool Development in Python**: The primary aim was to develop and deliver an innovative tool in Python to process a credit card dataset and gain important data insights into customer behaviours for future marketing purposes. The tool utilised an auto-encoder for data de-noising, K-means for clustering, and RFM analysis for data evaluation.
- **Agile Methodology**: Adopted the Agile development model to facilitate an iterative, refining, and flexible approach. This model allowed for continuous testing and improvement throughout the development process.
- **Data Pre-processing and EDA**: The dataset was an anonymised credit card dataset obtained from Kaggle. Data collection and pre-processing included initial data analysis, handling missing values, dropping unnecessary columns, and data normalisation. Exploratory data analysis (EDA) involved creating a correlation heatmap and visualising credit limit relationships and purchasing behaviour by tenure.
- **RFM Analysis**: Calculated recency, frequency, and monetary values for each credit card customer and visualised the resulting customer segments.
- **Auto-encoder and K-means Clustering**: Data were encoded using a specially designed and trained auto-encoder. The K-means clustering model, constructed with an optimal number of clusters determined through inertia and silhouette score plots, produced five distinct customer segments for critical evaluation and visualisation.
- **Main Script Implementation**: Developed a main script to streamline the entire process, demonstrating the effectiveness of the methodology and the robustness of the ML tool.
- **Evaluation and Visualisation**: Performance was evaluated using various metrics, and areas for potential improvement were identified. The visualisation stage allowed for an assessment of cluster quality and provided actionable insights from raw credit card data.

## Skills Acquired and Lessons Learned:
- **Proficiency in Python**: Significantly improved proficiency in Python programming, particularly in implementing and applying ML algorithms.
- **ML Algorithms and Their Applications**: Gained a solid understanding of ML algorithms, their practical applications, and their potential to transform sectors like the FinTech industry.
- **Data Analysis and Visualisation**: Enhanced skills in data analysis and visualisation, crucial for effective marketing strategies in the FinTech industry.
- **Agile Methodology**: The Agile approach facilitated iterative development and continuous improvement, valuable for future projects.
- **Advanced ML Techniques**: The knowledge gained opens the possibility of exploring more advanced ML techniques and models in future projects.

In conclusion, the project not only achieved its objectives but also served as a steppingstone for further exploration and growth in the field of ML and FinTech. The skills and knowledge gained will be instrumental in navigating future projects and challenges in this booming industry.

      `,
    link: "/projects/project-2",
    images: [
      {
        src: "/images/machineTool/histograms.png",
        caption: "Histogram Representation of variables",
        width: 800, height: 600,
      },
      {
        src: "/images/machineTool/heatmap_correlation.png",
        caption: "Heatmap of correlation between variables",
        width: 800, height: 600,
      },
      {
        src: "/images/machineTool/credit_limit_vs_balance.png",
        caption: "Credit Limit vs Balance Scatter Plot",
        width: 800, height: 600,
      },
      {
        src: "/images/machineTool/clusters.png",
        caption: "Credit Card Customer Clustering using K-Means",
        width: 800, height: 600,
      },
    ],
    tech: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    id: "project-3",
    date: 2023,
    title: "Unify",
    description: "A Spotify powered web application matching users.",
    extendedDesc: `
## Overview
This project, "Unify," marks my first independent project as part of a small team outside of academia. We aimed to develop a user-friendly web application that leverages modern web technologies and offers a seamless user experience.

## Key Responsibilities and Achievements:
- **Web Application Development**: Developed "Unify," a user-friendly web application using ReactJS, Zustand, and Firebase. The project was recently approved by Spotify and is awaiting launch. This achievement underscores the application&apos;s robustness and compliance with industry standards.
- **Seamless User Experience**: Focused on delivering a seamless user experience by implementing efficient state management with Zustand and intuitive UI components with ReactJS. This focus ensured that users could interact with the application smoothly and without any hiccups.
- **Spotify API Integration**: Integrated Spotify API to provide personaliz
sed music data to users. Developed a compatibility algorithm to match users based on their music preferences, enhancing the application&apos;s value proposition by offering unique, data-driven insights.
- **Overcoming Development Challenges**: Successfully overcame the challenges of developing a multi-feature platform as a small team of two individuals. This involved adopting new technologies, coding practices, and collaborative problem-solving techniques to ensure the project&apos;s success.

## Skills Acquired and Lessons Learned:
- **Proficiency in ReactJS**: Enhanced my proficiency in ReactJS, focusing on building reusable components and managing complex application states.
- **State Management with Zustand**: Gained a deep understanding of Zustand for state management, enabling efficient handling of application state without the overhead of more complex state management libraries.
- **API Integration**: Developed skills in integrating third-party APIs, specifically the Spotify API, to fetch and utilise personalised user data.
- **Collaboration and Project Management**: Improved my ability to collaborate effectively in a small team, manage project timelines, and ensure quality control through continuous integration and deployment practices.

In conclusion, the "Unify" project not only achieved its objectives but also served as a significant learning experience in web application development, state management, and API integration. The skills and knowledge gained will be instrumental in navigating future projects and challenges in the tech industry.
`,
    link: "/projects/project-3",
    images: [
      {
        src: "/images/unify/unify-figma.jpg",
        caption: "The Figma Design of Unify",
        width: 800, height: 600,
      },
      {
        src: "/images/unify/unify-overview.png",
        caption: "Profile Overview Page",
        width: 800, height: 600,
      },
      {
        src: "/images/unify/artists.png",
        caption: "A User's Top Artists Page",
        width: 800, height: 600,
      },
      {
        src: "/images/unify/users.png",
        caption: "Viewing other users' profiles",
        width: 800, height: 600,
      },
    ],
    tech: ["React", "Spotify API", "Firebase", "Zustand"],
  },
  // Add more projects as needed
];

export default projects;
