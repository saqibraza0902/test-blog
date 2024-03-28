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
