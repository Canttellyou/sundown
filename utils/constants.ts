import {
  arcteryx,
  converse,
  hunter,
  medialink,
  nike,
  processOne,
  processThree,
  processTwo,
  showCaseFive,
  showCaseSeven,
  showCaseThree,
  showCaseTwo,
} from "@/images";
import { CarouselProps, ProjectsProps } from "@/interfaces/consts";

export const marqueList = ["Environments", "experience", "content"];
export const processes = [
  {
    title: "Design",
    description:
      "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
    img: processOne,
  },
  {
    title: "Project",
    description:
      "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
    img: processTwo,
  },
  {
    title: "Execution",
    description:
      "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.",
    img: processThree,
  },
];

export const projects: Array<ProjectsProps> = [
  {
    title: "Makers Studio HOI",
    id: 5,
    sourceType: "photo",
    source: showCaseFive,
    type: "Experimental",
    brand: "Nike",
  },
  {
    title: "Air Force 1 2021",
    id: 2,
    sourceType: "photo",
    source: showCaseTwo,
    type: "Environment",
    brand: "Nike",
  },
  {
    title: "SOHO 2023",
    id: 6,
    sourceType: "video",
    source: "/hero-video.mp4",
    type: "Environment",
    brand: "Converse",
  },
  {
    title: "50th Anniversary",
    id: 3,
    sourceType: "photo",
    source: showCaseThree,
    type: "Environment",
    brand: "Nike",
  },
  {
    title: "NYFW Popup",
    id: 4,
    sourceType: "video",
    source: "/showcase-4.mp4",
    type: "Experimental",
    brand: "Afterpay",
  },
  {
    title: "Play New Kidvision",
    id: 1,
    sourceType: "video",
    source: "/showcase-1.mp4",
    type: "Environment",
    brand: "Nike",
  },

  {
    title: "SOHO NYC",
    id: 7,
    sourceType: "photo",
    source: showCaseSeven,
    type: "Environment",
    brand: "Arc'teryx",
  },
];

export const featuredBrands: CarouselProps[] = [
  {
    image: nike,
    description:
      "Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.",
  },
  {
    image: converse,
    description:
      "Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners.",
  },
  {
    image: arcteryx,
    description:
      "Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California.",
  },
  {
    image: hunter,
    description:
      "Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women’s, Men’s and Kid’s zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US. Concept design for Holiday boot customization events in stores across winter 2022.",
  },
  {
    image: medialink,
    description:
      "Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding Identity, Assets, and Digital Content, Design, Production design, Production oversight and Installation of client activations for IBM, Delta, Instacart, and more.",
  },
];
