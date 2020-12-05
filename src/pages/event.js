import React from "react";
import Slideshow from "../components/slideshow.js";
import Slideshow2 from "../components/slideshow2.js";
import Layout from "../components/layout";
import SEO from "../components/seo";

class Event extends React.Component {

  constructor() {
  super();
  this.state = {
  display1:"inherit",
  display2:"none",
  color1:"#ffd9da",
  color2:"#3f50b5"
  };
}

btn1(){
  this.setState({display1:"inherit"});
  this.setState({display2:"none"});
    this.setState({color1:"#ffd9da"});
      this.setState({color2:"#3f50b5"});

}

btn2(){
  this.setState({display1:"none"});
  this.setState({display2:"inherit"});
  this.setState({color1:"#3f50b5"});
    this.setState({color2:"#ffd9da"});
}

  render() {
    return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
    <p className="TitleEvent">« Nous participons tous à la création. Nous sommes tous des rois, poètes, musiciens, ; il n’est que de s’ouvrir comme un lotus pour découvrir ce qui est en nous. »  Henry Miller</p>

    <div className="containerBtn">
      <button  onClick={this.btn1.bind(this)} className="follow"><a style={{background:this.state.color1}}>Café Clown</a></button>
      <button  onClick={this.btn2.bind(this)} className="follow"><a style={{background:this.state.color2}}>Atelier 2</a></button>
      </div>


              <Slideshow eta={this.state.display1}/>
        <Slideshow2 eta={this.state.display2}/>


    </Layout>
  );
}
}

export default Event;
