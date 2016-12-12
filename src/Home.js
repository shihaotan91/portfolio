import React, { Component } from 'react';
import './css/Home.css';
import Header from './Header'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header className="header"/>
        <h1 className="hello"> Hi there! </h1>
        <h1 className="im"> I'm </h1>
        <h1 className="shihao"> SHI HAO.</h1>
        <br/>
        <h1 className="a">A</h1>
        <h1 className="full">full stack developer</h1>
        <br/>
        <h1 className="based">based in</h1>
        <h1 className="singapore">Singapore.</h1>
        <br/>
        <a href="mailto:shihaotan91@gmail.com"><h3 className="contact">shihaotan91@gmail.com</h3></a>
        <h3 className="contact">|</h3>
        <h3 className="contact">(+65) 98372672</h3>
        <h3 className="contact">|</h3>
        <a href="https://github.com/shihaotan91/"><h3 className="contact">https://github.com/shihaotan91/</h3></a>
      </div>
    );
  }
}

export default Home;
