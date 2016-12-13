import React, { Component } from 'react';
import './css/Resume.css';
import Header from './Header'

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <Header/>
        <a className="download" href="https://www.pdf-archive.com/2016/12/13/shihaoresume/shihaoresume.pdf" download="ShiHaoResume">Download Resume</a>
        <img className="resumeImg" src="http://i.imgur.com/dXjCmHk.jpg"/>
      </div>
    );
  }
}

export default Resume;
