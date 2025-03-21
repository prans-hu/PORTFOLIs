export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Podcastr - AI Podcast Platform',
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
    href: 'https://github.com/Pranshu-jais/Movie-Recommendation-System',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Movie-Recommendation-System',
    desc: 'Movie recommendation system built with Streamlit and powered by a machine learning model. It recommends movies based on a selected title using cosine similarity and displays movie posters fetched from the TMDB API.',
    subdesc:
      'Helps users discover movies similar to their favorites by selecting a movie from the list and receiving a list of top 10 recommended movies along with their posters.Utilizes machine learning techniques to analyze movie features and find similarities. Built with Streamlit for an interactive and user-friendly interface. ',
    href: 'https://github.com/Pranshu-jais/Movie-Recommendation-System',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Sklearn',
        path: '/assets/sklearn.png',
      },
      {
        id: 2,
        name: 'Streamlit',
        path: 'assets/streamlit.png',
      },
    ],
  },
  {
    title: 'Alzheimer Disease Detection using Deep Learning',
    desc: 'A deep learning-based system for detecting Alzheimer Disease from MRI images. This project leverages Convolutional Neural Networks (CNN) to classify MRI scans into different stages of Alzheimer Disease, providing an efficient and accurate diagnostic tool.',
    subdesc:
      'Utilizes CNNs to classify MRI images into stages of Alzheimer Disease, including Mild Demented, Moderate Demented, Non-Demented, and Very Mild Demented.',
    href: 'https://github.com/Pranshu-jais/Alzheimer-s-Disease-Detection-using-Deep-Learning',
    texture: '/textures/project/Project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'flask',
        path: '/assets/flask.png',
      },
      {
        id: 2,
        name: 'Tensorflow',
        path: 'assets/Tensorflow.png',
      },
      {
        id: 3,
        name: 'sklearn',
        path: '/assets/sklearn.png',
      },
     
    ],
  },
  {
    title: 'image-caption-generator',
    desc: 'A deep learning-based image caption generator that uses a pretrained VGG16 model for feature extraction and a custom captioning model with an attention mechanism. This project generates descriptive captions for images, enhancing the understanding and accessibility of visual content',
    subdesc:
      ' A deep learning-based image caption generator that uses a pretrained VGG16 model for feature extraction and a custom captioning model with an attention mechanism. This project generates descriptive captions for images, enhancing the understanding and accessibility of visual content',
    href: 'https://github.com/Pranshu-jais/image-caption-generator-master',
    texture: '/textures/project/Demo.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Tensorflow',
        path: '/assets/Tensorflow.png',
      },
      {
        id: 2,
        name: 'Streamlit',
        path: 'assets/streamlit.png',
      },
      {
        id: 3,
        name: 'sklearn',
        path: '/assets/sklearn.png',
      },
    ],
  },
  {
    title: 'Movies and Song Recommendation System Based on Facial Expressions',
    desc: 'A web application that uses facial expression recognition to suggest movies and music based on the user mood. This project aims to cheer up users by providing personalized recommendations and saving time in searching for entertainment that matches their emotional state.',
    subdesc:
      'Utilizes facial expression recognition to detect the user mood and recommends movies and music that align with the detected mood. Provides a seamless user experience for discovering entertainment options quickly.',
    href: 'https://github.com/Pranshu-jais/C-Users-PranshMovies-and-song-recommendation-system-based-on-facial-expressions',
    texture: '/textures/project/face-r.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Opencv',
        path: '/assets/opencv.png',
      },
      {
        id: 2,
        name: 'Tensorflow',
        path: 'assets/Tensorflow.png',
      },
      {
        id: 3,
        name: 'Flask',
        path: '/assets/flask.png',
      },
      {
        id: 4,
        name: 'sklearn',
        path: '/assets/sklearn.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5.5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -9.5, -10] : isMobile ? [-9, -9, -10] : isTablet ? [-11, -9.5, -10] : [-13, -9.5, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Nirveon X ',
    pos: 'Frontend Developer',
    duration: ' Feb 2025 - Present',
    title: "Nirveon X  platform is a revolutionary AI-driven healthcare ecosystem that integrates virtual doctor consultations, veterinary care, mental health support, elder care assistance, fitness & nutrition guidance, and personalized hobby coaching—all in one interface. I developed interactive and responsive web applications using React.js,  NEXT.JS. Implemented UI designs and animations to enhance user experience.",
    icon: '/assets/nirveon.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'clustor computing',
    pos: 'Data Analyst',
    duration: 'Jan 202r - Present',
    title: "I Streamlined data collection and reporting procedures,reducing processing time by 20 % enhancing efficiency. Implemented process improvements and automation solution,resulting in 15% increase in productivity",
    icon: '/assets/clustor.jpeg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'BCG X',
    pos: 'Junior Data Scientist Intern',
    duration: '2019 - 2020',
    title: "Analyzed customer churn data, identifying a 9.7% churn rate and key drivers. Developed a random forest model with 85% accuracy to predict churn.",
    icon: '/assets/BCX.svg',
    animation: 'salute',
  },
];