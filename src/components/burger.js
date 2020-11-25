import React, { Component } from 'react'
import { HamburgerArrow } from 'react-animated-burgers'

class Burger extends Component {
  state = {
    isActive: false
  }

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    return (
        <HamburgerArrow isActive={this.state.isActive} toggleButton={this.toggleButton} buttonColor="#FFBC67" barColor="white" />
    )
  }
}

export default Burger
