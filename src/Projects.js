import React, { Component } from 'react';
import logo from './logo.svg';
import './css/Projects.css';
import Header from './Header'

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <Header/>

        <h1 className="projectMain">Projects</h1>
        <h2 className="projectTitle">Char Burn Char</h2>
        <p className="projectDesc">A classic 2D shooter game with Pokemon skins. As the player levels up, so does the difficulty. Wanna be the very best? First you’ve to defeat the final boss! <br/><br/><span className="created">Created with Javascript</span></p>
        <img className="screenshot" src="http://i.imgur.com/9i5uBud.png"/>
        <a href="https://github.com/shihaotan91/project1b-test" className="linkto">Website</a>
        <a href="https://shihaotan91.github.io/project1b-test/" className="linkto">Source Code</a>

        <hr/>

        <h2 className="projectTitle">Travel Journal</h2>
        <p className="projectDesc">A photo sharing web application inspired by Instagram. Users can create account, upload their photos and comment on other users photo. Users can also tag the location of where their photos are taken at. <br/><br/><span className="created">Created with Javascript, Express, Node.js and MongoDB</span></p>
        <img className="screenshot" src="http://i.imgur.com/tekEf99.png"/>
        <a href="https://shihao-project2.herokuapp.com/" className="linkto">Website</a>
        <a href="https://github.com/shihaotan91/project2" className="linkto">Source Code</a>

        <hr/>

        <h2 className="projectTitle">Mealbox</h2>
        <p className="projectDesc">A social networking cum e-commerce site
        that allows users to create, share and
        check nutritional values of their recipes.
        Users can also deliver those recipes to their
        doorsteps with Paypal.<br/><br/><span className="created">Created with Ruby on Rails and SQL</span></p>
        <img className="screenshot" src="http://i.imgur.com/JXyLGaR.png"/>
        <a href="https://mealbox.herokuapp.com/" className="linkto">Website</a>
        <a href="https://github.com/shihaotan91/mealbox-app" className="linkto">Source Code</a>

        <hr/>

        <h2 className="projectTitle">ResumeExpress(WIP)</h2>
        <p className="projectDesc">A web application where users can log
        in with facebook and create resumes.
        Users can fill up a form and see their
        resume being created in real time. They
        can also save their resumes as PDF files.<br/><br/><span className="created">Created with Javascript(ES6), React, Firebase</span></p>
        <img className="screenshot" src="http://i.imgur.com/2em9hDh.png"/>
        <a href="https://resumeexpress.herokuapp.com/" className="linkto">Website</a>
        <a href="https://github.com/shihaotan91/ResumeExpress_Heroku" className="linkto">Source Code</a>

        <hr/>

        <h2 className="projectTitle">Western TicTacToe</h2>
        <p className="projectDesc">A simple tictactoe game made with western skins. Created this during the first week of my WDI course with GA.<br/><br/><span className="created">Created with Javascript</span></p>
        <img className="screenshot" src="http://i.imgur.com/rd8nNL0.png"/>
        <a href="https://github.com/shihaotan91/tictactoe/" className="linkto">Website</a>
        <a href="https://shihaotan91.github.io/tictactoe/" className="linkto">Source Code</a>

      </div>
    );
  }
}

export default Projects;
