const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

// SEO Related settings
const seo = {
  title: "Rohan Thorat | Portfolio",
  description:
    "Data Scientist, engineer, and researcher building secure ML systems, distributed platforms, and blockchain applications.",
  og: {
    title: "Rohan Portfolio",
    type: "website",
    url: "https://github.com/Zorrat",
  },
};

// Home Page
const greeting = {
  title: "Namaste!",
  sub: "Rohan Thorat",
  logo_name: "Rohan Thorat",
  resumeLink:
    "https://docs.google.com/document/d/1dqASzQ-zuBGPlqaBLg9YEHoN3tbk7rwH2C1TfB6TlsU/edit?usp=sharing",
};

// Home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
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
      profileLink: "https://www.linkedin.com/in/thoratrohan/",
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
      siteName: "Medium",
      fontAwesomeClassname: "fa-medium-m",
      style: {
        color: "#ffffff",
      },
      profileLink: "https://medium.com/@zorratow",
    },
  ],
};

// What I do?
const skills = {
  data: [
    {
      title: "Data Science and Applied ML",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Build production ML, NLP, regression, and classification systems for fraud detection, entity resolution, and document intelligence.",
        "⚡ Work with PySpark, LayoutLM, graph analytics, and statistical modeling across financial, document, and blockchain datasets.",
        "⚡ Design retrieval and LLM workflows with FAISS, Weaviate, Hugging Face, LangChain, and Mistral-based RAG systems.",
        "⚡ Own the full data science lifecycle from ETL and feature engineering to evaluation, observability, and deployment.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: {
            backgroundColor: "transparent",
            color: "#E25A1C",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "fluent-emoji-flat:hugging-face",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            backgroundColor: "transparent",
            color: "#0FA958",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Weaviate",
          fontAwesomeClassname: "simple-icons:weaviate",
          style: {
            backgroundColor: "transparent",
            color: "#00B2FF",
          },
        },
      ],
    },
    {
      title: "Engineering and Distributed Systems",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build backend systems in Go, Python, and Node.js with FastAPI and Gin for secure, low-latency financial and analytics products.",
        "⚡ Design event-driven microservices with Kafka, CI/CD, Docker, Kubernetes, private package registries, and cloud-native ETL pipelines.",
        "⚡ Ship data products on GCP, AWS, and Azure with experience across Artifact Registry, CloudWatch, confidential compute, and TEE clusters.",
        "⚡ Work heavily with PostgreSQL, SQL Server, MongoDB, Snowflake, SOLR, and observability-oriented production systems.",
      ],
      softwareSkills: [
        {
          skillName: "GoLang",
          fontAwesomeClassname: "logos:go",
          style: {},
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "devicon:fastapi",
          style: {
            color: "#009688",
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
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "transparent",
            color: "#3178C6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "skill-icons:docker",
          style: {
            color: "#2FA3F7",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "skill-icons:kafka",
          style: {
            color: "#231F20",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Research, Blockchain and Crypto",
      fileName: "DesignImg",
      skills: [
        "⚡ Research privacy-preserving computation, blockchain analytics, and graph-based fraud detection with Columbia University and SUNY Buffalo.",
        "⚡ Build dApps, smart contracts, and DeFi primitives with Solidity, Chainlink, ZK proofs, and oracle-driven application design.",
        "⚡ Developed FHE-powered entity linkage, Bitcoin transaction graph analysis, NFT and FT coursework tooling, and full stack blockchain labs.",
        "⚡ Explore decentralized identity, real world assets, stablecoin infrastructure, and AI-assisted crypto products with on-chain execution flows.",
      ],
      softwareSkills: [
        {
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: {
            color: "#363636",
          },
        },
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "simple-icons:ethereum",
          style: {
            color: "#3C3C3D",
          },
        },
        {
          skillName: "Bitcoin",
          fontAwesomeClassname: "simple-icons:bitcoin",
          style: {
            color: "#F7931A",
          },
        },
        {
          skillName: "Chainlink",
          fontAwesomeClassname: "simple-icons:chainlink",
          style: {
            color: "#375BD2",
          },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "logos:google-cloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Weaviate",
          fontAwesomeClassname: "simple-icons:weaviate",
          style: {
            backgroundColor: "transparent",
            color: "#00B2FF",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects and Open Source",
  description:
    "A mix of data science systems, backend engineering, privacy-preserving research, and blockchain or crypto products built in production and academia.",
};

// Project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Bitcoin Block Explorer with PostgreSQL",
      img_path: "btc.gif",
      description:
        "Designed a PostgreSQL-based explorer for on-chain Bitcoin data with schema constraints, ETL workflows, clustered indexes, and query execution analysis to improve transaction retrieval performance.",
      tags: [
        {
          lang: "PostgreSQL",
          color: "#336791",
        },
        {
          lang: "ETL",
          color: "#D32F2F",
        },
        {
          lang: "On-Chain Analytics",
          color: "#F7931A",
        },
        {
          lang: "Query Optimization",
          color: "#004782",
        },
      ],
      link: "https://github.com/Zorrat/Bitcoin-Block-Explorer",
      code: "https://github.com/Zorrat/Bitcoin-Block-Explorer",
      linkcolor: "white",
    },
    {
      title: "Blind Match",
      img_path: "BlindMatch.png",
      description:
        "Built an encrypted entity linkage library using TF-IDF vectors and FHE to support secure multi-party similarity scoring and search without exposing underlying data.",
      tags: [
        {
          lang: "GoLang",
          color: "#00ADD8",
        },
        {
          lang: "FHE",
          color: "#00A100",
        },
        {
          lang: "MPC",
          color: "#7B1FA2",
        },
        {
          lang: "Entity Linkage",
          color: "#FF4B4B",
        },
      ],
      link: "https://github.com/Zorrat/Fuzzy-Private-Entity-Set-Intersection",
      code: "https://github.com/Zorrat/Fuzzy-Private-Entity-Set-Intersection",
      linkcolor: "white",
    },
    {
      title: "NeuroLedger Lending Protocol",
      img_path: "project-05.png",
      description:
        "Created a privacy-preserving DeFi lending protocol that uses zero-knowledge proofs to gate borrower eligibility while keeping risk evaluation off-chain and settlement on-chain.",
      tags: [
        {
          lang: "Chainlink CRE",
          color: "#375BD2",
        },
        {
          lang: "ZK Proofs",
          color: "#6A1B9A",
        },
        {
          lang: "DeFi",
          color: "#0F9D58",
        },
        {
          lang: "Solidity",
          color: "#363636",
        },
      ],
      link: "https://github.com/Zorrat/zk-private-nl",
      code: "https://github.com/Zorrat/zk-private-nl",
      linkcolor: "white",
    },
    {
      title: "MLOps Pipeline AWS",
      img_path: "project-02.png",
      description:
        "Built a reproducible training pipeline for transformer fine-tuning on GLUE CoLA with AWS Glue, Docker, Prometheus, Hydra, and CloudWatch-based observability.",
      tags: [
        {
          lang: "AWS Glue",
          color: "#FF9900",
        },
        {
          lang: "Docker",
          color: "#2496ED",
        },
        {
          lang: "Prometheus",
          color: "#E6522C",
        },
        {
          lang: "CloudWatch",
          color: "#8C4FFF",
        },
      ],
      link: "https://github.com/Zorrat/ML-Ops-Pipeline-E2E-AWS",
      code: "https://github.com/Zorrat/ML-Ops-Pipeline-E2E-AWS",
      linkcolor: "white",
    },
    {
      title: "LLM and RAG Chatbot with FAISS",
      img_path: "llm.gif",
      description:
        "Implemented a Mistral-7B chatbot backed by vector retrieval over 50 million Wikipedia articles and benchmarked RAG against SOLR and Elasticsearch style keyword pipelines.",
      tags: [
        {
          lang: "Weaviate",
          color: "#00B2FF",
        },
        {
          lang: "FastAPI",
          color: "#009688",
        },
        {
          lang: "LoRA",
          color: "#C47206",
        },
        {
          lang: "RAG",
          color: "#FF4B4B",
        },
      ],
      link: "https://github.com/Zorrat/IR-Project3-Chatbot",
      code: "https://github.com/Zorrat/IR-Project3-Chatbot",
      linkcolor: "white",
    },
    {
      title: "CoverFi",
      img_path: "news.gif",
      description:
        "Developed a micro-insurance product that uses agentic AI risk signals, Chainlink CRE workflows, and USDC-based on-chain settlements to price and pay out event coverage.",
      tags: [
        {
          lang: "Agentic AI",
          color: "#1A73E8",
        },
        {
          lang: "Chainlink CRE",
          color: "#375BD2",
        },
        {
          lang: "USDC",
          color: "#2775CA",
        },
        {
          lang: "NFT",
          color: "#8E24AA",
        },
      ],
      link: "https://github.com/Zorrat/microinsurance-events-converge",
      code: "https://github.com/Zorrat/microinsurance-events-converge",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title:
          "Associate Researcher / TA: Blockchain and Cryptocurrencies Analytics",
        subtitle: "Columbia University, United States",
        date: "Jan 2026 - Present",
        content: [
          "Working with Dr. Siddhartha Dalal on decentralized identity, real world assets, and fraud analytics.",
          "Associate Adjunct Faculty for blockchain, cryptocurrencies, and analytics in the Applied Analytics course.",
          "Analyzed Bitcoin transaction graphs to study ransomware-related fund flow behavior using graph analytics and network centrality.",
          "Built a micro-insurance protocol with USDC reserve vaults, soulbound NFT policies, Chainlink CRE workflows, and AI-assisted pricing and claims execution.",
        ],
      },
      {
        title: "Researcher / TA: UB Blockchain Think Lab / Coursera Mentor",
        subtitle: "SUNY Buffalo, United States",
        date: "Aug 2024 - Present",
        content: [
          "Worked with Dr. Ramamurthy on privacy-preserving computation, cryptographic primitives, blockchain application development, information retrieval, and fraud analytics.",
          "Developed a Go-based privacy-preserving entity linkage library for FHE similarity, private search, and multi-party encryption with Lattigo.",
          "Modeled blockchain activity as graphs with networkX to compute degree distributions, centrality, and motifs for fraud ring detection.",
          "Built a Twitter ETL and vector storage pipeline spanning 5 million plus tweets for financial and monetary policy correlation analysis.",
          "Developed five full stack dApps for coursework and served as TA for CSE526 Blockchain Development, supporting 100 plus students and Ethereum FT or NFT projects.",
        ],
      },
      {
        title: "Engineer, Data Science",
        subtitle: "MonetaGo Inc. (Fintech Product)",
        date: "Oct 2021 - Oct 2023",
        content: [
          "Worked across backend systems and end-to-end data science products, helping deliver a document deduplication solution that secured a 2 million dollar client deal in Singapore.",
          "Built NLP and tree-based ensemble models for entity reconciliation in trade documents, reaching 84 percent accuracy and improving fraud intent classification.",
          "Created private PyPI and Artifact Registry workflows and integrated Bitbucket CI/CD pipelines for internal package distribution and deployment.",
          "Migrated order processing APIs to Go and Gin and deployed fraud detection services on TEE confidential compute clusters.",
          "Led migration of Python microservices to a real-time Kafka pub/sub architecture with OpenMP multiprocessing for lower latency inference.",
          "Developed a traceable networkX-based DAG decision model to compute risk buckets across trade workflows.",
        ],
      },
      {
        title: "Jr. Data Scientist",
        subtitle: "MonetaGo Inc.",
        date: "Mar 2021 - Oct 2021",
        content: [
          "Applied PySpark UDFs, regex, and NLP tooling to normalize vendor names, addresses, and entity identifiers across large trade datasets.",
          "Implemented a LayoutLM OCR and NER pipeline to extract invoice key value pairs into MongoDB for downstream analysis.",
          "Presented KPI dashboards and transaction volume findings to subject matter experts using Plotly Dash.",
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
          title: "Master of Science in Engineering Data Science",
          subtitle: "University at Buffalo, Buffalo, New York",
          date: "Jan 2024 - May 2025",
          content: [
            "Coursework: Statistics, Probability, Information Retrieval, Distributed Data Intensive Systems, Database Design, Agentic AI Systems, Deep Learning, Machine Learning, Data Structures, and Algorithms.",
          ],
        },
      ],
    },
    {
      title: ["Achievements"],
      data: [
        {
          title: "Leadership",
          content: [
            "HOD of Esports Tournaments at Xavier's SPANDAN, leading a 40 plus member committee across 7 competitive events.",
          ],
        },
        {
          title: "Hackathon Win",
          content: [
            "ROBOCON Hackathon Winner for building a Unity-based game with a fully dynamic day-night cycle.",
          ],
        },
        {
          title: "Competitive Ranking",
          content: [
            "Reached Global Elite rank in Counter-Strike: Global Offensive, placing in the top 0.75 percent of players.",
          ],
        },
      ],
    },
  ],
};

// Certificate cards
const certifications = {
  certifications: [
    {
      title: "Learning With Errors Cryptography Deep Dive",
      subtitle: "Medium",
      logo_path: "problem-01.png",
      certificate_link:
        "https://medium.com/@zorratow/learning-with-errors-problem-5e59c9fdb806",
      alt_name: "Medium",
      color_code: "#000000",
    },
    {
      title: "TensorFlow Developer",
      subtitle: "DeepLearning.AI / Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://coursera.org/share/daebf40fa7aee86184511bf0e8b6a722",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Associate Data Scientist",
      subtitle: "DataCamp",
      logo_path: "datacamp-01.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/track/276abcabc13343c70443cf20f1cc95a6bcf4d16a",
      alt_name: "DataCamp",
      color_code: "#000000",
    },
    {
      title: "Pseudo-Random Video Steganography",
      subtitle: "Publication",
      logo_path: "tabcon-01.png",
      certificate_link:
        "http://www.ijaresm.com/uploaded_files/document_file/Rohan_S._Thorat,_Mohit_V_._Deshpande_5wwe.pdf",
      alt_name: "Publication",
      color_code: "#000000",
    },
    {
      title: "Cisco Certified Networking Associate Training",
      subtitle: "CCNA",
      logo_path: "ccna.png",
      certificate_link: "",
      alt_name: "CCNA",
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
      "Reach out for data science, backend engineering, research collaboration, or blockchain and crypto product work. Email is the fastest way to get me.",
  },
  addressSection: {
    title: "Address",
    subtitle: "New York City, NY",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "7163902389",
  },
};

// Contact icons
const socialMediaLinks = [
  {
    name: "GitHub",
    link: "https://github.com/Zorrat",
    iconifyClassname: "simple-icons:github",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/thoratrohan/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Email",
    link: "mailto:rst2152@columbia.edu",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Medium",
    link: "https://medium.com/@zorratow",
    fontAwesomeIcon: "fa-medium-m",
    backgroundColor: "#12100E",
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
