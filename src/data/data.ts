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
  figma,
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
    title: "Estudios",
    certLink:
      `Mi recorrido educativo abarca importantes hitos que reflejan mi compromiso con el aprendizaje y el crecimiento personal. En 1997, culminé mi educación secundaria obteniendo el título de Bachiller en el prestigioso Colegio Carmelitano. Este logro marcó el inicio de mi búsqueda de conocimiento y preparación.

      En el año 2004, graduarme como Técnico Profesional en Enfermería en el Politécnico Marco Fidel Suárez no solo consolidó mi pasión por la atención médica, sino también reafirmó mi compromiso con el bienestar de los demás. Esta etapa de formación fue un pilar fundamental en mi camino profesional.
      
      Mi deseo constante de adquirir nuevas habilidades me llevó a obtener el título de Tecnólogo en Seguridad y Salud en el Trabajo del SENA en 2018. Esta formación amplió mi perspectiva hacia la protección y el bienestar en distintos contextos, consolidando mi compromiso con la seguridad en el ámbito laboral.
      
      Cada uno de estos logros representa mi dedicación y esfuerzo por crecer en el conocimiento y la práctica en campos que considero esenciales. A través de mi recorrido educativo, he construido una base sólida para contribuir de manera significativa a mi comunidad y al bienestar general.
      `,
  },
  {
    title: "Trabajo",
    certLink: `Desde mi graduación como Técnico Profesional en Enfermería, mi trayectoria laboral ha sido una travesía en la que he tenido el privilegio de trabajar en diversos hospitales y clínicas de renombre. Cada experiencia en estos entornos de atención médica ha sido una oportunidad invaluable para expandir mis conocimientos y habilidades. Mi recorrido me ha brindado una perspectiva enriquecedora sobre la práctica de la enfermería en diferentes contextos.

    A lo largo de los años, he contribuido en hospitales y clínicas reconocidas, lo que me ha permitido desarrollar una base sólida en la atención a pacientes en diversas condiciones. Esta diversidad de entornos me ha desafiado y me ha capacitado para adaptarme a las necesidades cambiantes de los pacientes y los equipos médicos. Cada lugar en el que he trabajado ha sumado un capítulo a mi historia profesional, fortaleciendo mi compromiso con el cuidado de la salud y reafirmando mi pasión por la enfermería. Estoy emocionado por seguir creciendo en esta apasionante carrera y aportar mi experiencia en beneficio de la atención médica y de aquellos a quienes servimos.
    `,
  },
  {
    title: "Servicio a la iglesia católica ",
    certLink:
      `Desde temprana edad, mi vínculo con la Iglesia Católica fue innegable y profundo. En 1992, esta conexión me llevó a unirse al grupo de acólitos en la Parroquia del Rosario, un punto de partida en mi camino espiritual. A lo largo del tiempo, cultivé valores y amor por la iglesia, lo que me impulsó a unirme al grupo juvenil y, posteriormente, al grupo de catequistas, donde tuve la oportunidad de compartir mi fe con otros.

      Mi compromiso continuó creciendo, y encontré mi lugar en el grupo de logística, una comunidad dedicada a trabajar en diversas actividades y celebraciones parroquiales, como la Semana Santa, las fiestas patronales y la Navidad. A través de esta labor, contribuí en la creación de elementos como el monumento y el pesebre, entre otros, para enriquecer estas ocasiones significativas. Este compromiso y pasión por la Iglesia persisten, y ahora, desde la Parroquia Nuestra Señora de Chiquinquirá, sigo con la misma entrega y cariño por nuestra fe.
      
      Mi historia en la Iglesia es un reflejo de mi profundo amor y devoción, una travesía marcada por la participación activa y el deseo de contribuir al fortalecimiento de nuestra comunidad religiosa.
      `,
  },
  // {
  //   title: "Foundations of UX Design",
  //   certLink:
  //     "https://www.coursera.org/account/accomplishments/certificate/FDMMNJKSMBXV",
  // },
];

const servicesData = [
  {
    title: "⚽ 1- Recuperación de instalaciones del polideportivo",

    description: `Como candidato al Concejo Municipal de Bello, uno de mis objetivos es revitalizar
    nuestro querido polideportivo y restaurar el orgullo de nuestra comunidad. Es inaceptable que nuestras instalaciones deportivas se encuentren en un estado de abandono, como se evidencia en los baños públicos descuidados, deteriorados y en condiciones insalubridad. Trabajaré incansablemente para obtener los recursos necesarios a nivel municipal, departamental y nacional, para llevar a cabo una renovación completa que transforme el polideportivo en un vibrante centro comunitario. Al revitalizar este espacio, no solo generaremos empleo para los Bellanitas, sino que también atraeremos eventos significativos que impulsarán nuestra economía y fortalecerán nuestro tejido social.

      Mi visión es convertir nuestro polideportivo en un símbolo de unidad y prosperidad para Bellanitas. A través del deporte, la recreación y la participación comunitaria, podemos construir un futuro donde el orgullo y la vitalidad vuelvan a definir nuestra identidad local. Les invito a unirse a esta causa, a creer en la posibilidad del cambio y a confiar en mi compromiso de trabajar incansablemente por el bienestar de todos los ciudadanos de Bellanitas.
      `,
  },
  {
    title: "💼 2- Generación de empleo",

    description:
      `La implementación de un programa de reciclaje en los barrios constituye una iniciativa de gran relevancia que promueve tanto la sostenibilidad ambiental como el empoderamiento de la comunidad. La colaboración entre los jóvenes de cada comuna, barrio o cuadra para llevar a cabo este programa no solo fomentará la conciencia ecológica, sino también valores esenciales como la responsabilidad, el trabajo en equipo y el emprendimiento. La administración, en su rol de veedora y garante, desempeñaría un papel crucial al brindar su apoyo y supervisión, asegurando que el programa se desarrolle de manera eficiente y en línea con los intereses y necesidades de la comunidad.
      El acompañamiento constante de la administración, a través de capacitaciones y formación en el tema de reciclaje, añade un elemento de desarrollo personal y educativo. Esto no solo fortalecería las habilidades de los jóvenes involucrados en el programa, sino que también podría abrir oportunidades para futuros emprendimientos y empleos relacionados con la gestión sostenible de recursos. En última instancia, este programa no solo contribuiría a la mejora del entorno, sino que también sentaría las bases para una comunidad más consciente y activa en la construcción de un futuro más sostenible y próspero.
      `,
  },
  {
    title: "🧓 3- Adulto mayor",

    description:
      `Implementar un programa mensual de chequeos de salud para los grupos de adultos mayores, que incluya mediciones de presión arterial y pruebas de dextrometría, entre otros, sería una iniciativa beneficiosa para el bienestar y la atención médica de este segmento de la población. Estas revisiones regulares podrían ayudar a detectar posibles problemas de salud de manera temprana y permitir que se tomen medidas preventivas o de atención adecuadas. Además, estas actividades contribuirían a la promoción de la salud y al cuidado integral de los adultos mayores, mejorando su calidad de vida en la comunidad.`,
  },
  {
    title: "🩺 4- Salud",

    description:
      `Gestionar ante las instancias de la asamblea, la gobernación y el gobierno nacional una intervención en el Hospital Municipal Rosalpi es una medida esencial para elevar su nivel de atención médica. A través de esta gestión, se busca la adecuación de sus instalaciones, la provisión de equipos especializados y la asignación de personal altamente calificado. Este esfuerzo tiene como objetivo transformar el hospital en una institución de al menos segundo, e incluso tercer nivel de atención, lo que permitiría brindar servicios médicos más completos y de mayor calidad a la comunidad. Con esta intervención, se busca optimizar la infraestructura y el equipamiento, así como garantizar la capacitación del personal, con el propósito de elevar los estándares de atención médica y responder de manera más eficiente a las necesidades de salud de la población local.`,
  },
  // {
  //   title: "🌟 E-commerce development",

  //   description:
  //     " Build and manage online stores that help businesses sell their products and services online, from setting up a store to optimizing it for maximum sales.",
  // },
  // {
  //   title: "🌟 SEO optimization",

  //   description:
  //     " Improve a website's visibility and search engine ranking through keyword research, on-page optimization, and backlink building.",
  // },
  // {
  //   title: "🌟 Branding",

  //   description:
  //     " Develop a brand identity that represents a business's values, personality, and goals, helping them stand out in a crowded marketplace.",
  // },
  // {
  //   title: "🌟 Social media management",

  //   description:
  //     "help businesses manage their social media presence by creating engaging content, optimizing posts for maximum reach, and analyzing results to improve performance.",
  // },
  // {
  //   title: "🌟 Web design",

  //   description:
  //     "Create beautiful, user-friendly websites that help businesses and individuals showcase their products and services online.",
  // },
];

const memoStack = [
angular,
  next,
  figma,
  apollo,
  redis,
  css,
  django2,
  auth0,
  django,
  express,
  graphql,
  mongo,
  postgre,
  python,
]
  .flatMap((el) => [`a|${el}`, `b|${el}`])
  .sort(() => Math.random() - 0.5);

export { servicesData, portfolioData, memoStack, certificates };
