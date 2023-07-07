const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rohan Thorat | Portfolio",
  description:
    "A Data Scientist and SDE who thrives to leverage startups with AI based solutions and a blend of Data Engineering",
  og: {
    title: "Rohan Portfolio",
    type: "website",
    url: "https://github.com/Zorrat",
  },
};

//Home Page
const greeting = {
  title: "Namaste!",
  sub: "Rohan Thorat",
  logo_name: "Rohan Thorat",
  resumeLink:
    "https://drive.google.com/file/d/12_H5SfsVbbwHk_uZ8fbviAbDFlNMxMCK/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/Zorrat",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/rohan-thorat-8651551a1/",
    },

    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/zorrat",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@rohanthorat1230",
    },

    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/gohan_1230?hr_r=1",
    },
    {
      siteName: "HashNode",
      iconifyClassname: "simple-icons:hashnode",
      style: {
        color: "#2962ff",
      },
      profileLink: "https://hashnode.com/@Zorrat",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science and Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Develop Highly Scalable and Production ready ML models with end to end backend and MlOps development.",
        "⚡ Experience in working with Computer Vision using OpenCV and NLP projects.",
        "⚡ Experience with Graph Convolutional neural networks to derive knowledge from interconnected data in unsupervised settings.",
        "⚡ Experience with cleaning,mangling and labeling data from large datasets with tools like pandas and PySpark.",
        "⚡ Experience on NLP and computer vision with tools like SpaCy and OpenCV",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "HuggingFace Transformers",
          fontAwesomeClassname: "fluent-emoji-flat:hugging-face",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Web Scraping",
          fontAwesomeClassname: "skill-icons:selenium",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Backend Development with Python, GoLang and NodeJS for deploying highly scalable ML Models.",
        "⚡ Developing Maintainable and reusable dependency packages with CICD.",
        "⚡ Full Stack Development.",
        "⚡ Experience in Domain & Hosting using Netlify, Vercel, Heroku & Hostinger.",
        "⚡ Fundamental programming skills with understanding of Data Structures and Algorithms.",
      ],
      softwareSkills: [
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "devicon:fastapi",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "GoLang",
          fontAwesomeClassname: "logos:go",
          style: {},
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
      ],
    },
    {
      title: "Big Data and Cloud",
      fileName: "DesignImg",
      skills: [
        "⚡ Containerizing applications with Docker in a microservices enviornment",
        "⚡ Google Kubernetes Engine",
        "⚡ Apache Kafka, Redis, Rabbit MQ , RPC and GRPC",
        "⚡ Vector Databases with Weaviate and Qdrant",
        "⚡ MongoDB database design",
      ],
      softwareSkills: [
        {
          skillName: "Mongo DB",
          fontAwesomeClassname: "logos:mongodb-icon",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Google Kubernetes Engine",
          fontAwesomeClassname: "logos:kubernetes",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "skill-icons:docker",
          style: {
            color: "#2fa3f7",
          },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "skill-icons:kafka",
          style: {
            color: "rgb(242, 78, 28)",
          },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "logos:google-cloud",
          style: {
            color: "#2fa3f7",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos:redis",
          style: {
            color: "rgb(242, 78, 28)",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Online Exam Proctor and Attendance",
      img_path: "facereco.gif",
      description:
        "AI- Proctor tool that can mark attendance and detect if student is cheating on an online exam.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "FFMPEG",
          color: "#820032",
        },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "Computer Vision",
          color: "#ff4b4b",
        },
      ],
      link: "https://github.com/Zorrat/Student-Online-Exam-AntiCheat-Tool",
      code: "https://github.com/Zorrat/Student-Online-Exam-AntiCheat-Tool",
      linkcolor: "white",
    },

    {
      title: "Full Stack MERN Social Media",
      img_path: "mern.png",
      description: "Full Stack Social Media Website with MERN stack.",
      tags: [
        {
          lang: "React",
          color: "blue",
        },
        {
          lang: "NodeJS",
          color: "red",
        },
        {
          lang: "MongoDb",
          color: "green",
        },
        {
          lang: "Express",
          color: "#004782",
        },
        {
          lang: "FullStack",
          color: "teal",
        },
      ],
      link:
        "https://github.com/Zorrat/MERN-SocialMedia/tree/master/react-front",
      code:
        "https://github.com/Zorrat/MERN-SocialMedia/tree/master/react-front",
      linkcolor: "white",
    },
    {
      title: "Image Super Resolution and Image Editor",
      img_path: "sr.gif",
      description:
        "Ai based Image Supersampling, Denoiser and Image editor app.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "Tensorflow",
          color: "#8700b0",
        },
        {
          lang: "OpenCV",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "https://github.com/Zorrat/Image-Denoiser-Supersampling-and-Editor",
      code: "https://github.com/Zorrat/Image-Denoiser-Supersampling-and-Editor",
      linkcolor: "white",
    },
    {
      title: "Steganography Tool python",
      img_path: "steg.jpg",
      description:
        "Pseudo-Random Video Steganography - An algorithm to pseudo-randomly spread the message bits across the frames of a video to make it difficult for Steganalysis. A tool for applying steganography to images videos and Audio files. ",
      tags: [
        {
          lang: "FFMPEG",
          color: "red",
        },
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "Cryptography",
          color: "#c47206",
        },
        {
          lang: "Published Paper",
          color: "#4257f5",
        },
        {
          lang: "Audio Video and Image Steganography",
          color: "#ff4b4b",
        },
        {
          lang: "Streamlit",
          color: "#1dac64",
        },
      ],
      link:
        "http://www.ijaresm.com/uploaded_files/document_file/Rohan_S._Thorat,_Mohit_V_._Deshpande_5wwe.pdf",
      code: "https://github.com/Zorrat/Steganography-Tool",
      linkcolor: "white",
    },
    {
      title: "Diabetes Prediction Tool",
      img_path: "dbpred.gif",
      description:
        "Diabetes Prediction with various ML and DL algorithms in PyQT GUI app.",
      tags: [
        {
          lang: "PyQT",
          color: "red",
        },
        {
          lang: "Machine Learning",
          color: "#8aa32d",
        },
        {
          lang: "Deep Learning",
          color: "#289de0",
        },
        {
          lang: "Algorithm Analysis",
          color: "#17ee21",
        },
      ],
      link:
        "https://github.com/Zorrat/Diabetes-Prediction-models-comparison-with-Gui",
      code:
        "https://github.com/Zorrat/Diabetes-Prediction-models-comparison-with-Gui",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Data Scientist",
        subtitle: "MonetaGo",
        date: "Nov 2021 - Jully 2023",
        content: [
          "Developed internal python tools and packaged 📦 them to a private pip repository on google artifact registry and also integrated them into CICD pipelines on bitbucket.",
          "Parallelized document processing in python with after researching various multi-processing techniques, hence speeding up services upto 7x",
          "Implemented Internal packages in Cython to speed up functions by upto 2x and main services by 20%",
          "Trained ML model to match company names and integrate it as part of Data Science pipeline.",
          "Updated Analytics microservice to use Apache Kafka for migration towards an async real time event driven architecture.",
        ],
      },
      {
        title: "Junior Data Scientist",
        subtitle: "MonetaGo",
        date: "April 2020 - June 2020",
        content: [
          "Created Python Microservice to generate financial document comparison reports and perform fraud Analytics and classification.",
          "Developed a Rule Engine from scratch with fundamental knowledge of data structures. Implemented the rule engine as part of analytics pipeline.",
        ],
      },
      {
        title: "Data Science Intern",
        subtitle: "MonetaGo",
        date: "Nov 2020 - January 2021",
        content: [
          "Created and Deployed a Document OCR web api based solution to scan documents and extract spacial and contextual information.",
          "Developed a Document OCR Python Web app with FastAPI and Azure Form Recogniser with the ability to process documents in the background.",
          "Researched , Trained and locally Implemented various Graph Neural Networks such as GraphSage and Semi-supervised Graph Convolutional Neural Network for document understanding.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Engineering in Information Technology",
          subtitle: "Xavier Institute of Engineering, Mumbai",
          date: "2016 - 2021",
          content: ["CGPA: 7.35/10"],
        },
        {
          title: "Higher Secondary Certificate [HSC]",
          subtitle: "JK Knowledge Center, Mumbai",
          date: "2014 - 2016",
          content: ["Precentage: 64%"],
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        {
          title: "Ranks",
          content: [
            "1st place at IIT Bombay's Robokart where I created a dynamic day and night cycle for my Unity game.",
            "2nd place in 12 hr Coding Marathon at Robocon KJSEIT",
          ],
        },
        {
          title: "Achievements",
          content: [
            "HOD for Lan Committe of XIE Spandan 2020",
            "5⭐ Gold Badges for Python & Problem Solving at HackerRank",
          ],
        },
      ],
    },
    // {
    //   title: ["Freelance Work"],
    //   data: [
    //     {
    //       title: "Consultancy Website",
    //       subtitle: "kidsworldeducationconsultants.com",
    //       content: [
    //         "Created and hosted a website for consultancy providers in Kids Education Domain",
    //       ],
    //     },
    //     {
    //       title: "Portfolio Website",
    //       subtitle: "pranavphulware.netlify.app",
    //       content: [
    //         "Built a personal Filmography portfolio for a friend and later hosted it at Netlify",
    //       ],
    //     },
    //   ],
    // },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Data Scientist Career Track",
      subtitle: "DataCamp",
      logo_path: "datacamp-01.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/track/276abcabc13343c70443cf20f1cc95a6bcf4d16a",
      alt_name: "DataCamp",
      color_code: "#000000",
    },
    {
      title: "DeepLearning AI Specialization by Andrew NG",
      subtitle: "Stanford University",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/9e704ecf68bcbaa0fa0dbd974435f7dd",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
    {
      title: "Intermidiate Machine Learning",
      subtitle: "Kaggle",
      logo_path: "kaggle.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/zorrat/intermediate-machine-learning",
      alt_name: "kaggle",
      color_code: "#000000",
    },
    {
      title: "Tensorflow Developer Specialization",
      subtitle: "Stanford University",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/daebf40fa7aee86184511bf0e8b6a722",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
    {
      title: "Problem solving",
      subtitle: "HackerRank",
      logo_path: "problem-01.png",
      certificate_link: "https://www.hackerrank.com/certificates/61f921ecb0b7",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Cisco Certified Networking Associate CCNA",
      subtitle: "RnS Tigers CCNA Training",
      logo_path: "ccna.png",
      certificate_link: "",
      alt_name: "CCNA",
      color_code: "#000000",
    },
    {
      title: "Pandas",
      subtitle: "Kaggle",
      logo_path: "kaggle.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/zorrat/pandas",
      alt_name: "kaggle",
      color_code: "#000000",
    },
    {
      title: "Data Visualization",
      subtitle: "Kaggle",
      logo_path: "kaggle.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/zorrat/data-visualization",
      alt_name: "kaggle",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with AI/ML, Full-stack, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Wadala, Mumbai-400037",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9920662317",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Zorrat",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rohan-thorat-8651551a1/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtu",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:rohanthorat1230@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_zorart__/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
