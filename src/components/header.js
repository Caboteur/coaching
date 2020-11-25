import { Link } from "gatsby";
import React, {Component} from "react";
import Hamburger from 'hamburger-react'


class Header extends React.Component {

  constructor() {
  super();
  this.state = {
  open: false,
  large:"0%",
  display:"none",
  isOpen:false,
  setOpen:false,
  };
}

openMenu(){
    if (this.state.open === true){
     this.setState({large:"0%"});
     this.setState({open:false});
     this.setState({display:"none"});
     console.log("ok");
   }else{
     this.setState({large:"100%"});
     this.setState({open:true});
     this.setState({display:"inherit"});
     console.log("pasok");
   }
}


  render() {
    return (
      <header className="Header">

      <div className="Title">
      <Link to="/">
          Cabinet BL Conseil
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
                 A propos
                     </div>
            </Link>

          <Link to="/event">
            <div className="onglet">
              Ateliers
            </div>

          </Link>
          <Link to="/nosprestations">
            <div className="onglet">

               Nos prestations
             </div>

          </Link>
          </div>
          <div className="mobilee">
          <div className="mobile-menu" style={{width:this.state.large, display:this.state.display}}>
            <Link to="/nosprestations">
              <div className="onglet">

                 Nos prestations
               </div>

            </Link>
            <Link to="/event">
              <div className="onglet">
                Ateliers
              </div>

            </Link>
            <Link to="/about">
                <div className="onglet">
                 A propos
                     </div>
            </Link>
            <Link to="/contact">
                <div className="onglet">
                Contact
                </div>
            </Link>






          </div>

          <Hamburger  onToggle={toggled => {
              if (toggled) {    this.setState({large:"100%"});
              this.setState({open:true});
              this.setState({display:"inherit"});


            } else {    this.setState({large:"0%"});
            this.setState({open:false});
            this.setState({display:"none"});

          }
        }} toggle={this.state.setOpen} />


</div>
      </header>
    )
  }
}

export default Header;
