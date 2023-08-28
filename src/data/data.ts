import smartNest from "../assets/images/smartnest.png";
import recipe from "../assets/images/Recipes.png";
import realEstate from "../assets/images/real-estate/real-home.png";
import {
  //ChatterBox
  loginchat,
  addfriend,
  thumbnail,
  addfriend2,
  friendrequests,
  mobiledashboard,
  msgnot,
  recentchats,
  reply,
  requests,
  userdashboard,

  //Reas Estate Imgs
  realAbout,
  realHome,
  realListings,
  realLogin,
  realAdminLog,
  realAdminPan,
  realContactAdm,
  realemployeeadm,
  realInqform,
  realListingadm,
  realReg,
  realUseradm,
  realUserdash,

  //Smartnest
  admin1,
  favorites,
  forum,
  forumprofile,
  home,
  login,
  mercadopago2,
  news,
  shop,
  shopcart,
  smartnestprof,

  // Technologies
  angular,
  next,
  apollo,
  redis,
  css,
  django2,
  auth0,
  django,
  express,
  graphql,
  mongo,
  node,
  postgre,
  python,
  react,
  redux,
  typescript,
  bootstrap,
  tailwind,
  html,
  sass,
  mercadopago,
} from "../assets/index";
import { FaRegWindowMaximize } from "react-icons/fa";

/*
CATEGORIES         TYPES
Manufacturing      E-commerce websites
Healthcare         Business websites
Finance            Blogging websites
Education          News websites
Technology         Social media websites
Transportation     Educational websites
Hospitality        Portfolio websites 
*/

const portfolioData = [
  {
    title: "ChatterBox",
    thumbnail: thumbnail,
    badge: "New",
    description:
      "In this full-stack real-time chat application, I have utilized my skills in NextJS 13, Upstash Redis database, React for the user interface, and TypeScript to create a performant and responsive application. The app features an instant messaging system that leverages the speed of Upstash Redis for quick real-time messaging. Additionally, I have implemented a full friendship system that allows users to add, accept or deny friends. The UI of the app is built with TailwindCSS, and sensitive routes are protected for enhanced security. Moreover, the app also offers Google Authentication for a seamless login experience. Overall, my contribution as the developer has resulted in a fully functional chat application that can be deployed to the web and used by actual users.",
    alt: "photo of the project",
    type: "Social Media Website",

    category: "Chatting Platform",
    video: "https://realtime-chat-nextjs.vercel.app/login",
    link: "/portfolio",
    repo: "https://github.com/Yeraldinnesan/realtime-chat-nextjs",
    hashlink: "chatterbox",
    stack: [next, react, redis, tailwind, typescript],
    slide: [
      loginchat,
      userdashboard,
      addfriend,
      addfriend2,
      requests,
      friendrequests,
      mobiledashboard,
      msgnot,
      recentchats,
      reply,
    ],
  },
  {
    title: "Real Estate App",
    thumbnail: realEstate,
    badge: "New",
    description:
      "This project is an application developed using Python, Django, PostgreSQL and Bootstrap. It features a complete adminPanel with full CRUD of properties, employees (realtors) and Users, functionalities such as setting employee(s) of the month, manage contacts and recent activities panel, in the main application there are features such as keyword search and filtering by state, city, price or number of bedrooms and bathrooms. It also has a contact form auto-filled with a logged in user's details and a functionality to prevent users from submitting multiple inquiries for the same property, a user Dashboard with a list of all inquiries made, authentication and mailing system that sends an inquiry mail to the adminPanel and the realtor's email.",
    alt: "photo of the project",
    type: "Business Website",

    category: "Real Estate Website",
    video: "",
    link: "/portfolio",
    repo: "https://github.com/Yeraldinnesan/realter_project",
    hashlink: "realestate",
    stack: [python, django2, postgre, bootstrap, sass, css, html],
    slide: [
      realHome,
      realAbout,
      realListings,
      realInqform,
      realReg,
      realLogin,
      realUserdash,
      realAdminLog,
      realAdminPan,
      realContactAdm,
      realemployeeadm,
      realListingadm,
      realUseradm,
    ],
  },
  {
    title: "SmartNest",
    thumbnail: smartNest,
    badge: "New",
    description:
      'An e-commerce application for a SmartHome project called "SMARTNEST" that involved the use of various technologies such as. React, Typescript, Mongoose, MongoDB and Atlas, Express, Redux, and Node.js. The application features a user account system validated through Google, and the integration of a payment gateway such as MercadoPago API for purchasing products, along with rating and reviewing system. Additionally, there is a news section that consumes a technology API. A user forum, that came along with the idea of providing the user the chance of participate and interact with the community, this forum features a full CRUD functionality that allows users to create, update, and delete their profiles, comments, and posts, as well as like and filter posts by categories. The application also includes a full CRUD admin panel that gives total control over products, users, categories, sales, and forum posts, including soft deletion and statistical graphs displaying recent sales and real-time counts of products and users.',
    alt: "photo of the project",
    category: "Home Tech",

    type: "e-Comerce & Blogging",
    link: "/portfolio",
    repo: "https://github.com/Yeraldinnesan/PF-Henry-SmartNest",

    hashlink: "smartnest",
    video: "https://www.youtube.com/watch?v=FXYsDJrtcBY&t=1s",

    stack: [
      react,
      redux,
      typescript,
      express,
      mongo,
      css,
      sass,
      auth0,
      mercadopago,
    ],
    slide: [
      home,
      shop,
      news,
      login,
      shopcart,
      mercadopago2,
      smartnestprof,
      favorites,
      forum,
      forumprofile,
      admin1,
    ],
  },
  {
    title: "Recipe SPA",
    thumbnail: recipe,
    badge: "",
    description:
      "single-page application using the PERN stack and consuming the Spoonacular.com/food-api API. recipes API, It offers features such as full CRUD, name search, filtering by diet type, alphabetical and HealthScore sorting. It also has a JavaScript-controlled form with validations for creating and managing recipes. The app was built using React, Redux, pure CSS, JavaScript, Node.js, Express, PostgreSQL, and Sequelize.",
    alt: "photo of the project",
    type: "Single Page Application",
    category: "Healthcare and Alimentation",
    link: "/portfolio",
    repo: "https://github.com/Yeraldinnesan/PI-Food",

    hashlink: "recipe",
    stack: [react, express, redux, postgre, css],
    slide: [],
  },
];

const certificates = [
  {
    title: "Full-Stack Developer",
    certLink:
      "https://certificates.soyhenry.com/new-cert?id=e00e612ab1f12ac4bbb2ec66900ca8d9686d66bd47d614ee88333e733c0f2fb1",
  },
  {
    title: "EF SET English Certificate",
    certLink: "https://www.efset.org/cert/dP8652",
  },
  {
    title: "JavaScript Framework Angular",
    certLink:
      "https://www.coursera.org/account/accomplishments/certificate/95VPWWYLBFPG",
  },
  {
    title: "Foundations of UX Design",
    certLink:
      "https://www.coursera.org/account/accomplishments/certificate/FDMMNJKSMBXV",
  },
];

const servicesData = [
  {
    title: "⚽🏀🏐 Recuperación de instalaciones del polideportivo",

    description: `Como candidato al Concejo Municipal de Bello, uno de mis objetivos es revitalizar nuestro querido polideportivo y restaurar el orgullo de nuestra comunidad. Es inaceptable que nuestras instalaciones deportivas se encuentren en un estado de abandono, como se evidencia en los baños públicos descuidados, deteriorados y en condiciones insalubridad. Trabajaré incansablemente para obtener los recursos necesarios a nivel municipal, departamental y nacional, en colaboración con nuestra Diputada, para llevar a cabo una renovación completa que transforme el polideportivo en un vibrante centro comunitario. Al revitalizar este espacio, no solo generaremos empleo para los Bellanitas, sino que también atraeremos eventos significativos que impulsarán nuestra economía y fortalecerán nuestro tejido social.

      Mi visión es convertir nuestro polideportivo en un símbolo de unidad y prosperidad para Bellanitas. A través del deporte, la recreación y la participación comunitaria, podemos construir un futuro donde el orgullo y la vitalidad vuelvan a definir nuestra identidad local. Les invito a unirse a esta causa, a creer en la posibilidad del cambio y a confiar en mi compromiso de trabajar incansablemente por el bienestar de todos los ciudadanos de Bellanitas.
      `,
  },
  {
    title: "🏬🏥 Fortaleciendo la Infraestructura de Salud",

    description:
      "Nuestra comunidad merece una infraestructura de salud de primer nivel. Esto implica la construcción y mejora de centros de salud locales, la actualización de equipos médicos obsoletos y la gestión eficaz de recursos a nivel departamental y nacional. Trabajemos juntos para elevar nuestro único hospital municipal al menos al nivel 2, garantizando un acceso óptimo y adecuado a la atención médica para todos nosotros. Esta propuesta se centra en mejorar nuestras instalaciones de salud para el bienestar de la comunidad.",
  },
  {
    title: "👨🏽‍⚕️👩🏻‍⚕️ Inversión en Personal Médico de Excelencia",

    description:
      "Sabemos que un sistema de atención médica sólido depende en gran medida de tener a los profesionales adecuados en su lugar. Es por eso que mi compromiso número uno es la contratación de médicos y especialistas altamente calificados, respaldados por una capacitación continua.",
  },
  {
    title: "🩺 👨‍👩‍👦‍👦 Priorizando la Atención Preventiva",

    description:
      "Enfoquémonos en prevenir antes de curar. Esto significa implementar campañas educativas y llevar a cabo jornadas de salud en nuestras escuelas y comunidades locales. Juntos, podemos crear un entorno donde la prevención y la educación sean cruciales para el bienestar de todos. Esta propuesta se basa en la idea de que la atención médica comienza con el conocimiento y la prevención, y estamos comprometidos a trabajar juntos para lograrlo.",
  },
  {
    title: "📲🦾 Modernización para una Atención Eficiente",

    description:
      "Avanzar hacia la era digital es esencial para una atención médica eficiente. Proponemos la implementación de registros electrónicos y una plataforma en línea para citas médicas. Esto simplificará los procesos y mejorará el acceso a la atención médica, brindando un servicio más rápido y conveniente para todos. Nuestra visión es una atención médica moderna y eficaz que se adapte a las necesidades de nuestra comunidad. Esta propuesta se enfoca en utilizar la tecnología para mejorar la atención médica que todos merecemos.",
  },
  {
    title: "📚✋ Educación y Salud de la Mano",

    description:
      "Fortaleceremos la colaboración entre el sector educativo y el de la salud mediante convenios con instituciones educativas locales y la creación de programas de pasantías. Esta sinergia beneficiará a ambas áreas y, en última instancia, a nuestra comunidad. Al conectar la educación y la salud, estamos asegurando una base sólida para un futuro más saludable y educado para todos. Esta propuesta se basa en la creencia de que la colaboración es clave para el progreso y la prosperidad de nuestra comunidad.",
  },
  {
    title: "🤝🏘️ Construyendo Salud Juntos",

    description:
      "Fomentaremos la participación activa de la comunidad mediante la creación de comités de salud en cada barrio y la organización de reuniones regulares. Creemos firmemente que la voz de la comunidad es esencial para dar forma a nuestras políticas de salud. Al trabajar juntos en comités de salud locales, podemos garantizar que nuestras necesidades y preocupaciones sean escuchadas y atendidas de manera efectiva. Esta propuesta se basa en la participación comunitaria como piedra angular para un sistema de salud que refleje las inquietudes de todos nosotros.",
  },
  {
    title: "⛪👥 Uniendo Esfuerzos para una Comunidad más Fuerte",

    description:
      "La colaboración entre la Iglesia Católica y la administración municipal en Bello es una asociación invaluable que ofrece una amplia gama de beneficios para nuestra comunidad. A través de esta colaboración, hemos visto apoyo social, fortalecimiento de la educación y la atención médica, cohesión comunitaria, preservación de nuestra rica herencia cultural y desarrollo de programas sociales esenciales. Además, esta alianza nos brinda la capacidad de responder eficazmente a crisis y fomenta el voluntariado, mejorando significativamente la calidad de vida de todos los residentes y abordando nuestros desafíos de manera conjunta. \n\n La clave de esta colaboración exitosa radica en la creación de un ambiente colaborativo donde la Iglesia, la administración municipal y nuestros jóvenes trabajen juntos. Juntos, identificaremos necesidades locales y ejecutaremos proyectos que beneficien tanto a la juventud como a la comunidad en general. Esta propuesta se basa en el poder de unir esfuerzos para construir una comunidad más fuerte y unida.",
  },
  {
    title: "♻️💼 Generando Empleo Joven y Sostenible a Través del Reciclaje",

    description:
      "Proponemos la creación de un programa de generación de empleo en nuestro barrio, enfocado en el reciclaje y dirigido por jóvenes locales. Esta iniciativa establecerá una cooperativa o proyecto comunitario donde los jóvenes participarán en la recolección, clasificación y venta de materiales reciclables. Buscaremos financiamiento y capacitación, colaborando con el gobierno y actores locales. A medida que crezca, no solo generará empleo sostenible, sino que también contribuirá a mejorar nuestro entorno y tendrá un impacto positivo en el medio ambiente. \n\n Este es un paso crucial hacia el fortalecimiento de nuestra comunidad y un futuro más sostenible y próspero para todos.",
  },
];

const memoStack = [
  "https://icongr.am/devicon/mongodb-original-wordmark.svg?size=50&color=currentColor",
  "https://icongr.am/devicon/typescript-plain.svg?size=50&color=currentColor",
  "https://icongr.am/devicon/react-original.svg?size=50&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=50&color=currentColor",
  "https://icongr.am/devicon/postgresql-original.svg?size=50&color=currentColor",
  "https://icongr.am/devicon/nodejs-original.svg?size=50&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=50&color=currentColor",
  "https://icongr.am/devicon/html5-original.svg?size=50&color=currentColor",
  "https://icongr.am/devicon/git-original.svg?size=50&color=currentColor",
  "https://icongr.am/devicon/angularjs-original.svg?size=50&color=currentColor",
  "https://icongr.am/devicon/css3-original.svg?size=50&color=currentColor",
  "https://icongr.am/devicon/express-original-wordmark.svg?size=50&color=003d23",
  "https://icongr.am/devicon/django-original.svg?size=50&color=currentColor",
  "https://icongr.am/devicon/sequelize-original.svg?size=50&color=currentColor",
]
  .flatMap((el) => [`a|${el}`, `b|${el}`])
  .sort(() => Math.random() - 0.5);

export { servicesData, portfolioData, memoStack, certificates };
