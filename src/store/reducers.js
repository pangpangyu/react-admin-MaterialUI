import { combineReducers } from 'redux'

import defaultState from './state.js'

function setTest(state = defaultState.test, action){
  switch (action.type) {
    case 'SET_TEST_TXT':
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  setTest
})
