import React from "react";
import { Link} from "gatsby";
import Layout from "../components/layout";
import coachingEquipe from "../images/coachingEquipe2.jpg";
import coachingPerso from "../images/coachingPerso2.jpeg";
import SEO from "../components/seo";

function EnSavoirPlus() {
  return (
    <Layout>
    <SEO
    keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    title="En savoir plus"
    />

    <section className="text-center">

    <div className="blockPrestIntro">
    <div className="paraP1">
    <h1>En savoir plus</h1>


    </div>
    <div></div>

    <div className="paraP">
    <div className="separation"></div>
    <h1>Qu’est-ce qu’un coach professionnel ?</h1>
    <p>C’est un professionnel du changement qui sait en comprendre et en lever les freins. Le coach vous accompagne mais c’est vous en expérimentant vous-même qui prendrez un nouveau chemin.
<br/>Le coach professionnel c’est :
<br/>
       &nbsp;&nbsp;&nbsp;&nbsp;Une solide expérience du monde de l’entreprise de son organisation et des relations humaines.<br/>
       &nbsp;&nbsp;&nbsp;&nbsp;Une formation de coach professionnel certifié.<br/>
       &nbsp;&nbsp;&nbsp;&nbsp;Une éthique et le respect d’un code de déontologie.<br/>
       &nbsp;&nbsp;&nbsp;&nbsp;Un accompagnement formalisé dans un contrat, avec une intervention dans la juste durée, et des règles de confidentialité totale lors des séances de coaching.</p>
        </div>

        <div className="paraP2">
    <h1>Un coaching pourquoi ?  </h1>
    <p>Salarié, manager, entrepreneur vous traversez une difficulté à un moment clé de votre parcours professionnel. Le coaching vous apporte un regard nouveau et des possibilités inédites. Il s’agit d’un dispositif d’accompagnement qui vous permet de prendre conscience de vos freins, de révéler vos compétences et aptitudes propices à votre développement personnel et professionnel.<br/>
<b>L’atteinte de l’objectif s’évalue par le degré d’autonomie acquis à la fin du parcours.
<br />
Lors d’un coaching,</b>
<br />
<h3 style={{fontWeight:"600"}}>Vous allez acquérir :</h3>
    Un nouveau regard sur les difficultés, une prise de conscience des obstacles.
    De nouveaux comportements et de nouveaux modes de fonctionnement.
    Une meilleure compréhension de vos émotions face aux diverses pressions et une meilleure façon de les gérer en les acceptant.
<br/><h3 style={{fontWeight:"600"}}>Vous allez mettre en œuvre :</h3>
Des actions que vous aurez décidées pour progresser vers l’atteinte de l’objectif défini. Des actions alignées avec votre identité et vos valeurs. De nouveaux comportements et de nouveaux modes de fonctionnement. Une meilleure gestion de vos émotions face aux diverses pressions, aux challenges et autres missions vécues comme irréalisables. Le décryptage des cercles vicieux qui “cristallisent” la situation dans un mode “problème”. Une stratégie systémique pour agir vers l’objectif choisi.
    <br />
    </p>
    </div>

    <img id="imgS" src={coachingPerso} />

    <div className="paraP">
      <div className="separation"></div>
    <h1>Coaching individuel</h1>
    <p>
    Un coaching individuel se déroule entre 3 et 10 séances d’1h30.
      Le coaching individuel peut être effectué au sein de l’entreprise, il est alors défini dans le cadre d’un contrat tripartite entre l’entreprise, le salarié coaché et le coach.
         Un entretien préliminaire permet à chacun de confirmer son envie de travailler avec l’autre, le coach présente les éléments nécessaires pour décider librement, le coaché expose sa problématique.<br/>
       Lors d’un entretien tripartite entre le coaché sa hiérarchie et le coach, les objectifs du coaching sont définis et le rôle de chacun est précisé.
      Les séances de coaching sont confidentielles.
      Un point d’avancement est effectué à mi-parcours avec la hiérarchie et le coaché.
      Un bilan est écrit par le coach à la fin des séances, il est relu pour validation par le coaché avant diffusion à sa hiérarchie.

    </p>
    </div>

    <img id="imgS" src={coachingEquipe} />

    <div className="paraP2" style={{marginBottom:"2em"}}>
    <h1>Coaching d’équipe et atelier de co-développement</h1>
    <p>
    Vous souhaitez mettre fin à des dysfonctionnements de communication au sein d’un groupe, améliorer les résultats de votre équipe, définir et établir des outils communs facilitant la communication et la productivité.
    Un coaching d’équipe et des ateliers de co-développement répondent à ces besoins et vous permettent de développer, la participation, la prise d’initiatives, la créativité.
    Vous pourrez trouver ensemble des solutions en comprenant les problématiques d’un collègue, en proposant des actions et des processus lors d’ateliers de co-développement.
    </p>
    </div>




    </div>

    <button className="follow"><Link to="/event">Ateliers</Link></button>


    </section>
    </Layout>
  );
}

export default EnSavoirPlus;
