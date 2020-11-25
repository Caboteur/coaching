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
<div> <p>« Nous participons tous à la création. Nous sommes tous des rois, poètes, musiciens, ; il n’est que de s’ouvrir comme un lotus pour découvrir ce qui est en nous. »  Henry Miller
Théâtre d’improvisation, clown de théâtre en coaching</p></div>

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
