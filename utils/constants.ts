import { showCaseFive, showCaseThree, showCaseTwo } from "@/images";
import { ProjectsProps } from "@/interfaces/consts";

export const marqueList = ["Environments", "experience", "content"];
export const projects: Array<ProjectsProps> = [
  {
    title: "Play New Kidvision",
    id: 1,
    sourceType: "video",
    source: "/showcase-1.mp4",
    type: "Environment",
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
    title: "Makers Studio HOI",
    id: 5,
    sourceType: "photo",
    source: showCaseFive,
    type: "Experimental",
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
    title: "SOHO NYC",
    id: 7,
    sourceType: "photo",
    source: showCaseFive,
    type: "Environment",
    brand: "Arc'teryx",
  },
];
