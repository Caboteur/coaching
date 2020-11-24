import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Back from "../images/fond.jpg";

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


        <div className="blockPostIntro">
          <div className="separationBlue"></div>

        <h1>FAITES ÉMERGER VOTRE POTENTIEL</h1>

      <div className="separationBlue"></div>

        <p>Vous êtes salariés, en reconversion ou en recherche d’emploi, créateurs d’entreprises, managers, ou adhérents aux organismes d’aide à l’emploi et à la réinsertion professionnelle, vous souhaitez évoluer et avez des difficultés, je vous accompagne pour que vous trouviez du sens dans votre parcours professionnel.</p>

<p>Dans une époque où nous devons nous appuyer sur nos propres ressources pour évoluer pour s’adapter pour enrichir nos connaissances et faire face aux évènements qui jalonnent notre vie professionnelle et personnelle ; avec douceur et bienveillance je vous fais prendre conscience de ce qui vous freine, je vous amène à développer la confiance en vous et votre potentiel, puis à préciser le projet professionnel qui a du sens pour vous, qui est en harmonie avec vos valeurs et enfin à déployer avec enthousiasme votre offre de service.
</p>

     <button className="follow"><Link to="/nosprestations">Nos prestations</Link></button>

        </div>


      </section>
    </Layout>
  );
}

export default IndexPage;
