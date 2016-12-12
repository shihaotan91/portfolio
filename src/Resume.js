import React, { Component } from 'react';
import './css/Resume.css';
import Header from './Header'

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <Header/>
        <img className="resumeImg" src="http://i.imgur.com/AxZsyVJ.jpg)"/>
      </div>
    );
  }
}

export default Resume;
