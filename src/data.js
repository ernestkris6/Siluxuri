import image1 from "./assets/stephen.webp";
import image2 from "./assets/jess2.webp";
import image3 from "./assets/jess.webp";



// TEAM DATA

export const teamData = [
  {
    name: "Ihenwosu C. Stephen",
    slug: "ihenwosu-stephen",
    role: "Founder & Managing Director",
    image: image1,
     bio: [
      "Ihenwosu Stephen Chijioke is a creative strategist with hands-on expertise in branding, marketing, and client relationship management. He holds a Bachelor’s degree in History and Strategic Studies from the University of Lagos.",
      
      "As the Founder and Managing Director of Siluxri Creative Studio, he leads a team of creatives across diverse markets, helping brands grow through creative, practical, and results-driven marketing solutions. His leadership is defined by strategic thinking, attention to detail, and a commitment to professionalism, creativity, and collaboration.",
    ],

    expertise: [
      "Brand Strategy",
      "Digital Marketing",
      "Client Relationship Management",
      "Creative Strategist & Business Development",
      
    ],

    instagram: "https://www.instagram.com/st_phenwolf?igsh=MTFpbG9wYmttcXJpOQ==",
    linkedin: "https://www.linkedin.com/in/alphastiff?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Nwabuzor Jessica",
    slug: "nwabuzor-jessica",
    role: "Chief Operations Manager",
    image: image2,
     bio: [
      "Jessica Nwabuzor oversees the systems, people, and processes that keep Siluxri Creative Studio moving efficiently from strategy to execution. As Chief Operations Manager, she focuses on organisation, quality, and seamless delivery, ensuring the team stays aligned and every client experience is handled with intention.",

      "Her approach combines strong coordination, attention to detail, and a commitment to maintaining the standards that allow the team to deliver creative work effectively and consistently."

    ],

    expertise: [
      "Operations Management",
      "Process & Workflow Management",
      "Quality Assurance & Service Delivery",
      "Team Coordination",
      
    ],

    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Ojo Olabisi",
    slug: "ojo-olabisi",
    role: "Finance Manager",
    image: image3,
     bio: [
      "As Finance Manager at Siluxri Creative Studio, Olabisi manages the company’s financial activities and records. She handle budgeting, financial reporting, and ensures proper financial controls.", 
      
      "She also monitors the company’s finances to ensure they are accurate, organised, and well managed.",
    ],

    expertise: [
      "Financial Management",
      "Budgeting & Financial Planning",
      "Financial Reporting",
      "Financial Controls & Record Management",
      
    ],

    instagram: "#",
    linkedin: "#",
  },
];



// SERVICES DATA
export const services = [
  {
    number: "01",
    title: "Brand Strategy",
    shortTitle: "Strategy",
    description:
      "We help businesses understand what they stand for, who they are speaking to, and where they want to go.",
    details:
      "From positioning and audience research to messaging and brand direction, we create the strategic foundation that gives every creative decision a reason.",
    tags: [
      "Brand Positioning",
      "Audience Research",
      "Brand Direction",
      "Messaging",
    ],
  },
  {
    number: "02",
    title: "Visual Identity",
    shortTitle: "Identity",
    description:
      "We translate your strategy into a visual language that feels distinctive, consistent and recognisable.",
    details:
      "Logo systems, typography, colour, graphic language and brand guidelines come together to create an identity people can recognise and remember.",
    tags: [
      "Logo Design",
      "Typography",
      "Colour Systems",
      "Brand Guidelines",
    ],
  },
  {
    number: "03",
    title: "Digital Experiences",
    shortTitle: "Digital",
    description:
      "We design digital experiences that make brands easier to understand, explore and engage with.",
    details:
      "We combine thoughtful UX with expressive visual design to create websites and digital products that feel as good as they function.",
    tags: [
      "Website Design",
      "UX/UI",
      "Digital Direction",
      "Prototyping",
    ],
  },
  {
    number: "04",
    title: "Web Development",
    shortTitle: "Development",
    description:
      "We turn considered designs into fast, responsive and purposeful digital experiences.",
    details:
      "Using modern technologies, we build websites that are responsive, maintainable and engineered around the needs of the brand and its audience.",
    tags: [
      "React",
      "Responsive Development",
      "CMS Integration",
      "Performance",
    ],
  },
];



//PROJECTS DATA

// export const project = [
//   {
//     slug: "rtm-fashion-concierge",
//     name: "RTM Fashion Concierge",
//     shortName: "RTM",
//     category: "Luxury Retail",
//     location: "Lagos, Nigeria",
//     description:
//       "A luxury retail brand specialising in authentic designer fashion and curated premium experiences.",

//     services: [
//       "Brand Identity Redesign",
//       "Social Media Management",
//       "Content Creation",
//       "Influencer Marketing",
//       "Paid Advertising",
//     ],

//     metrics: [
//       { label: "Followers", value: "31.32K+" },
//       { label: "Impressions", value: "4.08M+" },
//       { label: "Interactions", value: "126.78K+" },
//     ],

//     results: [
//       "Professional brand identity redesign",
//       "Increased brand recognition nationwide",
//       "Increased sales and in-store foot traffic",
//     ],

//     //F75D18, F2F2F2F, 242433, 3F3D56, E6E6E6

//     theme: {
//       background: "#F2F2F2", //Background
//       foreground: "#242433", //Major texts/bottom banner
//       accent: "#F75D18", //Tiny headings/services-list section
//       secondary: "#F75D18", //Button underline
//       displayFont: "Georgia, serif", //texts
//     },

//     cover: image2,
//     gallery: [
//       image1,
//       image2,
//       image3,
//       image1,
//       image2,
//       image3,
//       image1,
//       image2,
//       image3,
//     ],
//   },

//   {
//     slug: "d-sparkles",
//     name: "D.sparkles",
//     shortName: "D.SPARKLES",
//     category: "Jewellery & Lifestyle",
//     location: "Greater London, England",
//     description:
//       "A family-run jewellery brand celebrating the artistry and sophistication of handmade beaded jewellery.",

//     services: [
//       "Brand Identity Redesign",
//       "Social Media Management",
//       "Content Creation",
//       "Paid Advertising",
//     ],

//     metrics: [
//       { label: "Followers", value: "8.4K+" },
//       { label: "Impressions", value: "988.27K+" },
//       { label: "Interactions", value: "3.74K+" },
//     ],

//     results: [
//       "Professional brand identity redesign",
//       "Increased brand recognition worldwide",
//       "Online sales increase of 164%",
//     ],

//     theme: {
//       background: "#F7F7F7", //background
//       foreground: "#0B0C0D", //Major texts/bottom banner
//       accent: "#8A5265",     //Tiny headings/services-list section
//       secondary: "#735A51",  //Button underline
//       displayFont: "Georgia, serif", //Texts
//     },

//     cover: image3,
//     gallery: [
//       image1,
//       image2,
//       image3,
//     ],
//   },

//   {
//     slug: "haru-africa",
//     name: "HARU Africa",
//     shortName: "HARU",
//     category: "Korean Lifestyle",
//     location: "Lagos, Nigeria",
//     description:
//       "A Korean lifestyle brand bringing authentic Korean ramen, snacks, K-beauty, K-pop goods and cultural experiences closer to people across Nigeria and beyond.",

//     services: [
//       "Social Media Management",
//       "Content Creation",
//       "Influencer Marketing",
//       "Paid Advertising",
//     ],

//     metrics: [
//       { label: "Followers", value: "31.32K+" },
//       { label: "Impressions", value: "4.08M+" },
//       { label: "Interactions", value: "126.78K+" },
//     ],

//     results: [
//       "Increased brand recognition nationwide",
//       "Increased online sales and in-store foot traffic",
//     ],

//     theme: {
//       background: "#F3E8FF", //Background
//       foreground: "#1A1A1A", //Major texts/bottom banner
//       accent: "F2F2F2",  //Tiny headings/services-list section
//       secondary: "#F2F2F2", //Button underline
//       displayFont: "Georgia, serif", //Texts
//     },

//     cover: image2,
//     gallery: [
//       image1,
//       image2,
//       image3,
//     ],
//   },

//   {
//     slug: "vamp",
//     name: "VAMP",
//     shortName: "VAMP",
//     category: "Lifestyle Retail",
//     location: "Lagos, Nigeria",
//     description:
//       "A one-stop shop for authentic vapes and smoke accessories in Lagos, Nigeria, with carefully curated selections built around exploration and expression.",

//     services: [
//       "Brand Guide Design",
//       "Social Media Management",
//       "Content Creation",
//       "Influencer Marketing",
//       "Paid Advertising",
//     ],

//     metrics: [
//       { label: "Followers", value: "6.89K+" },
//       { label: "Impressions", value: "1.19M+" },
//       { label: "Interactions", value: "13.6K+" },
//     ],

//     results: [
//       "Increased brand awareness and loyalty",
//       "Increased brand engagement",
//       "Increased online sales and foot traffic to store",
//     ],

//     theme: {
//       background: "#EAEAEA", //background
//       foreground: "#171717", //Major texts/bottom banner
//       accent: "",     //Tiny headings/services-list section
//       secondary: "#008751",  //Button underline
//       displayFont: "Georgia, serif", //Texts
//     },

//     cover: image3,
//     gallery: [
//       image1,
//       image2,
//       image3,
//     ],
//   },

//   {
//     slug: "better-life-ahead",
//     name: "Better Life Ahead",
//     shortName: "BLA",
//     category: "Fashion",
//     location: "Lagos, Nigeria",
//     description:
//       "A high-end fashion brand committed to revolutionising the fashion landscape through bold, sophisticated designs that inspire confidence and self-expression.",

//     services: [
//       "Brand Identity Design",
//       "Merchandise Design",
//     ],

//     metrics: [
//       { label: "Followers", value: "31.32K+" },
//       { label: "Impressions", value: "4.08M+" },
//       { label: "Interactions", value: "126.78K+" },
//     ],

//     results: [
//       "Professional brand identity design",
//       "Official brand launch and merchandise sales",
//     ],

//     theme: {
//       background: "#E2E2E2",  //background
//       foreground: "#9A7B3E",  //Major texts/bottom banner
//       accent: "",      //Tiny headings/services-list section
//       secondary: "#4A0000",   //Button underline
//       displayFont: "Georgia, serif",  //Texts
//     },

//     cover: image1,
//     gallery: [
//       image1,
//       image2,
//       image3,
//     ],
//   },

//   {
//     slug: "chums-beauty",
//     name: "Chums Beauty",
//     shortName: "CHUMS",
//     category: "Beauty & Hair",
//     location: "Nigeria",
//     description:
//       "A Nigerian hair styling and beauty brand where elegance meets expertise, celebrating beauty, culture and individuality.",

//     services: [
//       "Brand Identity Redesign",
//     ],

//     metrics: [],

//     results: [
//       "Professional brand identity design that is stylish, clean and timeless",
//     ],

//     theme: {
//       background: "#C8A2C8",   //background
//       foreground: "#612828",   //Major texts/bottom banner
//       accent: "#F2F2F2",       //Tiny headings/services-list section
//       secondary: "#FAB1B1",    //Button underline
//       displayFont: "Georgia, serif",  //Texts
//     },

//     cover: image2,
//     gallery: [
//       image1,
//       image2,
//       image3,
//     ],
//   },
// ];


//WORKS DATA

export const project = [
  {
    slug: "rtm-fashion-concierge",
    name: "RTM Fashion Concierge",
    shortName: "RTM",
    category: "Luxury Retail",
    location: "Lagos, Nigeria",
    description:
      "A luxury retail brand specialising in authentic designer fashion and curated premium experiences.",

    services: [
      "Brand Identity Redesign",
      "Social Media Management",
      "Content Creation",
      "Influencer Marketing",
      "Paid Advertising",
    ],

    metrics: [
      { label: "Followers", value: "31.32K+" },
      { label: "Impressions", value: "4.08M+" },
      { label: "Interactions", value: "126.78K+" },
    ],

    results: [
      "Professional brand identity redesign",
      "Increased brand recognition nationwide",
      "Increased sales and in-store foot traffic",
    ],

    //F75D18, F2F2F2F, 242433, 3F3D56, E6E6E6

    theme: {
      background: "#F2F2F2", //Background
      foreground: "#242433", //Major texts/bottom banner
      accent: "#242433", //Tiny headings
      secondary: "#F2F2F2", //Button underline/services-list section 
      displayFont: "Georgia, serif", //texts
    },

    cover: image2,
    gallery: [
      image1,
      image2,
      image3,
      image1,
      image2,
      image3,
      image1,
      image2,
    ],
  },

  {
    slug: "d-sparkles",
    name: "D.sparkles",
    shortName: "D.SPARKLES",
    category: "Jewellery & Lifestyle",
    location: "Greater London, England",
    description:
      "A family-run jewellery brand celebrating the artistry and sophistication of handmade beaded jewellery.",

    services: [
      "Brand Identity Redesign",
      "Social Media Management",
      "Content Creation",
      "Paid Advertising",
    ],

    metrics: [
      { label: "Followers", value: "8.4K+" },
      { label: "Impressions", value: "988.27K+" },
      { label: "Interactions", value: "3.74K+" },
    ],

    results: [
      "Professional brand identity redesign",
      "Increased brand recognition worldwide",
      "Online sales increase of 164%",
    ],

    theme: {
      background: "#F7F7F7", //background
      foreground: "#0B0C0D", //Major texts/bottom banner
      accent: "#8A5265",     //Tiny headings
      secondary: "#735A51",  //Button underline/services-list section 
      displayFont: "Georgia, serif", //Texts
    },

    cover: image3,
    gallery: [
      image1,
      image2,
      image3,
    ],
  },

  {
    slug: "haru-africa",
    name: "HARU Africa",
    shortName: "HARU",
    category: "Korean Lifestyle",
    location: "Lagos, Nigeria",
    description:
      "A Korean lifestyle brand bringing authentic Korean ramen, snacks, K-beauty, K-pop goods and cultural experiences closer to customers across Nigeria.",

    services: [
      "Social Media Management",
      "Content Creation",
      "Influencer Marketing",
      "Paid Advertising",
    ],

    metrics: [],

    results: [
      "Increased brand recognition nationwide",
      "Increased online sales",
      "Increased in-store foot traffic",
    ],

    theme: {
      background: "#F3E8FF", //Background
      foreground: "#1A1A1A", //Major texts/bottom banner
      accent: "F2F2F2",  //Tiny headings
      secondary: "#F2F2F2", //Button underline/services-list section 
      displayFont: "Georgia, serif", //Texts
    },

    cover: image2,
    gallery: [
      image1,
      image2,
      image3,
    ],
  },

  {
    slug: "vamp",
    name: "VAMP",
    shortName: "VAMP",
    category: "Lifestyle Retail",
    location: "Lagos, Nigeria",
    description:
      "A lifestyle retail brand with a curated selection of products and accessories, built around exploration and expression.",

    services: [
      "Brand Guide Design",
      "Social Media Management",
      "Content Creation",
      "Influencer Marketing",
      "Paid Advertising",
    ],

    metrics: [
      { label: "Followers", value: "6.89K+" },
      { label: "Impressions", value: "1.19M+" },
      { label: "Interactions", value: "13.6K+" },
    ],

    results: [
      "Increased brand awareness and loyalty",
      "Increased brand engagement",
      "Increased online sales and store foot traffic",
    ],

    theme: {
      background: "#EAEAEA", //background
      foreground: "#171717", //Major texts/bottom banner
      accent: "",     //Tiny headings
      secondary: "#008751",  //Button underline/services-list section 
      displayFont: "Georgia, serif", //Texts
    },

    cover: image3,
    gallery: [
      image1,
      image2,
      image3,
    ],
  },

  {
    slug: "better-life-ahead",
    name: "Better Life Ahead",
    shortName: "BLA",
    category: "Fashion",
    location: "Lagos, Nigeria",
    description:
      "A high-end fashion brand creating bold, sophisticated designs for individuals who value quality and self-expression.",

    services: [
      "Brand Identity Design",
      "Merchandise Design",
    ],

    metrics: [],

    results: [
      "Professional brand identity design",
      "Official brand launch",
      "Merchandise sales",
    ],

    theme: {
      background: "#E2E2E2",  //background
      foreground: "#9A7B3E",  //Major texts/bottom banner
      accent: "",      //Tiny headings
      secondary: "#4A0000",   //Button underline/services-list section 
      displayFont: "Georgia, serif",  //Texts
    },

    cover: image1,
    gallery: [
      image1,
      image2,
      image3,
    ],
  },

  {
    slug: "chums-beauty",
    name: "Chums Beauty",
    shortName: "CHUMS",
    category: "Beauty & Hair",
    location: "Nigeria",
    description:
      "A hair styling and beauty brand where elegance meets expertise, celebrating individuality and personal expression.",

    services: [
      "Brand Identity Redesign",
    ],

    metrics: [],

    results: [
      "A stylish and clean brand identity",
      "A timeless visual direction",
    ],

    theme: {
      background: "#C8A2C8",   //background
      foreground: "#612828",   //Major texts/bottom banner
      accent: "#F2F2F2",       //Tiny headings
      secondary: "#FAB1B1",    //Button underline/services-list section 
      displayFont: "Georgia, serif",  //Texts
    },

    cover: image2,
    gallery: [
      image1,
      image2,
      image3,
    ],
  },
];

