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
        },{id: "nav-projects",
          title: "projects",
          description: "Selected research and embodied-AI systems.",
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
        },{id: "news-joined-as-an-undergraduate-research-intern-at-pku-hmi-lab-and-embodied-multimodal-large-model-research-center-at-baai",
          title: 'Joined as an undergraduate research intern at PKU HMI Lab and Embodied Multimodal...',
          description: "",
          section: "News",},{id: "news-prodrive-and-echoarena-are-accepted-by-cvpr-2026-gigabrain-challenge-workshop",
          title: 'ProDrive and EchoArena are accepted by CVPR 2026 GigaBrain Challenge Workshop!',
          description: "",
          section: "News",},{id: "news-mask-world-model-is-accepted-by-icml-2026",
          title: 'Mask World Model is accepted by ICML 2026.',
          description: "",
          section: "News",},{id: "news-force-our-work-on-efficient-reinforcement-fine-tuning-for-vla-models-is-now-available-on-arxiv",
          title: 'FORCE, our work on efficient reinforcement fine-tuning for VLA models, is now available...',
          description: "",
          section: "News",},{id: "projects-desktop-manipulation-via-3d-diffusion-policy",
          title: 'Desktop Manipulation via 3D Diffusion Policy',
          description: "Implementation of 3D diffusion policy for desktop manipulation tasks, including environment setup, data collection, policy training, and evaluation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-prodrive",
          title: 'ProDrive',
          description: "Proactive autonomous-driving planning through ego-environment co-evolution.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_prodrive/";
            },},{id: "projects-token-world",
          title: 'Token-World',
          description: "Direct world-model simulation for vision-language-action policies in compact visual-token space.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_token_world/";
            },},{id: "projects-human-robot-tabletop-curling",
          title: 'Human–Robot Tabletop Curling',
          description: "A real-robot demo that applies a physical world model to interactive gameplay against a human.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_tabletop_curling/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%75%63%79%32%30%32%33@%62%65%72%6B%65%6C%65%79.%65%64%75", "_blank");
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
