import { IProyectos } from "../../utils/types";

//------------------------ Pampa ------------------------//
import PampaImg from "../../img/main/proyectoUno.png";
import PampaImgProyect1 from "../../img/proyectsInfo/pampa/img1.png";
import PampaImgProyect2 from "../../img/proyectsInfo/pampa/img2.png";
import PampaImgProyect3 from "../../img/proyectsInfo/pampa/img3.png";
import PampaImgProyect4 from "../../img/proyectsInfo/pampa/img4.png";
import PampaImgProyect5 from "../../img/proyectsInfo/pampa/img5.png";
import PampaImgProyect6 from "../../img/proyectsInfo/pampa/img6.png";

//------------------------ Banco Galicia: Quiero! ------------------------//

import QuieroImg from "../../img/main/proyectoDos.png";
import QuieroImg1 from "../../img/proyectsInfo/quiero/1.png";
import QuieroImg2 from "../../img/proyectsInfo/quiero/2.png";
import QuieroImg3 from "../../img/proyectsInfo/quiero/3.png";
import QuieroImg4 from "../../img/proyectsInfo/quiero/4.png";
import QuieroImg5 from "../../img/proyectsInfo/quiero/5.png";
import QuieroImg6 from "../../img/proyectsInfo/quiero/6.png";
import QuieroImg7 from "../../img/proyectsInfo/quiero/7.png";
import QuieroImg8 from "../../img/proyectsInfo/quiero/8.png";
import QuieroImg9 from "../../img/proyectsInfo/quiero/9.png";
import QuieroImg10 from "../../img/proyectsInfo/quiero/10.png";
import QuieroImg11 from "../../img/proyectsInfo/quiero/11.png";
import QuieroImg12 from "../../img/proyectsInfo/quiero/12.png";
import QuieroImg13 from "../../img/proyectsInfo/quiero/13.png";
import QuieroImg14 from "../../img/proyectsInfo/quiero/14.png";
import QuieroImg15 from "../../img/proyectsInfo/quiero/15.png";
import QuieroImg16 from "../../img/proyectsInfo/quiero/16.png";
import QuieroImg17 from "../../img/proyectsInfo/quiero/17.png";
import QuieroImg19 from "../../img/proyectsInfo/quiero/19.png";
import QuieroImg20 from "../../img/proyectsInfo/quiero/20.png";
import QuieroImg21 from "../../img/proyectsInfo/quiero/21.png";
import QuieroImg22 from "../../img/proyectsInfo/quiero/22.png";

//------------------------ Mercado POS ------------------------//

import MPosImg1 from "../../img/main/proyectoCuatro.png";
import MPosImg2 from "../../img/proyectsInfo/mercadoPos/img1.jpg";

const ListaProyectos: Array<IProyectos> = [
  {
    title: "Pampa",
    id: 1,
    tags: ["Design system", "Visual Design"],
    image: PampaImg,
    overview:
      "I made from the very beginning this Design System for the principle product in the company, here's a bit of the system to show you.",
    role: "Visual Designer",
    year: "2020 working at BP4",
    imagesProyect: [
      PampaImgProyect1,
      PampaImgProyect2,
      PampaImgProyect3,
      PampaImgProyect4,
      PampaImgProyect5,
      PampaImgProyect6,
    ],
  },
  {
    title: "Quiero!",
    id: 2,
    tags: ["Research", "Lean UX", "Usability Test"],
    image: QuieroImg,
    overview:
      "This one is a short experiment, based on Lean UX methodology. This experiment is for understanding how to improve points expiration on the benefits program, Quiero!",
    role: "Product Designer",
    year: "2021 working at Galicia Bank",
    imagesProyect: [
      QuieroImg1,
      QuieroImg2,
      QuieroImg3,
      QuieroImg4,
      QuieroImg5,
      QuieroImg6,
      QuieroImg7,
      QuieroImg8,
      QuieroImg9,
      QuieroImg10,
      QuieroImg11,
      QuieroImg12,
      QuieroImg13,
      QuieroImg14,
      QuieroImg15,
      QuieroImg16,
      QuieroImg17,
      QuieroImg19,
      QuieroImg20,
      QuieroImg21,
      QuieroImg22,
    ],
  },
  {
    title: "MercadoPOS",
    id: 3,
    tags: ["Design Thinking", "Lean UX"],
    image: MPosImg1,
    overview:
      "This is a personal challengue to design MercadoPos function at Mercadopago and make a promotional landing for it.",
    role: "Product Designer",
    year: "2022",
    imagesProyect: [MPosImg2],
  },
];

export default ListaProyectos;
