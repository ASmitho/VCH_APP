import React, { Component } from 'react';
import logo from "../media/psych_logo.jpg"
import './Welcome.css';
import { Redirect } from "react-router-dom";
import { QuestCreate, QuestRecompute, QuestTrials, QuestUpdate, QuestStimulate, QuestMean, QuestMode, QuestSd, QuestP, QuestPdf, QuestQuantile, PAL_Gumbel, cumsum } from "../Quest.js"
import { ch_QuestBetaAnalysis, process_data } from "../VisualQuest.js"

import { connect } from 'react-redux'
import { add_array, add_response_1 } from '../actions/data'


class Welcome extends Component {

  constructor(props) {
    super(props); 
    this.keyFunction = this.keyFunction.bind(this); 
    this.state = {
      continue: false,
    }
  }

  keyFunction(event){
    if(event.keyCode === 81) {
      alert("User has Requested to Continue");
      this.setState((state, props) => ({
        continue: true
      }));
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyFunction, false);
  }

  render() {
    var tGuess = 0.5,
      tGuessSd = 0.1,
      pThreshold = 0.75,
      beta = 3.5,
      delta = 0.01,
      gamma = 0.01,
      grain = 0.001,
      range = .05;
      
    var q1 = QuestCreate(tGuess, tGuessSd, pThreshold, beta, delta, gamma, grain, range);

    console.log(q1); 
    var q2 = QuestCreate(tGuess, tGuessSd, pThreshold, beta, delta, gamma, grain, range);
    q2.updatePdf = 1; 
    q2 = QuestUpdate(q2, 0.5, 1);

    process_data( q1, q2 );

    if(this.state.continue === true){
      return <Redirect to="/Instructions" />
    }

    return (
      <div className="Welcome">
        <input type="hidden"/>
        <header className="Welcome-header">
        <div className="text-container">
          <p className="Welcome-text">
            <span className="bigger">Welcome to the study! </span>
            <br /><br />Please enter responses to the questions asked by pressing the: 
            <br /><br /><b> 'Q' key for 'YES I SEE IT'</b> or <b> 'E' key for "NO I DO NOT'</b>
            <br /><br /><br /><br /> Sometimes it may be difficult to answer, but if you do not know, please make your best guess.
            <br /><br /><br /><br /> PRESS the <b> YES I SEE IT / 'Q' key</b> to CONTINUE
            
          </p>
        </div>      
          <a
            href="https://medicine.yale.edu/psychiatry/care/cmhc/"
            title="Learn more about the Connecticut Mental Health Center"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src={logo} className="Site-link" alt="logo" />
          </a>

        </header>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  data: state.data,
})

const mapDispatchToProps = dispatch => ({
  add_response_1: ( elem ) => dispatch(add_response_1( elem )),
  add_array: ( arr ) => dispatch(add_array( arr )),
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)