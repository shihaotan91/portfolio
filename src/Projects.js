import React, { Component } from 'react';
import logo from './logo.svg';
import './css/Projects.css';
import Header from './Header'

import $ from 'jquery'

class Projects extends Component {

  constructor() {
    super()

    this.scrollToChar = this.scrollToChar.bind(this)
    this.scrollToJournal = this.scrollToJournal.bind(this)
    this.scrollToMeal = this.scrollToMeal.bind(this)
    this.scrollToRE = this.scrollToRE.bind(this)
    this.scrollToTTT = this.scrollToTTT.bind(this)
    this.scrollToTop = this.scrollToTop.bind(this)
  }


    scrollToChar() {
    // alert("hello world")
    $('html,body').animate({
        scrollTop: $("#charTitle").offset().top},
        'slow');
    }

    scrollToJournal() {
    // alert("hello world")
    $('html,body').animate({
        scrollTop: $("#journalTitle").offset().top},
        'slow');
    }

    scrollToMeal() {
    // alert("hello world")
    $('html,body').animate({
        scrollTop: $("#mealboxTitle").offset().top},
        'slow');
    }

    scrollToRE() {
    // alert("hello world")
    $('html,body').animate({
        scrollTop: $("#RETitle").offset().top},
        'slow');
    }

    scrollToTTT() {
    // alert("hello world")
    $('html,body').animate({
        scrollTop: $("#tttTitle").offset().top},
        'slow');
    }

    scrollToTop() {
    // alert("hello world")
    $('html,body').animate({
        scrollTop: $(".Projects").offset().top},
        'slow');
    }

  render() {

    $(document).ready(function() {
    $('.rollover').css('display', 'none');
    $('.wrapper').hover(function() {
        $(this).children('.rollover').slideDown(250);
    }, function() {
        $(this).children('.rollover').slideUp(250);
      });
    });

    $(".test").click(function() {
    alert('hello world')
    });

    // $(".first").click(function() {
    // $('html,body').animate({
    //     scrollTop: $(".second").offset().top},
    //     'slow');
    // });

    return (

      <div className="Projects">
        <Header/>

        <button className="backToTop" onClick={this.scrollToTop}><h2 className="arrow">↑</h2></button>

        <h1 className="projectMain">Projects</h1>
        <h4 className="shy">Dont' be shy, click on it...</h4>

        <div className="gifRow">

        <a className="wrapper" id="right" onClick={this.scrollToChar}>
        <img id="charGif" className="gif"
        src="http://i.imgur.com/LE9aKb3.gif"/>
        <span className="rollover">
        <h4>Char Burn Char</h4>
        <p>This is a classic 2d shooter game re-created with pokemon skins.</p>
        </span>
        </a>

        <a className="wrapper"
        onClick={this.scrollToJournal}>
        <img id="journalGif" className="gif" src="http://i.imgur.com/DOy0BJa.gif"/>
        <span className="rollover">
        <h4>Travel Journal</h4>
        <p>A photo sharing web application inspired by Instagram. </p>
        </span>
        </a>

        <a className="wrapper"
        onClick={this.scrollToMeal}>
        <img id="mealboxGif" className="gif" src="http://i.imgur.com/a5I6wRk.gif"/>
        <span className="rollover">
        <h4>MealBox</h4>
        <p>A social networking cum e-commerce site that allows users to create, share and check nutritional values of their recipes.</p>
        </span>
        </a>

        <br/>

        <a className="wrapper"
        onClick={this.scrollToRE}>
        <img id="resumeGif" className="gif"
        src="http://i.imgur.com/OPiXggt.gif"/>
        <span className="rollover">
        <h4>ResumeExpress</h4>
        <p>A web application where users can log in with facebook and create resumes just by filling up a form.</p>
        </span>
        </a>

        <a className="wrapper"
        onClick={this.scrollToTTT}>
        <img id="tttGif" className="gif"
        src="http://i.imgur.com/g5bsRzs.gif"/>
        <span className="rollover">
        <h4>Tic Tac Toe</h4>
        <p>A simple Tic Tac Toe game created with Javascript.</p>
        </span>
        </a>

        </div>

        <hr/>

        <h2 id="charTitle" className="projectTitle">Char Burn Char</h2>
        <p className="projectDesc">A classic 2D shooter game re-created with Pokemon skins. As the player evolves or levels up, so does the difficulty. Player can also pick up potions and powerups along the way. Wanna be the very best? First you’ve to defeat the final boss! <br/><br/><span className="created">Created with Javascript</span></p>
        <img className="screenshot" src="http://i.imgur.com/9i5uBud.png"/>

        <a href="https://shihaotan91.github.io/CharBurnChar/" target="_blank"  className="linkto">Website</a>
        <a href="https://github.com/shihaotan91/CharBurnChar" target="_blank" className="linkto">Source Code</a>
        <hr/>

        <h2
        id="journalTitle"
        className="projectTitle">Travel Album</h2>
        <p className="projectDesc">A photo sharing web application inspired by Instagram. Users can create account, upload their photos and comment on other users photo. Users can also tag the location of where their photos are taken at. <br/><br/><span className="created">Created with Javascript, Express, Node.js and MongoDB</span></p>
        <img className="screenshot" src="http://i.imgur.com/tekEf99.png"/>
        <a href="https://shihao-project2.herokuapp.com/" className="linkto" target="_blank">Website</a>
        <a href="https://github.com/shihaotan91/Travel-Album" className="linkto" target="_blank">Source Code</a>

        <hr/>

        <h2
        id="mealboxTitle"
        className="projectTitle">Mealbox (Group Project)</h2>
        <p className="projectDesc">A social networking cum e-commerce site
        that allows users to create, share and
        check nutritional values of their recipes.
         Users can then deliver the exact ingredients(to the nearest grams…) of those recipes to their doorsteps through Paypal.<br/><br/><span className="created">Created with Ruby on Rails and SQL</span></p>
        <img className="screenshot" src="http://i.imgur.com/JXyLGaR.png"/>
        <a href="https://mealbox.herokuapp.com/" className="linkto" target="_blank">Website</a>
        <a href="https://github.com/shihaotan91/mealbox-app" className="linkto" target="_blank">Source Code</a>

        <hr/>

        <h2
        id="RETitle" className="projectTitle">ResumeExpress(WIP)</h2>
        <p className="projectDesc">A web application where users can log
        in with facebook and create resumes.
        Users can fill up a form and see their
        resume being created in real time. They
        can also save their resumes as PDF files.<br/><br/><span className="created">Created with Javascript(ES6), React, Firebase</span></p>
        <img className="screenshot" src="http://i.imgur.com/2em9hDh.png"/>
        <a href="https://resumeexpress.herokuapp.com/" className="linkto" target="_blank">Website</a>
        <a href="https://github.com/shihaotan91/ResumeExpress_Production" className="linkto" target="_blank">Source Code</a>

        <hr/>

        <h2
        id="tttTitle" className="projectTitle">Western TicTacToe</h2>
        <p className="projectDesc">A simple Tic Tac Toe game made with western skins. Created this during the first week of my WDI course with GA.<br/><br/><span className="created">Created with Javascript</span></p>
        <img className="screenshot" src="http://i.imgur.com/rd8nNL0.png"/>
        <a href="https://shihaotan91.github.io/tictactoe/" className="linkto" target="_blank">Website</a>
        <a href="https://github.com/shihaotan91/tictactoe/" className="linkto" target="_blank">Source Code</a>

      </div>
    );
  }
}

export default Projects;
