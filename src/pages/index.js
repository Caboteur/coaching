import React from "react";
import { Link} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import rond from "../images/rond.svg";
import profil from "../images/profil.jpg";


function IndexPage() {

  console.log('removing service worker')
if (typeof window !== 'undefined') {
  if ('serviceWorker' in window.navigator) {
    window.navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Accueil"
        />
      <section className="text-center">
        <div className="Image">

        </div>

        <div className="blockIntro" >

          <p className="titlePhrase">  «Se conquérir et se vaincre soi-même est la première et la plus noble de toutes les victoires» Platon </p>

        </div>


        <div className="blockPostIntro" style={{backgroundImage: "url(" + rond + ")", backgroundRepeat:"no-repeat"}}>


          <h1>FAITES ÉMERGER VOTRE POTENTIEL</h1>


          <p  style={{textAlign: "left"}}>Envie d’évolution ? <br />
            Vous êtes salarié, en transition professionnelle ou en recherche d’emploi, créateur d’entreprise, manager, ou adhérent aux organismes d’aide à l’emploi et à la réinsertion professionnelle, vous souhaitez évoluer? <br/> <br/> Je vous accompagne pour que vous trouviez du sens et de l’efficience dans votre parcours professionnel.</p>
        <div className="containpara">

          <p >Dans une époque où nous devons nous appuyer sur nos propres ressources pour évoluer, pour s’adapter pour enrichir nos connaissances et faire face aux évènements qui jalonnent notre vie professionnelle et personnelle, je vous fais prendre conscience de ce qui vous freine, je vous amène à développer votre potentiel et votre confiance en vous. <br/>
            Ainsi vous serez amené à préciser le projet professionnel qui a du sens pour vous, qui est en harmonie avec vos valeurs afin d’exercer votre métier de façon épanouissante.
          </p>
            <Link to="/about"><img className="backprofil" src={profil} />  </Link>

        </div>

          <p style={{textAlign: "left"}}>Bernard Lafage - Coach professionnel certifié.
            Responsable de missions de conseils et d’équipes pluridisciplinaires pendant plus de 35 ans dans de grands groupes industriels et de services, j’ai eu à cœur d’accompagner des équipes pour relever des défis dans un esprit collaboratif et bienveillant, pour favoriser l’autonomie de chacun, le développement des savoirs faire, savoir être et oser vivre des aventures humaines.</p>
          <button className="follow"><Link to="/contact">Prenez rendez-vous pour une séance découverte</Link></button>
            <button className="follow"><Link to="/nosprestations">Nos accompagnements</Link></button>



        </div>


      </section>
    </Layout>
  );
}

export default IndexPage;
