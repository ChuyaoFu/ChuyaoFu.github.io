// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications and ongoing research manuscripts.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-industry-experience",
          title: "industry experience",
          description: "Industry research experience in embodied AI, VLA systems, and world models.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Chuyao Fu&#39;s Curriculum Vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-joined-pku-hmi-lab-and-the-embodied-multimodal-large-model-research-center-at-baai-as-an-undergraduate-research-intern",
          title: 'Joined PKU HMI Lab and the Embodied Multimodal Large Model Research Center at...',
          description: "",
          section: "News",},{id: "news-prodrive-and-echoarena-were-accepted-to-the-cvpr-2026-gigabrain-challenge-workshop",
          title: 'ProDrive and EchoArena were accepted to the CVPR 2026 GigaBrain Challenge Workshop.',
          description: "",
          section: "News",},{id: "news-mask-world-model-was-accepted-to-icml-2026",
          title: 'Mask World Model was accepted to ICML 2026.',
          description: "",
          section: "News",},{id: "news-force-our-work-on-efficient-reinforcement-fine-tuning-for-vla-models-is-now-available-on-arxiv",
          title: 'FORCE, our work on efficient reinforcement fine-tuning for VLA models, is now available...',
          description: "",
          section: "News",},{id: "news-joined-muka-robotics-as-a-research-intern-working-on-world-model-representation-learning-and-foundational-world-action-model-pretraining",
          title: 'Joined Muka Robotics as a research intern, working on world-model representation learning and...',
          description: "",
          section: "News",},{id: "news-our-latest-action-conditioned-world-model-code-named-sisyphusworld-ranked-second-on-the-worldarena-leaderboard-and-was-featured-in-media-report-1-and-media-report-2",
          title: 'Our latest action-conditioned world model, code-named SisyphusWorld, ranked second on the WorldArena leaderboard...',
          description: "",
          section: "News",},{id: "projects-awesome-representation-for-world-models",
          title: 'Awesome Representation for World Models',
          description: "A collaborative survey and open-source knowledge base on representations for world models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-human-robot-tabletop-curling",
          title: 'Human–Robot Tabletop Curling',
          description: "A real-robot demo that applies a physical world model to interactive gameplay against a human.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_tabletop_curling/";
            },},{id: "projects-robobrain-x0",
          title: 'RoboBrain-X0',
          description: "A cross-embodiment vision-language-action model trained across heterogeneous robot platforms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_robobrain_x0/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%75%63%79%32%30%32%33@%6D%61%69%6C.%73%75%73%74%65%63%68.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ChuyaoFu", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
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
