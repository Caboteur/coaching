import React from 'react';
import 'react-awesome-slider/dist/styles.css';
import people from "../images/people.jpg";
import PropTypes from "prop-types";


export default class Slideshow2 extends React.Component {
  render() {
    return (


      <div className="containerSlide" style={{display:this.props.eta}}>
      <div> <p>
      <h2 style={{fontWeight:"600"}}>Atelier « Carrière Coach »</h2><br />
        Vous vous posez des questions concernant votre situation professionnelle, sur l’évolution de votre parcours professionnel ?
  Vous êtes en transition professionnelle, vous avez des difficultés de management, vous avez peur du changement, vous avez des doutes sur votre positionnement, vous souhaitez une aide pour vous présenter à des recruteurs ?
  Vous éprouvez des difficultés dans votre équilibre vie privée, vie professionnelle ? Vous avez l’impression de ne pas avoir le temps ?
      </p>


      <div className="paraP2">
      <p>
        Inscrivez-vous à un entretien individuel préalable de 30 minutes en distanciel pour faire le point et exposer votre problématique, je pourrai vous proposer de vous accompagner en quelques séances d’1h30 pour que vous trouviez à votre rythme les actions à mettre en œuvre.

      </p>
      </div>
      </div>

          <img id="imgStatic" src={people} />


</div>
    );
  }
}


Slideshow2.propTypes = {
eta: PropTypes.string
};
