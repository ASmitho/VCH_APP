import React, { Component } from 'react';
import './Complete.css';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

class Complete extends Component {

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
        console.log(this.props.data);

        if(this.state.continue === true){
      return <Redirect to="/TrialQ" />
    }
    
        return (
          <div className="Complete">
            <header className="Complete-header">
            <div className="text-container">
              <p className="Complete-text">
                Congratulations
                <br /><br /> You have completed the first trial
                <br /><br /> You responses have been recorded:
                <br /><br />
                Responses:
                { this.props.data.responses_1.map( function( d, idx) { 
                  return (<li key={idx} style={{ listStyleType: "none"}}>{d}</li>)
                }) }
                Response Times:
                { this.props.data.response_time_1.map( function( d, idx) { 
                  return (<li key={idx} style={{ listStyleType: "none"}}>{d}</li>)
                }) }
                Contrasts:
                { this.props.data.contrast_1.map( function( d, idx) { 
                  return (<li key={idx} style={{ listStyleType: "none"}}>{d}</li>)
                }) }
                <br /><br />
              </p>
            </div>     
            </header>
          </div>
        );
      }
    }

const mapStateToProps = state => ({
  data: state.data,
})

export default connect(mapStateToProps)(Complete)
