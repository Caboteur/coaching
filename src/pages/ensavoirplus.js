import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function EnSavoirPlus() {
  return (
    <Layout>
    <SEO
    keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    title="Home"
    />

    <section className="text-center">

    <div className="blockPrestIntro">
    <div className="paraP1">
    <h1>En savoir plus</h1>


    </div>
    <div></div>

    <div className="paraP">
    <div className="separation"></div>
    <h1>Coaching professionnel</h1>
    <p>Le coach est un professionnel du changement qui sait en comprendre et en lever les freins.
    Le coach vous accompagne mais c’est vous par l’expérimentation qui prendrez un nouveau chemin
    Les caractéristiques d’un coach professionnel :
    Une expérience professionnelle importante : un des rares métiers où la maturité est un atout !
    Une bonne connaissance des organisations et des phénomènes d’interactions dans le monde du travail.
    Une solide formation de coach professionnel certifiée.
    Une éthique et une déontologie : le respect d’un code de déontologie, un accompagnement formalisé dans un contrat, avec une intervention dans la juste durée, et des règles de confidentialité pour la libre parole.</p>
        </div>

        <div className="paraP2">
    <h1>Un coaching pourquoi ?  </h1>
    <p>Salariés, managers, entrepreneurs : vous traversez une difficulté à un moment clé de votre parcours professionnel.
Le coaching vous apporte un regard nouveau et des possibilités inédites sur une difficulté. Il s’agit d’un dispositif d’accompagnement qui vous permet de prendre conscience de vos freins, de révéler vos compétences et aptitudes utiles à votre développement en milieu professionnel.
L’atteinte de l’objectif s’évalue par le degré d’autonomie acquis dans la situation objet du coaching.
<br />
Lors d’un coaching vous allez,
<br />
<h3 style={{fontWeight:"600"}}>Acquérir :</h3>
    Un nouveau regard sur les difficultés, une prise de conscience des obstacles.
    De nouveaux comportements et de nouveaux modes de fonctionnement.
    Une meilleure compréhension de vos émotions face aux diverses pressions et une meilleure façon de les gérer en les acceptant.
<br/><h3 style={{fontWeight:"600"}}>Mettre en œuvre :</h3>
Des actions que vous aurez décidées pour progresser vers l’atteinte de l’objectif défini.
Des actions alignées avec votre identité et vos valeurs.

    De nouveaux comportements et de nouveaux modes de fonctionnement.
    Une meilleure gestion de leurs émotions face aux diverses pressions, aux challenges et autres missions vécues comme irréalisables.
    Le décryptage des cercles vicieux qui “cristallisent” la situation dans un mode “problème”.
    Une stratégie systémique pour agir vers l’objectif choisi.
    Une cohérence entre leurs messages et leurs systèmes de valeurs.
    Plus de confiance dans leurs choix, leurs décisions et leurs ressources personnelles.
    <br />
    Coacher, ce n’est pas faire à la place de l’autre !
    </p>
    </div>

    <div className="paraP">
      <div className="separation"></div>
    <h1>Coaching individuel</h1>
    <p>
      Vous êtes en transition professionnelle, vous allez devoir changer de fonction, d’équipe, d’organisation, de hiérarchie, de structure.
       Vous vivez une relation difficile avec une équipe, un collègue, un manager, un partenaire.
       Vous éprouvez des difficultés de positionnement au sein d’une structure, dans une relation de management, dans la réalisation d’un projet, dans les échanges avec vos collègues.
      Un coaching individuel de 3 à 10 séances peut vous amener à apporter un changement qui vous permettra d’avancer vers la sérénité et d’acquérir une autonomie.
      Le coaching individuel peut être effectué au sein de l’entreprise, il est alors défini dans le cadre d’un contrat tripartite entre l’entreprise, le salarié coaché et le coach.
         Un entretien préliminaire permet à chacun de confirmer son envie de travailler avec l’autre, le coach présente les éléments nécessaires pour décider librement, le coaché expose sa problématique.
       Lors d’un entretien tripartite entre le coaché sa hiérarchie et le coach, les objectifs du coaching sont définis et le rôle de chacun est précisé.
      Les séances de coaching sont confidentielles.
      Un point d’avancement est effectué à mi-parcours avec la hiérarchie et le coaché.
      Un bilan est écrit par le coach à la fin des séances, il est relu pour validation par le coaché avant diffusion à sa hiérarchie.
    </p>
    </div>

    <div className="paraP2">
    <h1>Coaching d’équipe et atelier de co-développement</h1>
    <p>
    Vous souhaitez mettre fin à des dysfonctionnements de communication au sein d’un groupe, améliorer les résultats de votre équipe, définir et établir des outils communs facilitant la communication et la productivité.
    Un coaching d’équipe et des ateliers de co-développement répondent à ces besoins et vous permettent de développer, la participation, la prise d’initiatives, la créativité.
    Vous pourrez trouver ensemble des solutions en comprenant les problématiques d’un collègue, en proposant des actions et des processus lors d’ateliers de co-développement.
    </p>
    </div>




    </div>

    </section>
    </Layout>
  );
}

export default EnSavoirPlus;
