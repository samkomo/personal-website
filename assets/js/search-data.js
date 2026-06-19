// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/personal-website/";
    },
  },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal-website/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Research publications and patents in blockchain, privacy-preserving computation, secure AI, energy cybersecurity, decentralized energy systems, and digital trust infrastructure.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal-website/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research projects aligned with the latest CV, spanning secure AI, blockchain interoperability, energy cybersecurity, carbon-market traceability, and digital trust systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal-website/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Current academic and professional CV covering secure AI, blockchain, distributed systems, energy cybersecurity, publications, patents, and consulting experience. Download the PDF version using the button above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal-website/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses taught, student supervision, and educational contributions across mobile development, blockchain systems, cybersecurity, privacy-preserving computing, and applied distributed systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal-website/teaching/";
          },
        },{id: "news-paper-accepted-at-ieee-icse-seis-2017-deploying-large-scale-school-census-hub-an-experience-report",
          title: 'Paper accepted at IEEE ICSE-SEIS 2017: “Deploying Large Scale School Census Hub: An...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-acm-ictd-2017-towards-blockchain-enabled-school-information-hub-cited-by-111",
          title: 'Paper accepted at ACM ICTD 2017: “Towards Blockchain-enabled School Information Hub” (Cited by...',
          description: "",
          section: "News",},{id: "news-awarded-unsw-scientia-phd-scholarship-top-3-of-phd-applicants-900-applicants-across-disciplines",
          title: 'Awarded UNSW Scientia PhD Scholarship (Top 3% of PhD applicants, ~900 applicants across...',
          description: "",
          section: "News",},{id: "news-patent-granted-us9961139b2-cooperative-download-among-low-end-devices-under-resource-constrained-environment",
          title: 'Patent granted: US9961139B2 - Cooperative Download among Low-End Devices Under Resource-Constrained Environment 🎉...',
          description: "",
          section: "News",},{id: "news-patent-granted-us20180189449a1-tracking-items-used-for-providing-medical-services",
          title: 'Patent granted: US20180189449A1 - Tracking Items Used for Providing Medical Services 🎉',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-ieee-icbc-2020-a-relational-network-framework-for-interoperability-in-distributed-energy-trading",
          title: 'Paper accepted at IEEE ICBC 2020: “A Relational Network Framework for Interoperability in...',
          description: "",
          section: "News",},{id: "news-book-chapter-published-in-wireless-blockchain-principles-technologies-and-applications-john-wiley-amp-amp-sons-utilizing-blockchain-as-a-citizen-utility-for-future-smart-grids",
          title: 'Book chapter published in “Wireless Blockchain: Principles, Technologies, and Applications” (John Wiley &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "news-journal-article-published-in-journal-of-network-and-computer-applications-temporary-immutability-a-removable-blockchain-solution-for-prosumer-side-energy-trading-cited-by-28",
          title: 'Journal article published in Journal of Network and Computer Applications: “Temporary Immutability: A...',
          description: "",
          section: "News",},{id: "news-journal-article-published-in-ieee-internet-of-things-journal-harb-hypergraph-based-adaptive-consortium-blockchain-impact-factor-8-2-q1",
          title: 'Journal article published in IEEE Internet of Things Journal: “HARB: Hypergraph-Based Adaptive Consortium...',
          description: "",
          section: "News",},{id: "news-patent-granted-us11497156b2-farm-cultivation-quality",
          title: 'Patent granted: US11497156B2 - Farm Cultivation Quality 🎉',
          description: "",
          section: "News",},{id: "news-preprint-published-on-arxiv-plexichain-a-secure-blockchain-based-flexibility-aggregator-framework-arxiv-2212-09064",
          title: 'Preprint published on arXiv: “PlexiChain: A Secure Blockchain-based Flexibility Aggregator Framework” (arXiv:2212.09064) 📄...',
          description: "",
          section: "News",},{id: "news-journal-article-published-in-international-journal-of-sustainable-energy-barriers-to-blockchain-based-decentralised-energy-trading-a-systematic-review-cited-by-49",
          title: 'Journal article published in International Journal of Sustainable Energy: “Barriers to Blockchain-based Decentralised...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-ieee-icbc-2023-bailif-a-blockchain-agnostic-interoperability-framework",
          title: 'Paper accepted at IEEE ICBC 2023: “BAILIF: A Blockchain Agnostic Interoperability Framework” 📄...',
          description: "",
          section: "News",},{id: "news-successfully-defended-my-phd-thesis-on-blockchain-based-decentralized-energy-systems-advancing-scalability-security-privacy-and-interoperability-at-unsw",
          title: 'Successfully defended my PhD thesis on “Blockchain-based Decentralized Energy Systems: Advancing Scalability, Security,...',
          description: "",
          section: "News",},{id: "news-awarded-ace-summer-school-travel-stipend-monash-university-ace-program-️",
          title: 'Awarded ACE Summer School Travel Stipend (Monash University / ACE Program) ✈️',
          description: "",
          section: "News",},{id: "news-started-postdoctoral-research-at-csiro-data61-contributing-to-cybersecurity-and-blockchain-based-assurance-frameworks-within-the-caeser-program",
          title: 'Started postdoctoral research at CSIRO Data61, contributing to cybersecurity and blockchain-based assurance frameworks...',
          description: "",
          section: "News",},{id: "news-phd-conferred-on-february-22-2024",
          title: 'PhD conferred on February 22, 2024! 🎓',
          description: "",
          section: "News",},{id: "news-graduation-ceremony-at-unsw",
          title: 'Graduation ceremony at UNSW! 🎓',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-ieee-icbc-2024-cypherchain-a-privacy-preserving-data-aggregation-framework-for-blockchain-based-dr-programs",
          title: 'Paper accepted at IEEE ICBC 2024: “CypherChain: A Privacy-Preserving Data Aggregation Framework for...',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-at-acm-e-energy-2024-energipay-off-chain-payment-channel-for-blockchain-enabled-peer-to-peer-energy-trading-and-systematic-study-of-cybersecurity-threats-for-smart-inverters",
          title: 'Two papers accepted at ACM e-Energy 2024: “EnergiPay: Off-chain Payment Channel for Blockchain-enabled...',
          description: "",
          section: "News",},{id: "news-began-independent-research-and-innovation-consulting-focused-on-blockchain-based-data-integrity-systems-and-verifiable-ai-infrastructure",
          title: 'Began independent research and innovation consulting focused on blockchain-based data integrity systems and...',
          description: "",
          section: "News",},{id: "projects-mombasa-county-education-analytics-platform-mcea",
          title: 'Mombasa County Education Analytics Platform (MCEA)',
          description: "An integrated data platform for profiling schools and driving outcome-based educational resource allocation across Mombasa County.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/10_project/";
            },},{id: "projects-harb-hypergraph-based-adaptive-consortium-blockchain",
          title: 'HARB - Hypergraph-Based Adaptive Consortium Blockchain',
          description: "A blockchain architecture designed to balance decentralization and scalability for decentralized energy trading systems.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/1_project/";
            },},{id: "projects-plexichain-secure-blockchain-based-flexibility-aggregator",
          title: 'PlexiChain - Secure Blockchain-Based Flexibility Aggregator',
          description: "A secure blockchain framework integrating Physical Unclonable Functions (PUFs) and NFTs to strengthen device identity and protect decentralized IoT nodes.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/2_project/";
            },},{id: "projects-cypherchain-privacy-preserving-data-aggregation-framework",
          title: 'CypherChain - Privacy-Preserving Data Aggregation Framework',
          description: "A blockchain-based framework enabling privacy-preserving Demand Response offer aggregation through Secure Multiparty Computation and Homomorphic Encryption.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/3_project/";
            },},{id: "projects-bailif-blockchain-agnostic-interoperability-framework",
          title: 'BAILIF - Blockchain Agnostic Interoperability Framework',
          description: "A framework enabling secure, atomic, policy-aware interoperability between heterogeneous blockchain networks in decentralized energy systems.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/4_project/";
            },},{id: "projects-caeser-cybersecurity-of-consumer-energy-resources",
          title: 'CAESER - Cybersecurity of Consumer Energy Resources',
          description: "A national cybersecurity project focused on enhancing the cybersecurity and resilience of consumer energy resources (CERs) in Australian smart grids.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/5_project/";
            },},{id: "projects-ccdi-carbon-certification-amp-development-initiative",
          title: 'CCDI - Carbon Certification &amp;amp; Development Initiative',
          description: "A blockchain-based framework for verifying and certifying voluntary carbon credits with traceability, transparency, and auditability.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/6_project/";
            },},{id: "projects-agri-wallet-for-smallholder-farmers",
          title: 'Agri-Wallet for Smallholder Farmers',
          description: "A blockchain-powered payment and booking system integrated with IoT and AI components to empower smallholder farmers in Sub-Saharan Africa.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/7_project/";
            },},{id: "projects-tradelens-global-supply-chain-blockchain",
          title: 'TradeLens Global Supply Chain Blockchain',
          description: "A blockchain-based platform to digitize global supply chains, enabling real-time, tamper-proof sharing of shipping data across ports, carriers, customs, and logistics providers.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/8_project/";
            },},{id: "projects-cognitive-learning-companion-clc",
          title: 'Cognitive Learning Companion (CLC)',
          description: "An adaptive, sensor-powered learning assistant for African primary schools capable of personalized feedback, attention tracking, and cognitive load estimation.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/9_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/personal-website/assets/pdf/Samuel_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%72%75%6D%62%61%36%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/samkomo", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/karumba-samuel-phd", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7181-9799", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=XL1vtsgAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
