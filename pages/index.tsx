import Head from "next/head";
import Footer from "../components/Footer";

import Navbar from "../components/Header";
import Presentation from "../components/Presentation";
import ProyectoDestacado from "../components/ProyectoDestacado";
import SegundoProyecto from "../components/SegundoProyecto";
import TercerProyecto from "../components/TercerProyecto";

export default function Home() {
  return (
    <>
      <Head>
        <title>Agustin Ietta Portfolio&apos;s </title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container">
        <Presentation />
        <ProyectoDestacado />
        <SegundoProyecto />
        <TercerProyecto />
      </main>
      <Footer />
    </>
  );
}
