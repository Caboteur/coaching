import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default class Slideshow2 extends React.Component {
  render() {
    return (

<div className="containerSlide" style={{display:this.props.eta}}>
  <p>« Nous participons tous à la création. Nous sommes tous des rois, poètes, musiciens, ; il n’est que de s’ouvrir comme un lotus pour découvrir ce qui est en nous. »  Henry Miller
Théâtre d’improvisation, clown de théâtre en coaching</p>
        <AwesomeSlider>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </AwesomeSlider>

</div>
    );
  }
}
