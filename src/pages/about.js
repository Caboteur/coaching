import React from "react";
import profilImg from "../images/profilImg.webp";
import rncp from "../images/rncp.jpg";
import emcc from "../images/emcc.jpg";
import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {


  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <div className="blockProfil flex flex-wrap">
        <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/2">
          <img src={profilImg} />
        </div>
        <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/2">

          <p>Ingénieur de formation et titulaire d’un MBA à l’IAE Paris Sorbonne Business School, Bernard a
dirigé des programmes stratégiques dans des grands groupes industriels et de services, en ayant
une approche systémique auprès des équipes c’est-à-dire en prenant en compte l’individu dans
toute sa complexité reliant sa pensée ses émotions et son corps. L&#39;humain a toujours été au cœur
de ses actions, sa passion c’est d’aider chacun à se réaliser, c’est pourquoi il a créé une structure
dédiée à l’accompagnement et à la formation.</p>



        </div>



        <p className="aboutP">Coach professionnel certifié, praticien senior, référencé au RNCP (Registre National des
        Certifications Professionnelles), formateur à l’IAE Paris Sorbonne Business School, Bernard
        accompagne les personnes pour qu’elles trouvent du sens dans leur projet professionnel, il amène
        chaque stagiaire à développer sa confiance et son potentiel et à être aligné avec ses valeurs dans
        ce qu’il entreprend.
        </p>
        <p className="aboutP">
        En fonction des besoins et objectifs définis, je complète le panel des outils et méthodologies
        d’accompagnement AT, PNL, Systémie, par les techniques et processus issus de ma pratique du
        théâtre d’improvisation, des notions et des exercices simples et efficaces pour s’ancrer et s’aligner
        afin de vivre la liberté et la confiance dans l’instant présent.
        </p>



      </div>
      <p className="aboutP">Coach professionnel certifié (RNCP), depuis 2018, et master coach depuis 2019 Bernard est à ce titre coach ressource à l’Ecole Française de Coaching (groupe MHD-EFC) et membre de jury de certification de l’école.</p>

      <img className="imageIcon" src={rncp} />
     <p className="aboutP">Bernard est membre de l’association EMCC France et membre de l’équipe de l’organisation du colloque EMCC 2021.</p>
       <img className="imageIcon" src={emcc} />

    </Layout>
  );
}

export default AboutPage;
