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
          description: "Research publications, patents, and technical outputs spanning AI security, privacy-preserving computation, secure distributed systems, and cyber-physical energy security.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal-website/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected research systems and frameworks spanning AI security, privacy-preserving computation, cyber-physical energy security, and secure distributed coordination.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal-website/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Current academic and professional CV covering trustworthy AI, AI security and privacy, secure distributed systems, cyber-physical security, applied cryptography, publications, patents, and research funding. Download the PDF version using the button above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal-website/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Selected teaching, supervision, and mentoring contributions across mobile systems, web security, distributed systems, and applied computing.",
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
          section: "News",},{id: "news-patent-application-published-us20180189449a1-tracking-items-used-for-providing-medical-services",
          title: 'Patent application published: US20180189449A1 - Tracking Items Used for Providing Medical Services',
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
          section: "News",},{id: "news-joined-guardlydata-as-a-research-scientist-focusing-on-ai-data-security-and-privacy-for-enterprise-ai-workflows",
          title: 'Joined GuardlyData as a Research Scientist, focusing on AI data security and privacy...',
          description: "",
          section: "News",},{id: "projects-distributed-education-data-platform",
          title: 'Distributed education data platform',
          description: "School census and school information systems for resource-constrained environments, with field data collection, validation, and reporting workflows.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/10_project/";
            },},{id: "projects-cooperative-mobile-content-distribution-system",
          title: 'Cooperative mobile content distribution system',
          description: "Resource-aware cooperative downloading for low-end mobile devices operating under bandwidth, battery, and storage constraints.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/11_project/";
            },},{id: "projects-farm-cultivation-quality-analytics",
          title: 'Farm cultivation quality analytics',
          description: "Knowledge-graph and machine-learning support for cultivation-quality assessment and evidence-based agricultural decision-making.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/12_project/";
            },},{id: "projects-ai-native-data-protection-for-enterprise-ai-workflows",
          title: 'AI-native data protection for enterprise AI workflows',
          description: "Detection, redaction, and auditing architectures for sensitive data exposure across copilots, browsers, IDEs, RAG, and agentic AI workflows.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/1_project/";
            },},{id: "projects-caeser-cybersecurity-analysis-for-consumer-energy-resources",
          title: 'CAESER - Cybersecurity analysis for consumer energy resources',
          description: "Cybersecurity threat modelling and stakeholder-facing analysis for smart inverters, distributed energy resources, and grid-edge infrastructure.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/2_project/";
            },},{id: "projects-energipay-off-chain-payment-channels-for-peer-to-peer-energy-trading",
          title: 'EnergiPay - Off-chain payment channels for peer-to-peer energy trading',
          description: "An off-chain payment-channel framework for blockchain-enabled peer-to-peer energy trading and lower-overhead settlement.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/3_project/";
            },},{id: "projects-cypherchain-privacy-preserving-data-aggregation-for-demand-response",
          title: 'CypherChain - Privacy-preserving data aggregation for demand response',
          description: "Privacy-preserving aggregation for blockchain-based demand response using secure multiparty computation and homomorphic encryption.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/4_project/";
            },},{id: "projects-plexichain-secure-blockchain-based-flexibility-aggregation",
          title: 'PlexiChain - Secure blockchain-based flexibility aggregation',
          description: "A secure flexibility-aggregation framework for distributed energy resources under adversarial grid conditions.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/5_project/";
            },},{id: "projects-bailif-blockchain-agnostic-interoperability-framework",
          title: 'BAILIF - Blockchain-agnostic interoperability framework',
          description: "Cross-chain interoperability using decentralised notaries, attestation, and proof-of-concept exchange across blockchain networks.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/6_project/";
            },},{id: "projects-temporary-immutability-for-prosumer-side-energy-trading",
          title: 'Temporary Immutability for prosumer-side energy trading',
          description: "A removable blockchain architecture that preserves auditability while allowing governed record removal in prosumer energy trading.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/7_project/";
            },},{id: "projects-harb-hypergraph-based-adaptive-consortium-blockchain",
          title: 'HARB - Hypergraph-based adaptive consortium blockchain',
          description: "A hypergraph-based consortium blockchain for scalable decentralised energy trading and adaptive coordination.",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website/projects/8_project/";
            },},{id: "projects-relational-network-framework-for-distributed-energy-trading",
          title: 'Relational network framework for distributed energy trading',
          description: "A hypergraph-based model for analysing interoperability and interaction structure in distributed energy trading systems.",
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
