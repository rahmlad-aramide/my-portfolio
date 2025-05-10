import { StaticImageData } from 'next/image';
import langueageai from '@/app/assets/framed/Language-AI.webp';
import wapp from '@/app/assets/framed/Wapp.webp';
import ridot from '@/app/assets/framed/Ridot.webp';
import adorn from '@/app/assets/framed/Adorn.webp';
import yieldvest from '@/app/assets/images/projects/yieldvest-overview.webp';
import reciplorer from '@/app/assets/framed/Reciplorer.webp';
import scissor from '@/app/assets/framed/Scissors.webp';
import aofounda from '@/app/assets/framed/AO-Foundation.webp';
import devfest from '@/app/assets/framed/Devfest-Mosho.webp';
import flutterbytes from '@/app/assets/framed/FlutterBytes.webp';
import hackade from '@/app/assets/framed/Hackade.webp';
import join from '@/app/assets/framed/Join.webp';
import nugapay from '@/app/assets/framed/Nugapay.webp';
import pvcpipe from '@/app/assets/framed/PVC-Pipe.webp';
import rainHackathon from '@/app/assets/framed/Rain-Hackathon.webp';
import rainSummit from '@/app/assets/framed/Rain-Summit.webp';
import treesoft from '@/app/assets/framed/Treesoft.webp';
import uverus from '@/app/assets/framed/Uverus.webp';

export const projectsData1 = [
    {
        name: "Language AI",
        description: "A web-based translation tool designed to provide accurate and efficient translations of texts and documents.",
        pageUrl: 'language-ai',
        projectUrl: 'https://languageai.vercel.app',
        image: langueageai,
        category: 'personal',
    },
    {
        name: "WAPP",
        description: "An advanced weather forecasting application with data visualization tools.",
        pageUrl: 'wapp',
        projectUrl: 'https://r-wapp.vercel.app/',
        image: wapp,
        category: 'personal',
    },
    {
        name: "Adorn",
        description: "A furniture products ordering website that eases the purchase of home & office furnitures.",
        pageUrl: 'adorn',
        projectUrl: 'https://adorn.netlify.app/',
        image: adorn,
        category: 'personal',
    },
    {
        name: "Ridot",
        description: "A software academy landing page website that includes their pricing and subscription information.",
        pageUrl: '',
        projectUrl: 'https://ridot.org',
        image: ridot,
        category: 'brands',
    },
    {
        name: "Hackade",
        description: "A software academy landing page website that includes their pricing and subscription information.",
        pageUrl: '',
        projectUrl: 'https://hackade.net',
        image: ridot,
        category: 'communities',
    },
    {
        name: "RAIN Hackathon",
        description: "A software academy landing page website that includes their pricing and subscription information.",
        pageUrl: '',
        projectUrl: 'https://hackathon.rainigeria.com/',
        image: ridot,
        category: 'communities',
    },
    {
        name: "RAIN Summit",
        description: "A software academy landing page website that includes their pricing and subscription information.",
        pageUrl: '',
        projectUrl: 'https://summit.rainigeria.com/',
        image: ridot,
        category: 'communities',
    },
    {
        name: "Flutterbytes Conf. '24",
        description: "A software academy landing page website that includes their pricing and subscription information.",
        pageUrl: '',
        projectUrl: 'https://www.flutterbytesconf.com/',
        image: ridot,
        category: 'communities',
    },
    {
        name: "Yieldvest",
        description: "A stock recommendation app for tracking, analyzing and recommending stocks through fundamental analysis to reduce investment risks.",
        pageUrl: '',
        projectUrl: '',
        image: yieldvest,
        category: 'internship',
    },
]
interface TProject {
    id?: number;
    name: string;
    description: string;
    slug: string;
    projectUrl: string;
    framedImage: string | StaticImageData;
    category: string;
    repo: string;
    languages: string[];
    image?: string;
    image2?: string;
    image3?: string;
    type?: string;
    status?: string;
    version?: string;
    detail?: string;
    challenge?: string;
    gains?: string;
    isFeatured?: boolean;
    isArchived?: boolean;
}
export const projectsData: TProject[] = [
  {
    id: 1,
    name: "Language AI",
    framedImage: langueageai,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715176691/portfolio/images/Projects/LanguageAI/Desktop_wmeyyc.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715199739/portfolio/images/Projects/LanguageAI/image2_wvv5mn.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715199738/portfolio/images/Projects/LanguageAI/image3_lb7prv.png",
    projectUrl: "https://languageai.vercel.app/",
    repo: "https://github.com/rahmlad-aramide/languageai",
    type: "Global Problem Solving",
    status: "Completed",
    version: "v.2 in progress",
    slug: "language-ai",
    description:
      "An advanced web-based translation tool designed to provide accurate and efficient translations of text across 130+ languages.",
    detail:
      "In a world increasingly driven by globalization, the ability to communicate across languages is more crucial than ever. However, many individuals and organizations still face significant challenges in accessing information due to language constraints. LanguageAI addresses this gap by utilizing the power of the Microsoft Azure translation model, a cutting-edge machine translation technology capable of translating text across 130+ languages with high accuracy.\n\nThe project aims to facilitate seamless communication for users who require quick translations of not only plain text but also complex documents. Recognizing the limitations of current translation tools that may not support extensive language options or handle document formats effectively, LanguageAI is being developed using Next.js to offer a robust, scalable, and user-friendly platform. Users will be able to easily upload text or documents, receive translations in their desired language, and even download the translated documents directly from the web interface. The initial implementation includes translation functionality for over 10 global languages, significantly enhancing the accessibility and reach of the project.",
    languages: [
      "NextJS",
      "TypeScript",
      "Tailwind CSS",
      "React Dropzone",
      "Microsoft Azure translation model",
      "Vercel",
    ],
    category: "personal",
    challenge:
      "One of the key hurdles I've encountered in the design and development phase of the LanguageAI project is identifying an effective and free document translation API that aligns with our ambitious goal to support document translation across a wide range of languages. The quality of translations, especially for various document formats, is critical for ensuring the tool's usefulness and reliability. While many APIs offer text translation, they often come with limitations in language variety, support for document formats, or usage restrictions that do not meet my needs. To address this challenge, I've extensively researched and tested various APIs, currently focusing on solutions compatible with the Microsoft Azure translation model. The search for an optimal API continues, aiming for a balance between comprehensive language support, accuracy, and cost-efficiency, ensuring LanguageAI can provide high-quality service without imposing fees on the users.",
    gains:
      "LanguageAI is designed to empower users by providing an accessible and efficient translation tool that supports translations across over 130 languages. This extensive language support enhances global accessibility, fostering understanding and collaboration among diverse populations. It's particularly beneficial in the educational sector, where students and educators can access a broader range of learning materials in various languages, promoting educational equity. For businesses, LanguageAI ensures operational efficiency by facilitating swift translations of documents and communications in multilingual environments, thus expanding market reach and driving growth. Furthermore, LanguageAI enriches cultural exchanges by allowing users to explore literature and documents in foreign languages, enhancing cultural awareness and appreciation.\n\nOn a personal level, developing LanguageAI has been immensely rewarding, enhancing my proficiency with advanced AI technologies such as the Microsoft Azure translation model and deepening my understanding of multilingual data processing. This project has significantly honed my skills in integrating complex machine learning models into practical applications, providing me with invaluable experience in navigating the challenges of AI-driven language translation. The technical skills and insights gained have prepared me for future projects in AI and language processing, marking a significant milestone in my career as a software developer.",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Reciplorer",
    framedImage: reciplorer,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1746913337/portfolio/images/Projects/Reciplorer/reciplorer2_enmjbg.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1746913336/portfolio/images/Projects/Reciplorer/reciplorer1_seql8k.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1746913337/portfolio/images/Projects/Reciplorer/reciplorer3_z682h3.png",
    projectUrl: "https://reciplorer.vercel.app/",
    repo: "https://github.com/rahmlad-aramide/reciplorer",
    type: "Global Problem Solving",
    status: "Completed (v.2 underway)",
    version: "v.2 in progress",
    slug: "reciplorer",
    description:
      "A recipe explorer web application providing access to several recipes with ingredients, step-by-step guides, and video tutorials.",
    detail:
      "Reciplorer is a web application designed to simplify and enhance the user's experience of discovering and managing recipes. Recognizing the need for a centralized platform where users can easily find cooking inspiration, access detailed recipe information, and even contribute their own culinary creations, Reciplorer offers a user-friendly interface with several key features. Users can browse a wide variety of recipes, view comprehensive lists of ingredients, follow clear step-by-step preparation instructions, and often find embedded video tutorials for visual guidance. The platform also includes robust search and filtering capabilities, allowing users to quickly find recipes based on keywords, ingredients, cuisine types, dietary restrictions, and more. Furthermore, registered users have the ability to add their own recipes to the collection, fostering a community of home cooks and recipe enthusiasts (coming soon!).",
    languages: [
      "NextJS",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "TheMealDB API",
      "Vercel",
    ],
    category: "personal",
    challenge:
      "A significant challenge encountered during the development of Reciplorer was effectively integrating and managing data from the TheMealDB API while ensuring a seamless and responsive user experience. This involved handling asynchronous data fetching, structuring the data in a user-friendly format, and implementing efficient search and filtering functionality to quickly process a potentially large number of recipes. Another key hurdle was designing an intuitive interface for users to add their own recipes, including handling ingredient input, step-by-step instructions, and potentially media uploads, while maintaining data integrity and security. Balancing feature richness with ease of use and performance optimization across different devices also presented a considerable design and development challenge.",
    gains:
      "Developing Reciplorer has provided me with valuable experience in building a complete web application from scratch with a focus on user interaction and data management. I've gained practical skills in integrating third-party APIs like TheMealDB, handling complex backend data, and implementing client-side routing and state management with NextJS and React. The implementation of search and filtering functionality has deepened my understanding of effective optimization for efficient data retrieval. Furthermore, building the recipe submission feature has enhanced my knowledge of form handling and data validation. This project has significantly improved my proficiency in front-end development with TypeScript, Tailwind CSS, and UI libraries like Shadcn UI, as well as deployment on platforms like Vercel. Overall, Reciplorer represents a tangible demonstration of my ability to create functional and user-friendly web applications from concept to deployment.",
    isFeatured: true,
  },
  {
    id: 3,
    name: "WApp",
    framedImage: wapp,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715176775/portfolio/images/Projects/Weather%20App/Desktop_tzvl3y.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715199772/portfolio/images/Projects/Weather%20App/image_o2ss62.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715199770/portfolio/images/Projects/Weather%20App/image2_f6gsw6.png",
    projectUrl: "https://r-wapp.vercel.app/",
    repo: "https://github.com/rahmlad-aramide/wapp",
    type: "Global Problem Solving",
    status: "Completed",
    version: "v.1",
    slug: "wapp",
    description:
      "An advanced weather forecasting web application with data visualization tools.",
    detail:
      "WApp (Weather App) is an advanced weather forecasting platform designed to provide real-time weather data, forecasts, and visual analytics through interactive charts and geographical data maps. This application caters to a wide range of users, from weather enthusiasts and researchers to the general public, enabling them to access detailed and accurate weather predictions effortlessly. It utilizes cutting-edge meteorological data from the openweathermap api and modern web technologies: Next.js, Tailwind and Apexcharts and data maps to deliver a responsive and intuitive user experience. The application features dynamic, interactive charts that visualize weather trends like temperature fluctuations etc. over time, alongside data maps that offer geographical visualizations of varying weather conditions. This integration of real-time data ensures that users receive the most current and reliable weather forecasts available.",
    languages: [
      "NextJS",
      "TypeScript",
      "Tailwind CSS",
      "Apex Charts",
      "Openweathermap API",
      "Layer Maps",
      "Vercel",
    ],
    category: "personal",
    challenge: `A major challenge in the development of R-WAPP was integrating live weather data effectively into the application's data visualization components, such as interactive charts and maps. The real-time nature of the data required robust, dynamic updates to visual elements without sacrificing performance or user experience. Each piece of incoming data had to be processed and reflected accurately in real-time on the charts, necessitating sophisticated state management and update mechanisms to ensure that the visual representations were both current and accurate.
  
      Additionally, without a predefined design template or Figma file, I was tasked with creating the design components, color schemes, and overall aesthetic from scratch. This challenge involved not only a deep understanding of user interface design principles but also an ability to envision a user-friendly and aesthetically pleasing layout that would make complex data accessible and understandable. Selecting colors that would represent various weather conditions clearly and distinctly, designing a layout that would accommodate detailed data without overwhelming users, and ensuring the interface scaled well across multiple devices were all critical considerations that I managed throughout the design process.
      
      These challenges not only tested my technical abilities but also demanded a high level of creativity and foresight in both design and functionality, pushing me to develop a comprehensive skill set that spans across coding, design, and user experience.`,
    gains: `Developing this project has significantly enhanced my technical skills, particularly in handling live data feeds and integrating complex weather forecasting models into a user-friendly interface. The experience has also improved my problem-solving abilities, especially in dealing with the scalability of data and ensuring the application performs optimally under different user loads. This project has been instrumental in sharpening my skills in using Next.js and in understanding the intricacies of reactive state management and API integration in a real-world application.
  
      Anticipated User Benefits:
      The application is expected to make weather-related information more accessible, providing users with tools necessary for planning and decision-making based on weather conditions. Its educational potential is significant, offering a practical resource for students and educators in meteorological studies. For researchers, WApp provides a platform for data analysis and weather pattern observation. Additionally, by delivering timely and accurate weather warnings, it enhances community safety and preparedness for adverse weather conditions.`,
    isFeatured: true,
  },
  {
    id: 4,
    name: "Ridot",
    framedImage: ridot,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715176727/portfolio/images/Projects/Ridot/Desktop_ymhvn8.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715201476/portfolio/images/Projects/Ridot/image2_o9idjm.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715201478/portfolio/images/Projects/Ridot/image_cbnyzm.png",
    projectUrl: "https://ridot.org/",
    repo: "https://github.com/rahmlad-aramide/ridot-software-academy",
    type: "Landing Page Website",
    status: "Completed and being Maintained",
    version: "v.2 underway",
    slug: "ridot",
    description:
      "A software academy website that includes their pricing and subscription information.",
    detail: `Ridot Software Academy is a transformative educational platform dedicated to enabling and encouraging women to start and advance their careers in technology. Positioned at ridot.tech, the platform offers a range of courses, resources, and mentorship opportunities tailored specifically for women who are new to tech or looking to deepen their existing tech skills. By fostering a supportive community, Ridot Software Academy aims to break down the barriers that women often face in the tech industry.
        The platform is designed with user-friendly interfaces that cater specifically to those who are beginners in technology, ensuring that learning materials are accessible and engaging. The curriculum covers everything from basic programming concepts to advanced software development, data science, and more, all structured to facilitate a supportive learning environment for women.
        `,
    languages: ["React", "Tailwind CSS", "Netlify"],
    category: "brands",
    challenge: `Developing Ridot Software Academy presented a unique challenge: the absence of a predefined design template. This required crafting a user-friendly, engaging, and inclusive design from scratch, which had to resonate with a diverse audience and ensure ease of use for tech newcomers. Balancing aesthetic appeal with functional design, all while creating an environment that promotes learning and interaction, was paramount.`,
    gains: `On a personal level, the development of Ridot Software Academy has been profoundly rewarding. It has allowed me to contribute positively by advocating for greater inclusivity in the tech field. Creating a platform that directly addresses and supports the underrepresented group of women in tech has deepened my commitment to social impact within the tech industry. This project has not only enhanced my technical skills but also enriched my perspective on the transformative power of technology as a tool for empowerment.

      For the community, Ridot Software Academy has become a pivotal force in promoting diversity in the tech world. It empowers women by providing the necessary skills and confidence to succeed in tech roles, thereby fostering a more inclusive industry. The success of academy participants helps challenge stereotypes and inspires a broader cultural shift towards equality in tech, encouraging more women to pursue and excel in technology careers.`,
    isFeatured: true,
  },
  {
    id: 5,
    name: "Adorn",
    framedImage: adorn,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1684597972/portfolio/images/Projects/Adorn/adorn_desktop_xmpyru.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690582004/portfolio/images/Projects/Adorn/adorn3_pbds5e.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690582004/portfolio/images/Projects/Adorn/adorn2_jat9ma.png",
    projectUrl: "https://adorn.netlify.app/",
    repo: "https://github.com/rahmlad-aramide/adorn",
    type: "Local Problem Solving",
    status: "In progress",
    slug: "adorn",
    description:
      "A furniture company ecommerce website project to ease the purchase of home & office furnitures.",
    detail:
      "As a problem solver, I took it up as a challenge to provide a solution to a local problem using my skills, which led me to focus on a skilled craftsman in my area who owns a furniture company but lacks an online presence. This means customers can currently only view his products at his company showroom, which isn't ideal in this digital age. Hence, I decided to help his brand create a website where customers can shop and check out their products directly and even have them delivered to their doorstep, as the company possesses a vehicle for transporting their purchased products.",
    languages: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Netlify",
    ],
    category: "personal",
    challenge: `A major problem that I am faced with in this design and development stage is obtaining high-quality pictures of his products to display in the website catalog and categories section. Therefore, I am tentatively using placeholder images until the project is launched.`,
    gains: `As it's still a work in progress, the major gain I'm looking forward to is seeing that I can solve a local problem. I was inspired to do this because I was impressed by the quality of his work. Additionally, since his company owns a vehicle used to transport products to customers, this website will further bring his brand to the attention of potential clients and eliminate the need for them to visit the showroom before making a purchase.`,
    isFeatured: true,
  },
  {
    id: 6,
    name: "Scissor",
    framedImage: scissor,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690571255/scissor/scissor-desktop_cclmcj.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690581870/scissor/scissor3_d2t2bc.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690581870/scissor/scissor2_kkfwo6.png",
    projectUrl: "https://scissor.netlify.app",
    repo: "https://github.com/rahmlad-aramide/scissor",
    type: "Captstone Project",
    status: "Completed",
    slug: "scissor",
    description:
      "A URL Shortening app that allows users to shorten & create custom links, generate QR Code for the links and tracks the links performance.",
    detail:
      "In today's world, it's important to keep things as short as possible, and this applies to more concepts than you may realize. From music, speeches, to wedding receptions, brief is the new black. Scissor is a simple tool which makes URLs as short as possible. It was submitted as my Frontend Engineering Diploma Program Capstone Project at AltSchool Africa, School of Software Engineering",
    languages: [
      "Typescript",
      "React",
      "Tailwind CSS",
      "Firebase",
      "Vite",
      "Unit Testing",
      "Component Testing",
      "API",
    ],
    category: "personal",
    challenge: `I was required to use TypeScript for the project which I've not learned before, so I had to learn the basics of it on the go because of the deadline, even though I started it with React JSX then later converted it to TypeScript TSX. Also, I was required to write a few components and unit testing, I had to learn the basics of it as well so as to be able to make my submission before the deadline.`,
    gains: `It gave me a chance to work within a short timeframe/a tight deadline while ensuring I submit a quality work and a chance to add and improve my skills.`,
    isArchived: true,
  },
  {
    id: 7,
    name: "PVC-Pipe",
    framedImage: pvcpipe,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1684583582/portfolio/images/Projects/PVC-Pipe/pvc-pipe-desktop_pgigqr.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690582155/portfolio/images/Projects/PVC-Pipe/pvc-pipe3_hq1suf.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690582155/portfolio/images/Projects/PVC-Pipe/pvc-pipe2_bstch8.png",
    projectUrl: "https://pvc-pipe.org",
    repo: "https://github.com/rahmlad-aramide/pvc-pipe",
    type: "National Problem Solving",
    status: "Completed",
    slug: "pvc-pipe",
    description:
      "A permanent voters card tracking and delivery app built for my fellow citizens finding it difficult to get their permanent voters card",
    detail:
      "During the last election process for the Nigeria National Election in February 2023, I was informed that my Permanent Voter's Card (PVC) is available for collection whereas I wasn't around then, so for security purpose, it can't be given t someone else on my on my behalf, hence the need for me to come back from travel to get it, had it been that this kind of service is already in existence, it would have been easier for me to get my card delivered to me easily. Likewise, the project was submitted as an internship project delivered by my team while interning with Enoverlab, a team of 2 developers, 2 product managers and 2 designers.",
    languages: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Cloud OTP",
      "React Toastify",
      "Paystack",
      "Randomuser API",
    ],
    category: "internships",
    challenge: `As there's not backend engineer on the team, we had to result into using some already built libraries and technologies within our reach. Also, we don't have access to the National databse that houses the voters information, we had to make use of random user and/or random number where applicable in which we believe will give us an avenue to get it adopted and get needed real data and resources to make it available for use by all.`,
    gains: `It greatly made me to realize that I may not always have access to all the needed resources to execute projects completely which I need to make as such that it doesn't turn into obstacles while working on the project, therefore we had to look for some other alternatives and other possible approaches that we can take to get the job done. Also, my teamwork and team communication skills improved, as well as coding styles and learning, relearning, and unlearning through interactions with others on the team.`,
    isArchived: true,
  },
  {
    id: 8,
    name: "Yieldvest",
    framedImage: yieldvest,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690582284/portfolio/images/Projects/Yieldvest/Yieldvest1_hwoh94.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690582282/portfolio/images/Projects/Yieldvest/Yieldvest2_xrn2sw.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690582282/portfolio/images/Projects/Yieldvest/yieldvest3_phiiog.png",
    projectUrl: "https://yieldvest.app",
    repo: "https://github.com/workshopapps/investment.web",
    type: "Internship",
    status: "Completed",
    slug: "yieldvest",
    description:
      "A stock recommendation app built for tracking, analyzing and recommending stocks through the use of fundamental analysis to reduce investment risks.",
    detail:
      "Colaborated with my team during the 2022 cohort of HNG Internship [HNGi9] where I led the Frontend Developers through thick and thin, we were able to build and deploy Yieldvest at the end of the internship.",
    languages: [
      "Next JS",
      "React",
      "Tailwind CSS",
      "Prop Types",
      "Unit Testing",
      "API",
    ],
    category: "internships",
    challenge: `As the Frontend Team Lead, one of the challenges I faced was managing my team members, especially during times of deviation from the given instruction(s). Additionally, on a personal level, being in an internship program that overlapped with my examination period, the erratic state of power supply, coupled with my PC's damaged battery, presented serious challenges while working on the project.`,
    gains: `Indeed, after difficulty comes ease. Despite all the hurdles, it later turned out to be something that prepared me for similar obstacles that I may encounter at a later time, because for me to be able to scale through successfully, it simply ignites my spirit of not giving up, which is greatly helpful. Also, teamwork and team management skills improved, as well as coding styles and learning, relearning, and unlearning through interactions with others.`,
    isArchived: true,
  },
  {
    id: 9,
    name: "Hackade",
    description:
      "A software academy landing page website that includes their pricing and subscription information.",
    slug: "",
    projectUrl: "https://hackade.net",
    framedImage: hackade,
    category: "communities",
    repo: "",
    languages: ["Next JS", "Tailwind CSS", "Shadcn"],
  },
  {
    id: 10,
    name: "RAIN Hackathon",
    description:
      "A software academy landing page website that includes their pricing and subscription information.",
    slug: "",
    projectUrl: "https://hackathon.rainigeria.com/",
    framedImage: rainHackathon,
    category: "communities",
    repo: "",
    languages: ["Next JS", "Tailwind CSS"],
  },
  {
    id: 11,
    name: "RAIN Summit",
    description:
      "A software academy landing page website that includes their pricing and subscription information.",
    slug: "",
    projectUrl: "https://summit.rainigeria.com/",
    framedImage: rainSummit,
    category: "communities",
    repo: "",
    languages: ["Next JS", "Tailwind CSS"],
  },
  {
    id: 12,
    name: "Flutterbytes Conf. '24",
    description:
      "A software academy landing page website that includes their pricing and subscription information.",
    slug: "",
    projectUrl: "https://www.flutterbytesconf.com/",
    framedImage: flutterbytes,
    category: "communities",
    repo: "",
    languages: ["Next JS", "Tailwind CSS"],
  },
  {
    id: 13,
    name: "Devfest Ogbomoso",
    description:
      "A software academy landing page website that includes their pricing and subscription information.",
    slug: "",
    projectUrl: "https://www.flutterbytesconf.com/",
    framedImage: devfest,
    category: "communities",
    repo: "",
    languages: ["Next JS", "Tailwind CSS"],
  },
  {
    id: 14,
    name: "JOIN",
    description:
      "A software academy landing page website that includes their pricing and subscription information.",
    slug: "",
    projectUrl: "https://www.flutterbytesconf.com/",
    framedImage: join,
    category: "brands",
    repo: "",
    languages: ["Next JS", "Tailwind CSS"],
  },
  {
    id: 15,
    name: "Nugapay",
    description:
      "A software academy landing page website that includes their pricing and subscription information.",
    slug: "",
    projectUrl: "https://www.flutterbytesconf.com/",
    framedImage: nugapay,
    category: "brands",
    repo: "",
    languages: ["Next JS", "Tailwind CSS"],
  },
  {
    id: 16,
    name: "Treesoft Academy",
    description:
      "A software academy landing page website that includes their pricing and subscription information.",
    slug: "",
    projectUrl: "https://www.flutterbytesconf.com/",
    framedImage: treesoft,
    category: "brands",
    repo: "",
    languages: ["Next JS", "Tailwind CSS"],
  },
  {
    id: 17,
    name: "Uverus",
    description:
      "A software academy landing page website that includes their pricing and subscription information.",
    slug: "",
    projectUrl: "https://www.flutterbytesconf.com/",
    framedImage: uverus,
    category: "brands",
    repo: "",
    languages: ["Next JS", "Tailwind CSS"],
  },
  {
    id: 18,
    name: "AO Foundation",
    description:
      "A software academy landing page website that includes their pricing and subscription information.",
    slug: "",
    projectUrl: "https://www.flutterbytesconf.com/",
    framedImage: aofounda,
    category: "brands",
    repo: "",
    languages: ["Next JS", "Tailwind CSS"],
  },

  // {
  //   id: 5,
  //   name: "LAUMGA Membapp",
  //   framedImage: 'https://res.cloudinary.com/dh4rm7b7b/image/upload/v1680001660/portfolio/images/Projects/Yieldvest/Yieldvest-Frame_uugts9.png',
  //   image:
  //     "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1679304758/portfolio/images/Projects/Project-Yieldvest_xlcytz.png",
  //   image2: '',
  //   image3: '',
  //   projectUrl: "https://yieldvest.app",
  //   repo: "https://github.com/workshopapps",
  //   type: "Internship Final Project",
  //   status: "Completed and still being maintained",
  //   description: "A stock recommendation app built for those dealing with stocks through the use of fundamental analysis to reduce risks",
  //   detail:
  //     "Colaborated with my team during the 2022 cohort of HNG Internship [HNGi9] where I led the Frontend Developers through thick and thin, we were able to build and deploy Yieldvest at the end of the internship.",
  //   languages: [
  //     {
  //       name: "Next JS",
  //       url: "images/Assets/next-js-seeklogo.com.svg",
  //     },
  //     {
  //       name: "React",
  //       url: "images/Assets/react-seeklogo.com.svg",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       url: "images/Assets/tailwind-css-seeklogo.com.svg",
  //     },
  //     {
  //       name: "Prop Types",
  //     },
  //     {
  //       name: "Unit Testing",
  //     },
  //     {
  //       name: "API",
  //       url: "images/Assets/api.svg",
  //     },
  //   ],
  //   challenge: `As the Frontend Team Lead, one of the challenges I faced was managing my team members, especially during times of deviation from the given instruction(s). Additionally, on a personal level, being in an internship program that overlapped with my examination period, the erratic state of power supply, coupled with my PC's damaged battery, presented serious challenges while working on the project.`,
  //   gains: `Indeed, after difficulty comes ease. Despite all the hurdles, it later turned out to be something that prepared me for similar obstacles that I may encounter at a later time, because for me to be able to scale through successfully, it simply ignites my spirit of not giving up, which is greatly helpful. Also, teamwork and team management skills improved, as well as coding styles and learning, relearning, and unlearning through interactions with others.`
  // },
];