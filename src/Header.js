import React, { Component } from 'react';
import Router from 'react-router'
import './css/Header.css';

class Header extends Component {
  constructor() {
    super()

    this.goToHome = this.goToHome.bind(this)
    this.goToProjects = this.goToProjects.bind(this)
    this.goToResume = this.goToResume.bind(this)
    // this.alert1 = this.alert1.bind(this)
  }

  goToHome() {
    this.context.router.transitionTo(`/`)
  }

  // alert1() {
  //   alert("dsahdkasd")
  // }

  goToProjects() {
    this.context.router.transitionTo(`/projects`)
  }

  goToResume() {
    this.context.router.transitionTo(`/resume`)
  }

  render() {
    return (
      <div className="header">
        <img className="homeLogo" src="http://i.imgur.com/kHhKxoa.png"/>
        <h3 onClick={this.goToHome} className="home">Home</h3>
        <img className="projectsLogo" src="http://i.imgur.com/xriwA89.png"/>
        <h3 onClick={this.goToProjects} className="projects">Projects</h3>
        <img className="resumeLogo" src="http://i.imgur.com/mmsBqfF.png"/>
        <h3 onClick={this.goToResume} className="resume">Resume</h3>
      </div>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object
}

export default Header;
