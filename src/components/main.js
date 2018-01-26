import React from 'react';
import {connect} from 'react-redux';
import {userInput, resetValues} from '../actions/actions';
import store from '../store';
import Results from './results';
import './main.css';

export class Main extends React.Component{
  
  resetValues(){
    this.props.dispatch(resetValues());
    this.input.value = '';
    this.firstMeasurement.value = 'Fahrenheit';
    this.secondMeasurement.value = 'Fahrenheit';
  }
  sendInputToReducer(){
    let values = {
      inputVal: this.input.value,
      firstMeasurement: this.firstMeasurement.value,
      secondMeasurement: this.secondMeasurement.value,
    }
    this.props.dispatch(userInput(values))
  }

  render(){
    return(
      <div className="container">
        <h1 className="pageTitle">My Measurement Converter</h1>
        <div className="formContainer">
          <form>
            <label>From:</label>
            <select ref={text => this.firstMeasurement = text}>
              <option value="Fahrenheit" defaultValue>Fahrenheit</option>
              <option value="Celsius" >Celsius</option>
              <option value="Miles" >Miles</option>
              <option value="Kilometers" >Kilometers</option>
              <option value="Pounds" >Pounds</option>
              <option value="Kilograms" >Kilograms</option>
            </select>
          </form>
          
          <form>
            <label>To:</label>
            <select ref={text => this.secondMeasurement = text}>
              <option value="Fahrenheit" defaultValue>Fahrenheit</option>
              <option value="Celsius" >Celsius</option>
              <option value="Miles" >Miles</option>
              <option value="Kilometers" >Kilometers</option>
              <option value="Pounds" >Pounds</option>
              <option value="Kilograms" >Kilograms</option>
            </select>
          </form>
        </div>
        <div className="inputBtnsDiv">
          <input placeholder="value" type="text" ref={input => (this.input = input)} />
          <button className="submitInput" onClick={this.sendInputToReducer.bind(this)}>Submit</button>
          <button className="resetInput" onClick={this.resetValues.bind(this)}>Reset</button>
        </div>  
        <Results />
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

export default connect(mapStateToProps)(Main);
