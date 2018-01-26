// //import React from 'react';
// import userReducer from './userReducer';

// import {combineReducers} from 'redux';

// const rootReducer = combineReducers({user: userReducer});

// export default rootReducer;

import {USER_INPUT, RESET} from '../actions/actions' 

const initialState = { 
  inputVal: '',
  firstMeasurement: '',
  secondMeasurement: '',
  conversion: '',
  results: ''
}

export default (state=initialState, action) => {
  if(action.type === USER_INPUT){
    let conversion;
    let firstMeasurement;
    let secondMeasurement;
    let results;
    if(!action.payload.firstMeasurement){
      firstMeasurement = 'Fahrenheit'
    }else{
      firstMeasurement = action.payload.firstMeasurement
    }
    if(!action.payload.secondMeasurement){
      secondMeasurement = 'Fahrenheit'
    }else{
      secondMeasurement = action.payload.secondMeasurement
    }
    if(firstMeasurement == 'Fahrenheit' && secondMeasurement == 'Celsius'){
      conversion = (action.payload.inputVal - 32) * 0.5556
    }
    else if(firstMeasurement == 'Celsius' && secondMeasurement == 'Fahrenheit'){
      conversion = action.payload.inputVal * 1.8 + 32
    }
    else if(firstMeasurement == 'Miles' && secondMeasurement == 'Kilometers'){
      conversion = action.payload.inputVal * 1.609344
    }
    else if(firstMeasurement == 'Kilometers' && secondMeasurement == 'Miles'){
      conversion = action.payload.inputVal / 1.609344
    }
    else if(firstMeasurement == 'Pounds' && secondMeasurement == 'Kilograms'){
      conversion = action.payload.inputVal *  0.45359237
    }
    else if(firstMeasurement == 'Kilograms' && secondMeasurement == 'Pounds'){
      conversion = action.payload.inputVal / 0.45359237
    }
    if(!conversion || !action.payload.inputVal){
      results = 'There is no conversion for your selections. Please complete all fields and try again.'
    }else{
      results = `The conversion of ${firstMeasurement} to ${secondMeasurement} is ${conversion.toFixed(2)}`
    }
    return Object.assign({}, state, {
      inputVal: action.payload.inputVal,
      firstMeasurement: firstMeasurement, 
      secondMeasurement: secondMeasurement, 
      conversion: conversion,
      results: results
    });
  }
  if(action.type === RESET){
    console.log(action)
    console.log(state)
    return Object.assign({}, state, {
      inputVal: '',
      firstMeasurement: '',
      secondMeasurement: '',
      conversion: '',
      results: ''
    });
  }
  else{
    return state;
  }
}

