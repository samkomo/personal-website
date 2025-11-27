// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Research publications in blockchain, privacy-preserving computation, and decentralized energy systems. Includes journal articles, conference papers, book chapters, and patents.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research projects organized into frameworks and systems. Frameworks focus on novel architectures and protocols, while systems represent deployed applications and platforms.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic CV and professional experience. Download PDF version using the button above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses taught, student supervision, and educational contributions at Strathmore University and UNSW.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-paper-accepted-at-ieee-icse-seis-2017-deploying-large-scale-school-census-hub-an-experience-report",
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
          section: "News",},{id: "news-started-as-postdoctoral-research-engineer-at-csiro-data61-leading-engineering-of-cybersecurity-and-blockchain-based-assurance-frameworks-within-the-caeser-program",
          title: 'Started as Postdoctoral Research Engineer at CSIRO Data61, leading engineering of cybersecurity and...',
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
          section: "News",},{id: "news-started-as-research-amp-amp-innovation-consultant-at-secure-decentralized-systems-leading-design-and-deployment-of-blockchain-based-data-integrity-systems-and-verifiable-ai-infrastructures",
          title: 'Started as Research &amp;amp;amp; Innovation Consultant at Secure Decentralized Systems, leading design and...',
          description: "",
          section: "News",},{id: "projects-mombasa-county-education-analytics-platform-mcea",
          title: 'Mombasa County Education Analytics Platform (MCEA)',
          description: "An integrated data platform for profiling schools and driving outcome-based educational resource allocation across Mombasa County.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-harb-hypergraph-based-adaptive-consortium-blockchain",
          title: 'HARB - Hypergraph-Based Adaptive Consortium Blockchain',
          description: "A blockchain architecture designed to balance decentralization and scalability for decentralized energy trading systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-plexichain-secure-blockchain-based-flexibility-aggregator",
          title: 'PlexiChain - Secure Blockchain-Based Flexibility Aggregator',
          description: "A secure blockchain framework integrating Physical Unclonable Functions (PUFs) and NFTs to strengthen device identity and protect decentralized IoT nodes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-cypherchain-privacy-preserving-data-aggregation-framework",
          title: 'CypherChain - Privacy-Preserving Data Aggregation Framework',
          description: "A blockchain-based framework enabling privacy-preserving Demand Response offer aggregation through Secure Multiparty Computation and Homomorphic Encryption.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-bailif-blockchain-agnostic-interoperability-framework",
          title: 'BAILIF - Blockchain Agnostic Interoperability Framework',
          description: "A framework enabling secure, atomic, policy-aware interoperability between heterogeneous blockchain networks in decentralized energy systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-caeser-cybersecurity-of-consumer-energy-resources",
          title: 'CAESER - Cybersecurity of Consumer Energy Resources',
          description: "A national cybersecurity project focused on enhancing the cybersecurity and resilience of consumer energy resources (CERs) in Australian smart grids.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-ccdi-carbon-certification-amp-development-initiative",
          title: 'CCDI - Carbon Certification &amp;amp; Development Initiative',
          description: "A blockchain-based framework for verifying and certifying voluntary carbon credits with traceability, transparency, and auditability.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-agri-wallet-for-smallholder-farmers",
          title: 'Agri-Wallet for Smallholder Farmers',
          description: "A blockchain-powered payment and booking system integrated with IoT and AI components to empower smallholder farmers in Sub-Saharan Africa.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-tradelens-global-supply-chain-blockchain",
          title: 'TradeLens Global Supply Chain Blockchain',
          description: "A blockchain-based platform to digitize global supply chains, enabling real-time, tamper-proof sharing of shipping data across ports, carriers, customs, and logistics providers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-cognitive-learning-companion-clc",
          title: 'Cognitive Learning Companion (CLC)',
          description: "An adaptive, sensor-powered learning assistant for African primary schools capable of personalized feedback, attention tracking, and cognitive load estimation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Samuel_CV.pdf", "_blank");
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
