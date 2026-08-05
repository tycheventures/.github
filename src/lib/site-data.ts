export const SITE = "https://tycheventures.com";

type NavChild = { label: string; href: string; external?: boolean };
type NavItem = { label: string; href: string; internal?: boolean; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: "About", href: "/about", internal: true },
  { label: "Work", href: `${SITE}/work/` },
  {
    label: "Services",
    href: `${SITE}/services/`,
    children: [
      { label: "Learning management system", href: `${SITE}/services/learning-management-system/` },
      { label: "E-commerce development", href: `${SITE}/services/e-commerce-development/` },
      { label: "Job Portal development", href: `${SITE}/services/job-portal-development/` },
      { label: "Graphics Design services", href: `${SITE}/services/graphics-design-services/` },
      {
        label: "Website Designing and Development",
        href: `${SITE}/services/website-designing-and-development/`,
      },
      { label: "Search Engine Optimization", href: `${SITE}/services/search-engine-optimization/` },
      { label: "Digital Marketing Services", href: `${SITE}/services/digital-marketing-services/` },
      {
        label: "Annual Maintenance Contract",
        href: `${SITE}/services/annual-maintenance-contract/`,
      },
    ],
  },
  {
    label: "Products",
    href: `${SITE}/services/`,
    children: [
      { label: "Team WPGenius", href: "http://wpgenius.in/", external: true },
      { label: "FenixHost", href: "https://shop.fenixhost.in/", external: true },
      { label: "Plugins marketplace", href: "https://plugins.gallery/", external: true },
      { label: "Themes Marketplace", href: "https://themes.expert/", external: true },
    ],
  },
  { label: "Blog", href: `${SITE}/blog/` },
  { label: "Careers", href: `${SITE}/careers/` },
  { label: "Contact", href: `${SITE}/contact/` },
];

export const HIGHLIGHTS = [
  {
    icon: "thumbs-up",
    title: "100 % Customer Satisfaction",
    text: "A Happy customer is our motto. We give our best to deliver 100 % customer satisfaction",
  },
  {
    icon: "rupee",
    title: "Reasonable Pricing",
    text: "We have designed a reasonable pricing structure suitable for startups, mid-level business and large companies without compromising the work quality",
  },
  {
    icon: "star",
    title: "Quality Solutions",
    text: "Our streamlined process and experienced team members deliver a high-quality service to our customers.",
  },
  {
    icon: "team",
    title: "Skilled and Experienced Team",
    text: "Our experienced and well-versed team always focuses on the result-oriented delivery of digital solutions.",
  },
];

export const SERVICES = [
  {
    icon: "/img/Website-Design-1.png",
    title: "Website Designing and Development",
    text: "Are you looking for website designing services? Don't worry! Tyche Ventures offers you the best in class website design and development at affordable price. The right website will influence the user to take action.",
    href: `${SITE}/services/website-designing-and-development/`,
  },
  {
    icon: "/img/Lerning-Management-System.png",
    title: "Learning Management System",
    text: "Get a seamless learning experience with our fully customized LMS to fulfill your organization's learning needs. Tyche Ventures is a leading Learning management system provider for various educational institutes.",
    href: `${SITE}/services/learning-management-system/`,
  },
  {
    icon: "/img/E-commerce-new.png",
    title: "E-Commerce Development",
    text: "Want to grow your business online? Tyche Ventures provide you exclusive, customized online shopping website to attract many customers. We offer top-notch E-commerce development services with a user-friendly experience.",
    href: `${SITE}/services/e-commerce-development/`,
  },
  {
    icon: "/img/sutcase.png",
    title: "Job Portal Development",
    text: "Are you searching for a ready to use recruitment website for your brand name? Tyche Ventures develops an easy and user-friendly job portal for recruiters and job seekers. We offer a complete end to end job portal with an advanced search facility.",
    href: `${SITE}/services/job-portal-development/`,
  },
  {
    icon: "/img/SEO.png",
    title: "Search Engine Optimization",
    text: "Tyche Ventures helps you to grow your brand digitally. Our unique strategies and experienced team offer the best SEO services to stand out in this competitive world. We provide result-driven Search engine optimization services.",
    href: `${SITE}/services/search-engine-optimization/`,
  },
  {
    icon: "/img/digital-marketing.png",
    title: "Digital Marketing Services",
    text: "Call us now to get the best Digital Marketing solutions. Tyche Ventures boosts your digital presence in the market with advanced SMM, SEO, Content Marketing services. We believe in creativity, analytics, and performance in digital marketing.",
    href: `${SITE}/services/digital-marketing-services/`,
  },
];

export const PROJECTS = [
  { img: "/img/Luxe-Luck.jpg", title: "Luxe Luck", href: `${SITE}/work/luxe-luck/` },
  {
    img: "/img/Chanakya-Mandal-Pariwar.jpg",
    title: "Chanakya Mandal Pariwar",
    href: `${SITE}/work/chanakya-mandal-pariwar/`,
  },
  {
    img: "/img/Mahendra_Jewellers.jpg",
    title: "Mahendra Jewellers",
    href: `${SITE}/work/mahendra-jewellers/`,
  },
  { img: "/img/Top-Somali-Jobs.jpg", title: "Top Somali Jobs", href: `${SITE}/work/top-somali-jobs/` },
  {
    img: "/img/Dietitian-Sheetal.jpg",
    title: "Dietitian Sheetal",
    href: `${SITE}/work/dietitian-sheetal/`,
  },
  { img: "/img/Hureo.jpg", title: "Hureo", href: `${SITE}/work/hureo/` },
];

export const COUNTERS = [
  { value: 200, suffix: "+", label: "Jobs Completed" },
  { value: 150, suffix: "+", label: "Clients" },
  { value: 100, suffix: "%", label: "Satisfaction" },
  { value: 7, suffix: "", label: "Years Of Experience" },
];

export const CLIENTS = [
  { img: "/img/Untitled-1.png", name: "Luxe Luck", href: "https://luxeluck.com/" },
  { img: "/img/mahindra.png", name: "Mahendra Jewellers", href: "http://mahendrajewellers.com/" },
  { img: "/img/diet.png", name: "Dietitian Sheetal", href: "https://dietitiansheetal.com/" },
  { img: "/img/logo-hureo-2x.png", name: "Hureo", href: "https://hureo.com/" },
  { img: "/img/chanaky.png", name: "Chanakya Mandal", href: "http://chanakyamandal.org/" },
  { img: "/img/topsomali.png", name: "topsomalijobs", href: "http://topsomalijobs.so/" },
  { img: "/img/logo-2.png", name: "Prajakta Engineers", href: "https://prajaktaengineers.com/" },
  { img: "/img/bridger.png", name: "Bridgercapcorp", href: "http://bridgercapcorp.com/" },
  { img: "/img/mc-logo-bigger-new.png", name: "Floriankappe", href: "http://floriankappe.com/" },
  { img: "/img/aler2t.png", name: "Alert Services", href: "http://alertservices.in/" },
  { img: "/img/cubiodesign-logo.png", name: "Jana Novak", href: "http://cubiodesign.com/about/" },
];

export const TESTIMONIALS = [
  {
    img: "/img/anas-mokayed-120-85x85.jpg",
    quote:
      "I highly recommend working with this company. They helped me a lot with my business and offered a smart solutions.",
    name: "Anas Mokayed",
    company: "NEXT GATES AB",
    href: "https://nextgates.se/education/",
  },
  {
    img: "/img/georg-mayer-85x85.jpg",
    quote:
      "Makarand Mane and Tyche Ventures helped us realize our multi-lingual corporate website in WordPress in a matter of weeks. They worked closely with our designer and thus saved us a lot of management bandwidth. The result was exactly what we were looking for. The team was always helpful and available when we needed quick minor adjustments and provided great suggestions on how we could manage the site on our own in the future (e.g., how to update and translate content). We would be happy to work with them again and highly recommend them.",
    name: "Georg Meyer",
    company: "Preston Meyer Group",
    href: "https://pmgroup.ch/",
  },
  {
    img: "/img/Vanessa-Vyapooree-85x85.png",
    quote:
      "I have worked with Makarand and his team for two years now, or maybe slightly longer and I can honestly say, there isn't another developer I would work with. He is integrated as part of our team and despite as busy as they are, he always makes us feel like we are the most important client. Nothing is too much trouble and the availability of the team is great. Time and cost efficient, I would not hesitate to recommend this team to anyone - and I do often!",
    name: "Vanessa Vyapooree",
    company: "Luxe Luck",
    href: "https://luxeluck.com/",
  },
  {
    img: "/img/yogesh-babar-2-85x85.jpg",
    quote:
      "Tyche built my website. Their technical skills are outstanding. Fall in love with their team. Very professional guys. Its like share your idea with them and they will take care of the rest of the project. Makarand the firm owner takes regular follow-ups, listen to your queries and addresses them promptly. I highly recommend Tyche Ventures.",
    name: "Yogesh Babar",
    company: "YogeshBabar420.com",
    href: "http://yogeshbabar420.com/",
  },
  {
    img: "/img/Varsha-Patil-85x85.jpg",
    quote:
      "Tyche Ventures works professionally, quickly and cleanly. They are very friendly and reliable. The cooperation was good and was very successful.",
    name: "Varsha Patil",
    company: "Sammohan Kendra",
    href: null,
  },
  {
    img: "/img/DietitianSheetal_Logo_03-85x85.jpg",
    quote:
      "They helped me in every way to develop a professional website which showcases my services very well. They are a very creative and co-operative team. I would recommend them to my friends.",
    name: "Ms. Sheetal Tambe",
    company: "Dietitian Sheetal",
    href: "http://dietitiansheetal.com/",
  },
  {
    img: "/img/vinayak-mudgal-85x85.jpg",
    quote: "Highly recommended. Dedicated team with an exceptional domain knowledge!",
    name: "Vinayak Mudgal",
    company: "eAdeas",
    href: null,
  },
  {
    img: "/img/Leonel-Figueredo-85x85.png",
    quote:
      "I have been working with Makarand for over four years, he has built several custom WP websites for me and my clients. We are very happy with his work and continue to select him as our top WP custom design developer.",
    name: "Leonel Figueredo",
    company: "Marin Web Pro",
    href: "http://marinwebpro.com/",
  },
  {
    img: "/img/Dinesh-Chandak.jpg",
    quote:
      "The technical support of Tyche Ventures is very quickly. Makarand solve all the queries instantly, his technical skills are outstanding. He is very responsible person to his work. I would like to recommend him and his company to all.",
    name: "Dinesh Chandak",
    company: null,
    href: null,
  },
  {
    img: "/img/Siddharth-Dharmadhikari.jpg",
    quote:
      "Mr. Makarand Mane built our website www.chanakyamandal.org. He is a very efficient person & always delivers on his promises. I would definitely recommend his company to all.",
    name: "Siddharth Dharmadhikari",
    company: "Chanakya Manadal",
    href: "http://chanakyamandal.org/",
  },
  {
    img: "/img/Abdirisak-Mohamed.jpg",
    quote:
      "Tyche Ventures work is efficient and effective. Their relational yet professional approach has been so valuable. The advice and expertise they have contributed with the establishment of our company is so valuable and unforgettable, everything is running so good, the design and SEO is outstanding work and I do really appreciate your work, thank you.",
    name: "Abdirisak Mohamed",
    company: null,
    href: null,
  },
  {
    img: "/img/Alexander-Weitnauer.jpg",
    quote: "Aweseome work! Solves problems quickly and efficiently.",
    name: "Alexander Weitnauer",
    company: "MD Ergotopia Portal",
    href: null,
  },
  {
    img: "/img/Ajay-Domun.jpg",
    quote:
      "I run a legal project management and a fine art company based in London and have been using Mak for 7 years now. He is very diligent and prompt. More importantly, I do not experience the risks, uncertainties and unreliability that I have experienced too often when dealing with other Indian companies which lack accountability after taking one's money. He is very reliable and experienced in his field; with him, business is safe and I can vouch for him.",
    name: "Ajay Domun",
    company: "MD Magna Carta Ltd and MD Florian Kappe LLP",
    href: null,
  },
  {
    img: "/img/Carina-Kappe.jpg",
    quote: "Thank you for your help and your trusted. You die a Great Job !",
    name: "Carina Kappe",
    company: "MD Florian Kappe LLP",
    href: "http://floriankappe.com/",
  },
  {
    img: "/img/Jana-Novak.jpg",
    quote:
      "Working with Makarand was always a pleasure. Compared to other developers he is very detail-oriented, friendly, fast and his command of English is good. I can only recommend him for all kinds of web projects!",
    name: "Jana Novak",
    company: "Cubio Design",
    href: "http://cubiodesign.com/about/",
  },
];


export const FOOTER_SERVICES = [
  { label: "Website Designing", href: `${SITE}/service/website-designing/` },
  { label: "Dynamic Website Development", href: `${SITE}/service/dynamic-website-development/` },
  { label: "Domain and Hosting", href: `${SITE}/service/domain-and-hosting/` },
  { label: "Graphics Design", href: `${SITE}/service/graphics-design/` },
  { label: "SEO", href: `${SITE}/service/seo/` },
  { label: "Digital Marketing", href: `${SITE}/service/digital-marketing/` },
  { label: "Annual Maintenance Contract", href: `${SITE}/services/annual-maintenance-contract/` },
];

export const FOOTER_LINKS = [
  { label: "About", href: "/about", internal: true },
  { label: "Portfolio", href: `${SITE}/work/` },
  { label: "Services", href: `${SITE}/services/` },
  { label: "Blog", href: `${SITE}/blog/` },
  { label: "We Are Hiring", href: `${SITE}/careers/` },
  { label: "Privacy Policy", href: `${SITE}/privacy-policy/` },
  { label: "Contact", href: `${SITE}/contact/` },
];

export const SOCIALS = [
  { label: "WhatsApp", href: "https://wa.me/919225131588" },
  { label: "Skype", href: "skype:tycheventures?chat" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/tycheventures" },
  { label: "Facebook", href: "https://www.facebook.com/tycheventures" },
  { label: "Twitter", href: "https://twitter.com/tycheventures" },
  { label: "GitHub", href: "https://github.com/tycheventures" },
  { label: "WordPress", href: "https://profiles.wordpress.org/tycheventures/" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCTLzu8wfTooan6qBjE7Mffg" },
];
