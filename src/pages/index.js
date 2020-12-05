import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Back from "../images/fond.jpg";
import rond from "../images/rond.svg";
import profil from "../images/profil.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
        />

      <section className="text-center">
        <div className="Image">

        </div>

        <div className="blockIntro" style={{backgroundImage: "url(" + Back + ")"}}>

        <p className="titlePhrase">  «Se conquérir et se vaincre soi-même est la première et la plus noble de toutes les victoires» Platon </p>

        </div>


        <div className="blockPostIntro" style={{backgroundImage: "url(" + rond + ")", backgroundRepeat:"no-repeat"}}>
          <div className="separationBlue"></div>

        <h1>FAITES ÉMERGER VOTRE POTENTIEL</h1>

      <div className="separationBlue"></div>

        <p  style={{textAlign: "left"}}>Envie d’évolution ? <br />
Vous êtes salariés, en transition professionnelle ou en recherche d’emploi, créateurs d’entreprises, managers, ou adhérents aux organismes d’aide à l’emploi et à la réinsertion professionnelle, vous souhaitez évoluer et avez des difficultés ? je vous accompagne pour que vous trouviez du sens dans votre parcours professionnel.</p>

<p style={{textAlign: "right"}}>Dans une époque où nous devons nous appuyer sur nos propres ressources pour évoluer, pour s’adapter pour enrichir nos connaissances et faire face aux évènements qui jalonnent notre vie professionnelle et personnelle, avec bienveillance je vous fais prendre conscience de ce qui vous freine, je vous amène à développer votre potentiel et votre confiance en vous.
Ainsi vous serez amené à préciser le projet professionnel qui a du sens pour vous, qui est en harmonie avec vos valeurs afin d’exercer votre métier de façon épanouissante.
</p>
<div className="backprofil" style={{backgroundImage: "url(" + profil + ")", backgroundRepeat:"no-repeat"}} ></div>
<p style={{textAlign: "left"}}>Bernard Lafage - Coach professionnel certifié.
Responsable de missions de conseils et d’équipes pluridisciplinaires pendant plus de 35 ans dans de grands groupes industriels et de services, j’ai eu à cœur d’accompagner des équipes pour relever des défis dans un esprit collaboratif et bienveillant, pour favoriser l’autonomie de chacun, le développement des savoirs faire et savoir être et oser vivre des aventures humaines.</p>
     <button className="follow"><Link to="/about">A propos</Link></button>
       <button className="follow"><Link to="/contact">Prenez rendez-vous pour une séance découverte</Link></button>


        </div>


      </section>
    </Layout>
  );
}

export default IndexPage;
