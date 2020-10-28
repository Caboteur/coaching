import React from "react";
import profilImg from "../images/profilImg.webp";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Back from "../images/unplash2.jpg";

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


        </div>
        <div className="blockPostIntro">
        <h1>FAITES ÉMERGER VOTRE POTENTIEL</h1>

        <p>Vous êtes un homme, une femme, un manager, salarié, étudiant, en recherche d emploi, soucieux de sa réussite; vous souhaitez évoluer, à un moment clé, pour vous même ou pour vos collaborateurs, je peux vous accompagner pour que rapidement des changements bénéfiques vous permettent de concrétiser vos projets</p>

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

            <div className="w-full   xl:w-1/5 mb-4"><div className="carré">ACCOMPAGEMENT AU CHANGEMENT</div></div>
            <div className="w-full  xl:w-1/5 mb-4"><div className="carré">PRISE DE POSTE, CHANGEMENT DE POSTE</div></div>
            <div className="w-full   xl:w-1/5 mb-4"><div className="carré">PREPARATION DENTRETIEN PROFESSIONNEL</div></div>
            <div className="w-full   xl:w-1/5 mb-4"><div className="carré">EFFICACITE PERSONNELLE</div></div>
            <div className="w-full  xl:w-1/5 mb-4"><div className="carré">INTERVENTION EN SITUATION COMPLEXE ET DE ...</div></div>
          </div>



        </div>


        <div className="container-card">

          <h1>Coaching pour les particuliers</h1>


          <div className="container-flex flex flex-wrap">

            <div className="w-full   xl:w-1/3 mb-4 "><div className="carré2">CONSTRUIRE SON EQUIPE</div></div>
            <div className="w-full  xl:w-1/3 mb-4 "><div className="carré2">DEVELOPPER LE POTENTIEL COLLABORATIF : ATELIERS DE CO-DéVELOPPEMENT</div></div>
            <div className="w-full   xl:w-1/3 mb-4 "><div className="carré2">EFFICACITE DE GROUPE</div></div>
            <div className="w-full   xl:w-1/3 mb-4 "><div className="carré2">PREVISION ET GESTION DES CONFLITS</div></div>
            <div className="w-full  xl:w-1/3 mb-4 "><div className="carré2">AMELIORATION DES PERFORMANCES GLOBALES DE LORGANISATION</div></div>
            <div className="w-full  xl:w-1/3 mb-4 "><div className="carré2">REUSSIR SON PROJET PRO</div></div>

          </div>

        </div>

      </section>
    </Layout>
  );
}

export default IndexPage;
