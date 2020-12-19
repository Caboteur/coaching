import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {Link } from "gatsby"





function Prestation() {
  return (
    <Layout>
    <SEO
    keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    title="Nos prestations"
    />

    <section className="text-center">

    <div className="blockPrestIntro">
    <div className="paraP1">
    <h1>Cabinet BL Potentiel</h1>

    <p>
    <ul>
    <li><p id="strongword"> Coaching individuel </p> Efficacité personnelle, préparation d’entretien professionnel, prise de poste, changement de poste, accompagnement au changement, intervention en situation complexe et de reconstruction.</li>
    <li><br /><p id="strongword"> Coaching d’équipe</p>  Accompagnement à l’action : construire son équipe, développer le potentiel collaboratif d’une équipe, efficacité du groupe : ateliers de co-développement, en présentiel et en distanciel, amélioration des performances globales de l’organisation.</li>
    <li><br/><p id="strongword" style={{textAlign: "center",color: "#ffffff"}}>Ateliers:</p><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<p id="strongword">Café Clown</p>
Se conquérir et se vaincre soi-même, le « Café Clown » c’est un atelier ludique et bienveillant qui mêle improvisation, clown de théâtre et coaching.
Venez vivre une expérience personnelle de changement soutenue par une dynamique collective.<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p id="strongword">Carrière Coach</p>
Vous êtes en recherche de sens dans votre vie professionnelle, vous vous posez des questions pour mener à bien une période de transition, vous êtes à un moment clé de votre parcours et vous recherchez un accompagnement qui vous permette de mettre en œuvre un plan d’actions adapté pour réaliser votre projet professionnel, l’atelier « Carrière Coach » répond à votre demande.

</li>

    </ul>
    </p>
    </div>
    <div></div>

      <button className="follow" style={{marginBottom:"2em"}}><Link to="/ensavoirplus">En savoir plus</Link></button>



    </div>

    </section>
    </Layout>
  );
}

export default Prestation;
