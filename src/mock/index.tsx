import { PUBLIC_URLS } from "@/utils/urls";

export const NavData = [
  {
    title: "New Blog",
    pathname: "/newblog",
    prefix: "/newblog",
  },
  {
    title: "Query",
    pathname: "/queries",
    prefix: "/queries",
  },
  {
    title: "New Portfolio",
    pathname: "/newportfolio",
    prefix: "/newportfolio",
  },
  {
    title: "New Collectibles",
    pathname: "/newcollectibles",
    prefix: "/newcollectibles",
  },
  {
    title: "Collectibles Actions",
    pathname: "/colaction",
    prefix: "/colaction",
  },
];
export const WITHOUT_AUTH_PUBLIC_NAV = [
  {
    title: "Services",
    isDropdown: true,
    pathname: PUBLIC_URLS.SERVICES,
    prefix: PUBLIC_URLS.SERVICES,
  },
  {
    isDropdown: false,
    title: "Process",
    pathname: PUBLIC_URLS.CONTACT,
    prefix: PUBLIC_URLS.CONTACT,
  },
  {
    title: "Projects",
    isDropdown: false,
    pathname: PUBLIC_URLS.PROJECTS,
    prefix: PUBLIC_URLS.PROJECTS,
  },
  {
    title: "Blog",
    isDropdown: false,
    pathname: PUBLIC_URLS.BLOG,
    prefix: PUBLIC_URLS.BLOG,
  },
  {
    title: "Collectibles",
    isDropdown: false,
    pathname: PUBLIC_URLS.COLLECTIBLES,
    prefix: PUBLIC_URLS.COLLECTIBLES,
  },
];
export const PUBLIC_NAV = [
  {
    title: "Home",
    pathname: PUBLIC_URLS.HOME,
    prefix: PUBLIC_URLS.HOME,
  },
  {
    title: "Services",
    pathname: PUBLIC_URLS.SERVICES,
    prefix: PUBLIC_URLS.SERVICES,
  },
  {
    title: "Projects",
    pathname: PUBLIC_URLS.PROJECTS,
    prefix: PUBLIC_URLS.PROJECTS,
  },
  {
    title: "Blog",
    pathname: PUBLIC_URLS.BLOG,
    prefix: PUBLIC_URLS.BLOG,
  },
  {
    title: "Collectibles",
    pathname: PUBLIC_URLS.COLLECTIBLES,
    prefix: PUBLIC_URLS.COLLECTIBLES,
  },
  {
    title: "Contact",
    pathname: PUBLIC_URLS.CONTACT,
    prefix: PUBLIC_URLS.CONTACT,
  },
];

export const AUTH_NAV = [
  {
    title: "Queries",
    pathname: "/queries",
    prefix: "/queries",
    dropdown: false,
  },
  {
    title: "Create",
    dropdown: true,
    options: [
      {
        title: "Create Blog",
        pathname: "/newblog",
      },
      {
        title: "Create Portfolio",
        pathname: "/newportfolio",
      },
      {
        title: "Create Collectibles",
        pathname: "/newcollectibles",
      },
    ],
  },
  {
    title: "Update",
    dropdown: true,
    options: [
      {
        title: "Update Blog",
        pathname: "/blog-actions",
      },
      {
        title: "Update Portfolio",
        pathname: "/portfolio-actions",
      },
      {
        title: "Update Collectibles",
        pathname: "/colaction",
      },
    ],
  },
];
export const SERVICES_ARRAY = [
  {
    title: "Product Research",
    desc: " To lay a solid foundation for the creative process that follows,we begin our journey with the discovery phase.",
    icon: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg",
  },
  {
    title: "Product design",
    desc: "By putting users' needs at the forefront, we tell a unique story of your company, juggling with fancy visual elements.",
    icon: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/640744d0e7b29de6f1a29aee_icon-services-design.svg",
  },
  {
    title: "Product development",
    desc: "The motto of our development process is creating digital experiences that are both appealing and functional.",
    icon: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/6449421486eae3cf4d387564_development-Illustration.svg",
  },
  {
    title: "Product  growth & care",
    desc: "With various tools, our experts can help you expand the target audience and increase brand awareness.",
    icon: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/6449410877257b6dcfa0ec88_marketing-illustration.svg",
  },
];
export const PARTNERS_ARRAY = [
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3b9f3e40ff0538797_logo-oppo.svg",
    text: "Designing mobile concepts for a popular brand in electronic products.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e32ce946863b8f8186_logo-udemy.svg",
    text: "Reimagining the video player for courses and overall viewer experience.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3096057f141c8ebcd_logo-jbl.svg",
    text: "Developing a full-stack application as part of the hi-end audio brand's marketing campaign.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e39eb5682b005d667b_logo-creativemarket.svg",
    text: "Online marketplace that provides a platform for creators to buy and sell design assets.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3bff353f4da960f47_logo-seneca.svg",
    text: "Designing a powerful educational platform for effective learning..",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e39174b67fc9938ad1_logo-auth0.svg",
    text: "Using our expertise to boost Auth0 processes.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3e925e907cbc11093_logo-corel.svg",
    text: "Showcasing a future vision for WinZip family products.",
  },
  {
    img: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/64c916e32ce946863b8f8186_logo-udemy.svg",
    text: "Reimagining the video player for courses and overall viewer experience.",
  },
];
