import { StaticImageData } from "next/image";

export interface IProyectos {
  title: string;
  id: number;
  tags: Array<string>;
  image: StaticImageData;
  alt: string;
  overviewHome: string;
  overview: string;
  role: string;
  year: string;
  imagesProyect: Array<StaticImageData>;
}

export type TProyect = {
  proyectName: "Apolo" | "Quiero!" | "MercadoPOS";
  order?: "reverse";
};

export type TTag = {
  content: string;
  className?: string;
};

export type TButton = {
  className?: string;
  content?: string;
  id?: string;
  link?: string;
  children?: JSX.Element;
};

export type TCardsViews = {
  title: string;
  description: string;
  viewOn: string;
  link: string;
};
