import { PUBLIC_URLS } from "@/utils/urls";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
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
    dropdownItems: [
      {
        title: "Web Development",
        pathname: "/services/web-development",
      },
      {
        title: "App Development",
        pathname: "/services/app-development",
      },
    ],
  },
  {
    isDropdown: false,
    title: "Process",
    pathname: PUBLIC_URLS.HOME,
    prefix: PUBLIC_URLS.HOME,
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

export const SHARE_ICONS = [
  {
    icon: <FaLinkedinIn color="#878A93" size={20} />,
    iconAlt: <FaLinkedinIn color="#fff" size={20} />,
    color: "bg-[#3827C7]",
    shareType: "LINKEDIN",
  },
  {
    icon: <FaFacebookF color="#878A93" size={20} />,
    iconAlt: <FaFacebookF color="#fff" size={20} />,
    color: "bg-[#255fef]",
    shareType: "FACEBOOK",
  },
  {
    icon: <BsTwitterX color="#878A93" size={20} />,
    iconAlt: <BsTwitterX color="#fff" size={20} />,
    color: "bg-[#000]",
    shareType: "TWITTER",
  },
  {
    icon: <IoIosLink color="#878A93" size={20} />,
    iconAlt: <IoIosLink color="#fff" size={20} />,
    color: "bg-[#000]",
    shareType: "COPY",
  },
];
export const SERVICE_ARRAY = [
  {
    title: "Research & Concepts",
    time: "4-6 days",
    description:
      "At the outset, we explore your goals, analyze competitors, and study how customers interact with similar products.",
    deliverables: ["Style visualization", "Design concepts"],
    icon: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/65675dbf5e3650c81fde3320_icon-one.svg",
  },
  {
    title: "Wireframes",
    time: "1.5-2 weeks",
    description:
      "Putting users first, our specialists visualize each screen of the product and turn it into a clickable prototype.",
    deliverables: ["Page structure", "Approximate layout"],
    icon: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/65675dc84eb549e10e0b1501_icon-second.svg",
  },
  {
    title: "UI & Design system",
    time: "2-3 weeks",
    description:
      "Based on the results from previous steps, we shape your individual style, making it appealing and functional for your audience.",
    deliverables: ["Final design", "Guide to using components"],
    icon: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/65675dd0c75e045c8d26fa87_icon-three.svg",
  },
];
export const OFFERS = [
  {
    title: "Website design",
    description:
      "Our creative team will make sure your site’s design captures and elevates the image of your start-up or business.",
    icon: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/663a282becda26698f443648_icon-benefits_design.svg",
  },
  {
    title: "Content writing",
    description:
      "We write clear, creative content that drives traffic, conversions, brand loyalty and works great for SEO.",
    icon: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/661f94e2c8f151e9638501bf_icon-benefits_responsive.svg",
  },
  {
    title: "SEO",
    description:
      "We’ll tailor our approach to help your site climb to the top of search results, making sure people find you first.",
    icon: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/661f949990f4a57dba84183f_icon-benefits_user-centric.svg",
  },
  {
    title: "Website development",
    description:
      "We turn great designs into functional websites, blending custom solutions and CMS with a design-first mindset.",
    icon: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/6595325927ede6e1109aea5c_icon-benefits_result.svg",
  },
  {
    title: "CRO",
    description:
      "We’ll audit and refine your site’s UX, applying proven strategies to drive leads and conversions.",
    icon: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/6595325927ede6e1109aea5c_icon-benefits_result.svg",
  },
  {
    title: "CMS setup",
    description:
      "We will pick and customize the perfect CMS to fit your needs, making your website management smooth and easy.",
    icon: "https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/663a28a647f16f833b7e49dd_icon-benefits_cms.svg",
  },
];
