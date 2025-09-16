const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rohan Thorat | Portfolio",
  description:
    "A Data Scientist and MLE who thrives to leverage startups with AI based solutions and a blend of Data Engineering",
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
    "https://drive.google.com/file/d/1xu1YzB-eOWY38FbXtnazV8HFbH4rIzsl/view?usp=sharing",
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
        "⚡ Develop Highly Scalable and Production ready ML models with end to end backend and MLOps development.",
        "⚡ Experience in working with Computer Vision using OpenCV and NLP projects including LayoutLM for document understanding.",
        "⚡ Experience with Graph Convolutional neural networks to derive knowledge from interconnected data in unsupervised settings.",
        "⚡ Experience with cleaning, mangling and labeling data from large datasets with tools like pandas and PySpark.",
        "⚡ Expertise in NLP for entity matching, document comparison, and key-value pair identification.",
        "⚡ Implemented RAG systems with vector databases for information retrieval and LLM applications.",
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
          skillName: "Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: {
            backgroundColor: "transparent",
            color: "#E25A1C",
          },
        },
        {
          skillName: "MLFlow",
          fontAwesomeClassname: "simple-icons:mlflow",
          style: {
            backgroundColor: "transparent",
            color: "#0194E2",
          },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Backend Development with Python, GoLang and NodeJS for deploying highly scalable ML Models.",
        "⚡ Developing Maintainable and reusable dependency packages with CICD on Bitbucket and Google Artifact Registry.",
        "⚡ Full Stack Development including ReactJS and Solidity for dApps and blockchain applications.",
        "⚡ Experience in Domain & Hosting using Netlify, Vercel, Heroku & GCP.",
        "⚡ Implemented privacy-preserving entity linkage with FHE and parallelized operations using goroutines.",
        "⚡ Developed ETL pipelines for data processing and analytics with multimodal vector storage.",
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
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: {
            color: "#363636",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "CICD",
          fontAwesomeClassname: "simple-icons:bitbucket",
          style: {
            color: "#0052CC",
          },
        },
      ],
    },
    {
      title: "Big Data and Cloud",
      fileName: "DesignImg",
      skills: [
        "⚡ Containerizing applications with Docker in a microservices environment",
        "⚡ Google Kubernetes Engine and Confidential Computing Clusters (TEE)",
        "⚡ Apache Kafka for real-time event-driven architecture",
        "⚡ Vector Databases with Weaviate, FAISS, and Qdrant for similarity search",
        "⚡ Database design and optimization with MongoDB and PostgreSQL",
        "⚡ DevOps practices with Terraform, Kubernetes, and CICD pipelines",
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
          skillName: "Kubernetes",
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
        {
          skillName: "Terraform",
          fontAwesomeClassname: "logos:terraform-icon",
          style: {
            color: "#7B42BC",
          },
        },
        {
          skillName: "AirFlow",
          fontAwesomeClassname: "logos:airflow",
          style: {
            color: "#017CEE",
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
      title: "Blind Match - Privacy-Preserving Entity Linkage",
      img_path: "BlindMatch.png",
      description:
        "Library for encrypted vector similarity search and data reconciliation with CKKS homomorphic encryption. Optimized entity linkage with Goroutines for parallelized dot product computation.",
      tags: [
        {
          lang: "GoLang",
          color: "#00ADD8",
        },
        {
          lang: "Goroutines",
          color: "#820032",
        },
        {
          lang: "FHE CKKS",
          color: "#00a100",
        },
        {
          lang: "NLP",
          color: "#ff4b4b",
        },
      ],
      link: "https://github.com/Zorrat/blind-match",
      code: "https://github.com/Zorrat/blind-match",
      linkcolor: "white",
    },
    {
      title: "Bitcoin Block Explorer with PostgreSQL",
      img_path: "btc.gif",
      description:
        "Database Design, Modelling and query optimization for On Chain Bitcoin Data to Postgres SQL. Speed Up of Block transactions retrieval with clustered indexes.",
      tags: [
        {
          lang: "PostgreSQL",
          color: "#336791",
        },
        {
          lang: "ETL",
          color: "red",
        },
        {
          lang: "Data Architecting",
          color: "green",
        },
        {
          lang: "Query Optimization",
          color: "#004782",
        },
      ],
      link: "https://github.com/Zorrat/bitcoin-explorer",
      code: "https://github.com/Zorrat/bitcoin-explorer",
      linkcolor: "white",
    },
    {
      title: "LLM and RAG Chatbot with FAISS",
      img_path: "llm.gif",
      description:
        "Deployed Mistral 7B fine-tuned LLM chat bot along with Vector Document store for Wikipedia webpages with FAISS for Information Retrieval.",
      tags: [
        {
          lang: "Weaviate",
          color: "#004782",
        },
        {
          lang: "FastAPI",
          color: "#8700b0",
        },
        {
          lang: "LoRA",
          color: "#c47206",
        },
        {
          lang: "FAISS",
          color: "#ff4b4b",
        },
      ],
      link: "https://github.com/Zorrat/rag-chatbot",
      code: "https://github.com/Zorrat/rag-chatbot",
      linkcolor: "white",
    },
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
        title: "Researcher",
        subtitle: "SUNY Buffalo",
        date: "Jun 2024 - Present",
        content: [
          "Developed a privacy-preserving entity linkage library in GoLang, parallelizing dot products operations with goroutines and compressing sparse vectors by 50% via FFT to accelerate FHE-based cosine similarity.",
          "Conducted workshop on Zero Knowledge Proof of reserves with circom and Snark.js. Developed dApps in ReactJS, Solidity and deployed on GCP for decentralized class activities.",
          "Built ETL Pipeline for Twitter data stream and multimodal vector storage of over 5 million tweets for co-relation analysis of social movements on financial policies.",
          "Teaching Assistant for CSE526 Blockchain Development: Conducted lectures, office hours and workshops with over 100 students. Updated legacy solidity codebase and developed grading scripts.",
        ],
      },
      {
        title: "ML Engineer",
        subtitle: "MonetaGo Inc. (Remote US)",
        date: "Oct 2021 - Dec 2023",
        content: [
          "Project Lead: Migration of fraud ML microservices to real-time architecture with Kafka pub/sub and multi-processing. Designed and maintained system architecture documents.",
          "Created and maintained private PyPI repository on Google Artifact Registry, published internal data handling packages; Integrated Bitbucket CICD pipelines.",
          "Applied Spark UDFs with regex and NLP libraries to normalize vendor names, addresses, and entity identifiers.",
          "Vertically scaled Document Comparison microservice with OpenMP multiprocessing to optimize complete CPU utilization.",
          "Developed entity matching NLP model achieving 84% accuracy for reconciling entity names and organizations by curating dataset.",
          "Built data reconciling/document comparison engine for 8 types of trade documents. Implemented ensemble models DAG-based approach for computing risk score on Invoice Factoring Fraud.",
        ],
      },
      {
        title: "Data Scientist",
        subtitle: "MonetaGo Inc.",
        date: "Jan 2021 - Oct 2021",
        content: [
          "Developed layout-aware NLP pipelines using LayoutLM; implemented key-value pair identification by combining text embeddings with token-level classification (NER) and spatial relationship modeling.",
          "Analytics and cleaning of trade document dataset with Plotly Dash, presented KPIs to SMEs and Product Teams.",
          "Deployed various async APIs to serve internal analytics cron jobs with containerized microservices using Docker and Kubernetes.",
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
          title: "Master's of Science, Engineering Science Data Science",
          subtitle: "University at Buffalo",
          date: "Jan 2024 - Jun 2025",
          content: [
            "Course Work: Statistical Data Mining, Information Retrieval, Machine Learning, Distributed Data Intensive Systems, DB Design, Numerical Mathematics, AI, Statistical Testing, Probability",
          ],
        },
        {
          title: "Bachelor of Engineering in Information Technology",
          subtitle: "Xavier Institute of Engineering, Mumbai",
          date: "2021",
          content: ["CGPA : 7.35"],
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
    subtitle: "California",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "7163902389",
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
