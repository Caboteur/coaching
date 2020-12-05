import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";


export default class Slideshow extends React.Component {
  render() {
    return (

<div className="containerSlide" style={{display:this.props.eta}}>
<div> <p>
<h2 style={{fontWeight:"600"}}>Atelier « Café clown »</h2><br />
Théâtre d’improvisation, clown de théâtre en coaching. <br />
Venez nous retrouver et participer à l’atelier Café Clown, où chacun peut exprimer ses émotions, trouver son clown et sa posture de vie en étant aligné sur ses valeurs en développant sa résilience et son intégrité.
Venez nous retrouver c’est aussi simple que de prendre un café !
Le café c’est aussi le lieu où chacun écoute l’autre sans jugement et s’exprime à son tour en s’enrichissant du partage.<br />
Objectif de l’atelier :
<br />
•Acquérir une nouvelle posture et les premières idées d’actions concrètes à mettre en œuvre.
<br />
•Porter un nouveau regard sur les difficultés, acquérir de nouveaux comportements.
<br />
•Oser communiquer vos idées avec clarté et conviction.
<br />
</p>


<div className="paraP2">
<p>
Lors de l’atelier « Café clown » chacun est amené, en toute bienveillance, à découvrir son clown et à s’aligner avec son identité profonde.
« Découvrir son clown » : sans doute cela vous interpelle-t-il ?
C’est en se cachant derrière un nez de clown que vous serez amené à prendre conscience de votre identité, à expérimenter la sincérité de l’instant présent, à exprimer vos émotions sans masque, et petit à petit, à votre rythme, à adopter des postures alignées avec vos valeurs, qui vous permettent de déployer le meilleur de vous-même.
</p>
</div>
</div>

        <AwesomeSlider>
          <div data-src={img1}></div>
          <div data-src={img2}></div>
          <div data-src={img3}></div>
          <div data-src={img4}></div>
          <div data-src={img5}></div>
          <div data-src={img6}></div>
        </AwesomeSlider>

</div>
    );
  }
}
