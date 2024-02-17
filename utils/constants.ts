import {
  processOne,
  processThree,
  processTwo,
  showCaseFive,
  showCaseSeven,
  showCaseThree,
  showCaseTwo,
} from "@/images";
import { ProjectsProps } from "@/interfaces/consts";

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
