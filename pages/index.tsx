import Head from "next/head";
import Footer from "../components/Footer";

import Navbar from "../components/Header";
import Presentation from "../components/Presentation";
import PrimaryProyect from "../components/PrimaryProyect";
import SecondaryProyect from "../components/SecondaryProyects";

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
        <PrimaryProyect proyectName="Apolo" />
        <SecondaryProyect proyectName="Quiero!" />
        <SecondaryProyect proyectName="MercadoPOS" order="reverse" />
      </main>
      <Footer />
    </>
  );
}
