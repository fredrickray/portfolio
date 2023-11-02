import {
  creator,
  mobile,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  mysql,
  postgresql,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  hng,
  starbucks,
  tesla,
  nupat,
  piem,
  piem2,
  shopify,
  carrent,
  jobit,
  threejs,
  shopease,
  paynexus,
  paynexus_login,
  aniben
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "HTML",
    icon: html,
  },
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "Tailwind",
    icon: tailwind,
  },
  {
    title: "Reactjs",
    icon: reactjs ,
  },
  {
    title: "Git",
    icon: git,
  },
  {
    title: "Nodejs",
    icon: nodejs,
  },
  {
    title: "Mysql",
    icon: mysql,
  },
  {
    title: "PostgreSQL",
    icon: postgresql,
  },
  {
    title: "Figma",
    icon: figma,
  },
  {
    title: "Shopify",
    icon: shopify,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Shopify",
    icon: shopify,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Node.js Developer(Intern)",
    company_name: "Nupat",
    icon: nupat,
    iconBg: "#383E56",
    date: "March 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Shopify Developer",
    company_name: "Piem",
    icon: piem,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Platform Choice: I started by choosing Shopify as the platform for our online store because it's a trusted and versatile e-commerce solution.",
      "Custom Design: To make Piem online store look and feel unique, we designed a custom theme that matches the luxury and sophistication of the brand.",
      "Product Listings: I added each of piem leather products, like shoes, with detailed information, pictures, and prices so that customers can easily explore and select what they want.",
      "Craftsmanship Showcase: I created a special section on the website to show off the craftsmanship that goes into making our products, highlighting the attention to detail and artistry.",
      "E-commerce Features: I set up secure payment processing, inventory management, and order fulfillment, making it easy for customers to shop with confidence.",
      "Mobile Optimization: The website is optimized for mobile devices, so you can shop from your smartphone or tablet just as easily as on a computer.",
      "SEO and Marketing: I've optimized our site to appear in search engines and incorporated marketing tools to reach a wider audience through email campaigns and social media sharing.",
      "Customer Support: We're here to help. You can get in touch with us through live chat or contact forms for any questions or concerns."
    ],
  },
  {
    title: "Backend Developer(Intern Finalist)",
    company_name: "HNG",
    icon: hng,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Building and maintaining robust back-end systems with Node.js and related technologies.",
      "Working closely with cross-functional teams, including designers, product managers, and fellow developers, to deliver high-quality solutions.",
      "Implementing efficient server-side logic and ensuring data integrity and security.",
      "Contributing to code reviews and offering valuable insights to enhance the team's development processes.",
      "Developing micro-services to improve the efficiency of the backend systems"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Fredrick proved me wrong.",
    name: "Uchenna Nnodim",
    designation: "CEO",
    company: "Raven Bank & Roqqu",
    image: "https://res.cloudinary.com/dlokxjygn/image/upload/v1698166952/WhatsApp_Image_2023-08-19_at_11.43.36_AM_nebpa1.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Fredrick does.",
    name: "Uzo Nnodim",
    designation: "CEO",
    company: "Nuza Engineering",
    image: "https://res.cloudinary.com/dlokxjygn/image/upload/v1698167040/WhatsApp_Image_2023-10-09_at_7.19.47_AM_u6rdnd.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shop Ease",
    description:
      "A dynamic platform where numerous vendors can effortlessly set up their own digital storefronts. Vendors have the flexibility to showcase their products, manage inventory, and interact with customers—all in one place. Meanwhile, customers can explore a diverse range of offerings from various vendors, making shopping a seamless and personalized experience. With our app, we empower vendors to expand their reach and offer customers a convenient and diverse marketplace",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter wave payment api",
        color: "pink-text-gradient",
      },
      
    ],
    image: shopease,
    source_code_link: "https://github.com/fredrickray/Falcon",
  },
  {
    name: "Reels Weather App",
    description:
      "Our weather app delivers real-time weather forecasts and information at your fingertips. With accurate data and user-friendly features, it provides you with up-to-date weather conditions, forecasts, and essential details like temperature, precipitation, and wind speed. Whether you're planning your day or preparing for a trip, our app ensures you're always informed about the latest weather trends, keeping you safe and prepared for any conditions",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/fredrickray/reels-weather-app",
  },
  {
    name: "AniBen Store",
    description:
      "Aniben online store is your one-stop destination for an exceptional shopping experience. Explore a vast selection of high-quality products from various categories, handpicked for your convenience. With secure payment options, easy navigation, and responsive customer support, we provide a seamless shopping journey. Discover, browse, and shop confidently at our online store, where your satisfaction is our top priority.",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      }
    ],
    image: aniben,
    source_code_link: "https://github.com/",
  },
  {
    name: "Clock Wise",
    description:
      "simplifies time management and enhances your daily routines. With a user-friendly interface, it offers a range of features, including alarms, timers, and a world clock, all in one place. Whether you need to wake up on time, time your cooking, or keep track of international time zones, our clock app ensures you're always in sync with the hours. Stay organized and punctual with our reliable and versatile clock app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/fredrickray/clock",
  },
  {
    name: "Pay Nexus",
    description:
      "Pay Nexus online store platform revolutionizes e-commerce by bringing together a multitude of vendors under one digital roof. Vendors can effortlessly set up their stores, showcase their products, and reach a broad customer base. Shoppers enjoy a seamless shopping experience with a unified shopping cart and secure, hassle-free transactions. With our platform, it's never been easier for vendors to thrive and for customers to discover, browse, and purchase a diverse array of products—all in one place",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "Flutter wave payment api",
        color: "pink-text-gradient",
      },
      
    ],
    image: paynexus_login,
    source_code_link: "https://github.com/fredrickray/Pay-Stack",
  },
];

export { services, technologies, experiences, testimonials, projects };
