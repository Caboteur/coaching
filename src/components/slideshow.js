import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import PropTypes from "prop-types";


import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";


export default class Slideshow extends React.Component {
  render() {
    console.log(this.props.tarif);
      console.log(Number(this.props.date));
        console.log(Number(this.props.lieu));
    return (

<div className="containerSlide" style={{display:this.props.eta}}>
<div> <p>
<h2 style={{fontWeight:"600"}}>Atelier « Café clown »</h2>
<br />
Venez nous retrouver et participer à l’atelier Café Clown, où chacun peut exprimer ses émotions, trouver son clown et sa posture de vie en étant aligné sur ses valeurs en développant sa résilience et son intégrité.<br/>
<b>Venez nous retrouver !</b><p id="strongwordblue">C’est aussi simple que de prendre un café!</p>Le café c’est aussi le lieu où chacun écoute l’autre sans jugement et s’exprime à son tour en s’enrichissant du partage.<br /><b>Objectifs de l’atelier :</b><br />
•Acquérir une nouvelle posture et les premières idées d’actions concrètes à mettre en œuvre.
<br />
•Porter un nouveau regard sur les difficultés, acquérir de nouveaux comportements.
<br />
•Oser communiquer vos idées avec clarté et conviction.
<br />
</p>



  {this.props.tarif === 0 && Number(this.props.date)=== 0 && Number(this.props.lieu) === 0
          ? <div></div>
          :
          <div id="newEvent"><h2>Nouvel évènement café clown!</h2>

                    <div>{this.props.date}</div>
          <div><a href={`http://maps.google.com/maps?q=${this.props.lieu}`}>{this.props.lieu}</a></div>
            <iframe id="iframe" width="100%" height="600"  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBLUfDguq9ImNVwADrrkh3BmSBn2lCHBt0&q=${this.props.lieu}`}></iframe>
          <div>{this.props.tarif}€</div>

          </div>

        }

<div className="paraP2">
<p>
Lors de l’atelier « Café clown » chacun est amené, en toute bienveillance, à <p style={{display:"inline-block"}} id="strongwordblue">découvrir son clown</p> et à s’aligner avec son identité profonde.<br /><b>« Découvrir son clown » </b>: sans doute cela vous interpelle-t-il ?
C’est en se cachant derrière un nez de clown que vous serez amené à prendre conscience de votre identité, à expérimenter la sincérité de l’instant présent, à exprimer vos émotions sans masque, et petit à petit, à votre rythme, à adopter des postures alignées avec vos valeurs, qui vous permettent de déployer le meilleur de vous-même.
</p>
</div>
</div>

<p>
Un atelier créé et animé par Bernard Lafage et Alain Bouthier.
Organisé par le Théâtre du Dégel
</p>

        <AwesomeSlider>
          <div data-src={img1}></div>
          <div data-src={img2}></div>
          <div data-src={img3}></div>
          <div data-src={img4}></div>
          <div data-src={img5}></div>
        </AwesomeSlider>

</div>
    );
  }
}

Slideshow.propTypes = {
eta: PropTypes.string,
lieu: PropTypes.string,
date: PropTypes.any,
tarif: PropTypes.any,
};
