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

    theme: {
      background: "#F4F0EA",
      foreground: "#242536",
      accent: "#007589",
      secondary: "#EB6F38",
      displayFont: "Georgia, serif",
    },

    cover: "/images/works/rtm/cover.jpg",
    gallery: [
      "/images/works/rtm/01.jpg",
      "/images/works/rtm/02.jpg",
      "/images/works/rtm/03.jpg",
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
      background: "#F4EEE8",
      foreground: "#302B35",
      accent: "#8A5265",
      secondary: "#D8B88A",
      displayFont: "Georgia, serif",
    },

    cover: "/images/works/d-sparkles/cover.jpg",
    gallery: [
      "/images/works/d-sparkles/01.jpg",
      "/images/works/d-sparkles/02.jpg",
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
      background: "#F0F5F0",
      foreground: "#183A32",
      accent: "#2C745E",
      secondary: "#E9A23B",
      displayFont: "Georgia, serif",
    },

    cover: "/images/works/haru-africa/cover.jpg",
    gallery: [
      "/images/works/haru-africa/01.jpg",
      "/images/works/haru-africa/02.jpg",
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
      background: "#EAEAEA",
      foreground: "#171717",
      accent: "#262626",
      secondary: "#9CA3AF",
      displayFont: "Georgia, serif",
    },

    cover: "/images/works/vamp/cover.jpg",
    gallery: [
      "/images/works/vamp/01.jpg",
      "/images/works/vamp/02.jpg",
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
      background: "#E8F3F5",
      foreground: "#1F3042",
      accent: "#007589",
      secondary: "#EB6F38",
      displayFont: "Georgia, serif",
    },

    cover: "/images/works/bla/cover.jpg",
    gallery: [
      "/images/works/bla/01.jpg",
      "/images/works/bla/02.jpg",
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
      background: "#F6EDE9",
      foreground: "#392A2B",
      accent: "#A86668",
      secondary: "#D9B8A4",
      displayFont: "Georgia, serif",
    },

    cover: "/images/works/chums-beauty/cover.jpg",
    gallery: [
      "/images/works/chums-beauty/01.jpg",
      "/images/works/chums-beauty/02.jpg",
    ],
  },
];

