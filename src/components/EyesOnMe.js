// Code EyesOnMe Component Here
import React from 'react'
// import Filters from './Filters'
// import PetBrowser from './PetBrowser'

export default class EyesOnMe extends React.Component {
  focusOnMe = () => {
    console.log("Good!");
  }

  blurOnMe = () => {
    console.log("Hey! Eyes on me!");

  }
  render(){
    return (
      <div>
      <button onFocus={this.focusOnMe} onBlur={this.blurOnMe}></button>
      </div>
    )
  }
}
