import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import './results.css';

export class Results extends React.Component{

  render(){
    let results = store.getState().results;
    return(
      <div className="resultsText">
        <h2>{results}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  inputVal: state.inputVal,
  firstMeasurement: state.firstMeasurement,
  secondMeasurement: state.secondMeasurement,
  conversion: state.conversion 
});

export default connect(mapStateToProps)(Results);