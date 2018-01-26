export const USER_INPUT = 'USER_INPUT';
export const RESET = 'RESET';

export const userInput = payload => ({
  type: USER_INPUT,
  payload
}); 

export const resetValues = () => ({
  type: RESET
});