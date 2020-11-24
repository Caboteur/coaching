import React from "react";
import profilImg from "../images/profilImg.webp";
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

        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/2">
            <h1>FAITES ÉMERGER VOTRE POTENTIEL</h1>
          </div>
          <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/2">


                    <p>Vous êtes salariés, en reconversion ou en recherche d’emploi, créateurs d’entreprises, managers, ou adhérents aux organismes d’aide à l’emploi et à la réinsertion professionnelle, vous souhaitez évoluer et avez des difficultés, je vous accompagne pour que vous trouviez du sens dans votre parcours professionnel.</p>

            <p>Dans une époque où nous devons nous appuyer sur nos propres ressources pour évoluer pour s’adapter pour enrichir nos connaissances et faire face aux évènements qui jalonnent notre vie professionnelle et personnelle ; avec douceur et bienveillance je vous fais prendre conscience de ce qui vous freine, je vous amène à développer la confiance en vous et votre potentiel, puis à préciser le projet professionnel qui a du sens pour vous, qui est en harmonie avec vos valeurs et enfin à déployer avec enthousiasme votre offre de service.
            </p>

  </div>

          </div>
        <div className="blockPostIntro">
        <h1>FAITES ÉMERGER VOTRE POTENTIEL</h1>

        <p>Vous êtes salariés, en reconversion ou en recherche d’emploi, créateurs d’entreprises, managers, ou adhérents aux organismes d’aide à l’emploi et à la réinsertion professionnelle, vous souhaitez évoluer et avez des difficultés, je vous accompagne pour que vous trouviez du sens dans votre parcours professionnel.</p>

<p>Dans une époque où nous devons nous appuyer sur nos propres ressources pour évoluer pour s’adapter pour enrichir nos connaissances et faire face aux évènements qui jalonnent notre vie professionnelle et personnelle ; avec douceur et bienveillance je vous fais prendre conscience de ce qui vous freine, je vous amène à développer la confiance en vous et votre potentiel, puis à préciser le projet professionnel qui a du sens pour vous, qui est en harmonie avec vos valeurs et enfin à déployer avec enthousiasme votre offre de service.
</p>

        </div>

        <div>

          <div className="blockProfil flex flex-wrap">
            <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/2">
              <img src={profilImg} />
            </div>
            <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/2">

              <p>Responsable de missions de conseils et déquipes pluridisciplinaires pendant plus de 35 ans dans des grandes entreprises industrielles et de services informatiques, je me suis efforcé doffrir à chacun la possibilité de développer ses ressources et denrichir ses connaissances</p>

              <p>Les formations de Patricien en Intelligence émotionnelle, de Coach Professionnel et de Coach Praticien Senior ont complété depuis 2016 mon expérience de Management</p>

            </div>
          </div>




          <div className="present-follow">
            <p>Ma philosophie : développer votre potentiel
            Toute personne peut faire émerger son potentiel si elle en exprime la volonté
            Ma démarche :
            <br/>Une approche bienveillante
            <br/>Le respect dun cadre précis, dune déontologie, de la confidentialité
            <br/>Un accompagnement sur une courte durée
            <br/>Lutilisation doutils spécifiques et adaptés
            <br/>Jaccompagne chacun à progresser à son rythme et à devenir autonome</p>
          </div>

        </div>


        <div className="container-card">

          <h1>Coaching pour les particuliers</h1>


          <div className="container-flex flex flex-wrap">

            <div className="w-full   xl:w-1/5 mb-4"><div className="carré"><p>ACCOMPAGEMENT AU CHANGEMENT</p></div></div>
            <div className="w-full  xl:w-1/5 mb-4"><div className="carré"><p>PRISE DE POSTE, CHANGEMENT DE POSTE</p></div></div>
            <div className="w-full   xl:w-1/5 mb-4"><div className="carré"><p>PREPARATION DENTRETIEN PROFESSIONNEL</p></div></div>
            <div className="w-full   xl:w-1/5 mb-4"><div className="carré"><p>EFFICACITE PERSONNELLE</p></div></div>
            <div className="w-full  xl:w-1/5 mb-4"><div className="carré"><p>INTERVENTION EN SITUATION COMPLEXE ET DE ...</p></div></div>
          </div>



        </div>


        <div className="container-card">

          <h1>Coaching pour les particuliers</h1>


          <div className="container-flex flex flex-wrap">

            <div className="w-full   xl:w-1/3 mb-4 "><div className="carré2"><p>CONSTRUIRE SON EQUIPE</p></div></div>
            <div className="w-full  xl:w-1/3 mb-4 "><div className="carré2"><p>DEVELOPPER LE POTENTIEL COLLABORATIF : ATELIERS DE CO-DéVELOPPEMENT</p></div></div>
            <div className="w-full   xl:w-1/3 mb-4 "><div className="carré2"><p>EFFICACITE DE GROUPE</p></div></div>
            <div className="w-full   xl:w-1/3 mb-4 "><div className="carré2"><p>PREVISION ET GESTION DES CONFLITS</p></div></div>
            <div className="w-full  xl:w-1/3 mb-4 "><div className="carré2"><p>AMELIORATION DES PERFORMANCES GLOBALES DE LORGANISATION</p></div></div>
            <div className="w-full  xl:w-1/3 mb-4 "><div className="carré2"><p>REUSSIR SON PROJET PRO</p></div></div>

          </div>

        </div>

      </section>
    </Layout>
  );
}

export default IndexPage;
