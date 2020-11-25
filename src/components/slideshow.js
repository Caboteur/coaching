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

        <AwesomeSlider>
          <div><img src={img1} /></div>
          <div><img src={img2} /></div>
          <div><img src={img3} /></div>
          <div><img src={img4} /></div>
        </AwesomeSlider>

    );
  }
}
