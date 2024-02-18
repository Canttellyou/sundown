import { StaticImageData } from "next/image";

export interface ProjectsProps {
  title: string;
  id: number;
  sourceType: "video" | "photo";
  source: any;
  type: string;
  brand: string;
}

export interface CarouselProps {
  description: string;
  image: string | StaticImageData;
}
