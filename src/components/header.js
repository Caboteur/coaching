import { Link } from "gatsby";
import React from "react";
import Hamburger from 'hamburger-react'
import logo from "../images/logo.svg";


class Header extends React.Component {

  constructor() {
  super();
  this.state = {
  open: false,
  large:"0%",
  display:"none",
  isOpen:false,
  setOpen:false,
  height:"0vh"
  };
}

componentDidMount(){
    document.body.style.overflow = 'auto';
}

openMenu(){
    if (this.state.open === true){
     this.setState({large:"0%"});
     this.setState({open:false});
     this.setState({display:"none"});
   }else{
     this.setState({large:"100%"});
     this.setState({open:true});
     this.setState({display:"inherit"});
   }
}


  render() {
    return (
      <header className="Header">

      <div className="Title">
      <Link to="/">
          <img style={{height: "100%"}} src={logo} />
      </Link>
    </div>
          <div className="menuDesktop">
            <Link to="/contact">
                <div className="onglet">
                Contact
                </div>
            </Link>


            <Link to="/about">
                <div className="onglet">
                 À propos
                     </div>
            </Link>


          <Link to="/event">
            <div className="onglet">
              Ateliers
            </div>

          </Link>

          <Link to="/ensavoirplus">
            <div className="onglet">
              En savoir plus
            </div>

          </Link>

          <Link to="/nosprestations">
            <div className="onglet">

               Nos accompagnements
             </div>

          </Link>


          </div>
          <div className="mobilee" style={{height:this.state.height}}>
          <div className="mobile-menu" style={{width:this.state.large, display:this.state.display}}>
            <Link to="/nosprestations">
              <div className="onglet">

                 Nos accompagnements
               </div>

            </Link>
            <Link to="/ensavoirplus">
              <div className="onglet">
                En savoir plus
              </div>

            </Link>
            <Link to="/event">
              <div className="onglet">
                Ateliers
              </div>

            </Link>
            <Link to="/about">
                <div className="onglet">
                 À propos
                     </div>
            </Link>
            <Link to="/contact">
                <div className="onglet">
                Contact
                </div>
            </Link>

          </div>

          <Hamburger  onToggle={toggled => {
              if (toggled) {    this.setState({large:"110%"});
              this.setState({open:true});
              this.setState({display:"inherit"});
              this.setState({height:"100vh"});
              document.body.style.overflow = 'hidden'


            } else {    this.setState({large:"0%"});
            this.setState({height:"0vh"});
            this.setState({open:false});
            this.setState({display:"none"});
            document.body.style.overflow = 'auto'

          }
        }} toggle={this.state.setOpen} />


</div>
      </header>
    )
  }
}

export default Header;
