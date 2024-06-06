import {
  algorithms,
  discord,
  image,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Roblox Game Developer",
    company_name: "Team",
    date: "2024",
    details: [
      "Built a Roleplay Game Called <span style='color: white;'> London RP</span> As A Team Called Deyo Studios",
      "Building A Horror Game Called <span style='color: white;'>Escape Matrix</span>.",
      "We Need Members For Our Team <span style='color: white;'>Join US </span>.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Self Employed",
    date: "2022 - 2024",
    details: [
      "Currently Developing Websites For Experience <span style='color: white;'>For InternShip</span>.",
      "<span style='color: white;'>Designed and developed</span> Currently I am 10th Class.",
      "<span style='color: white;'>Searching For Clients Who Hire Me</span> I am From India ",
    ],
  },
  {
    title: "Discord Bot Developer",
    company_name: "Risin",
    date: "2019 - 2024",
    details: [
      "I Built A Discord Node.js Bot Called  <span style='color: white;'>Risin</span> Which Works With Discord.js",
      "Developed and maintained <span style='color: white;'>In a Hosting Website</span>, We Develop As Team.",
      "<span style='color: white;'>Collaborated with a team</span> Called Raiden Community.",
    ],
  },
  {
    title: "Game Developer",
    company_name: "Deyo Studios",
    date: "2019 - 2024",
    details: [
      "Building a <span style='color: white;'>Roleplay Game</span> Still Not Done Yet We Have Been Developing From 2022 ",
      "We Have a Team Called <span style='color: white;'>Deyo Studios</span> Gaining Some experience By Making Silly Games",
      "Founder of Deyo Studios<span style='color: white;'>Wanna Join US</span> (ACM).",
    ],
  },
];

const portfolio = [
  {
    name: "Client Website",
    description:
      "A Website Made By Me For A Client With HTML And CSS ",
    image: image,
  },
  {
    name: "My Discord",
    description:
      "Wanna Contact ME. Message me By Sending Friend Request In Discord.",
    image: discord,
  },
  {
    name: "Visually Understanding Algorithms",
    description:
      "A showcase of animated algorithms coded using TypeScript,",
    image: algorithms,
  },
];

export { experiences, portfolio };

