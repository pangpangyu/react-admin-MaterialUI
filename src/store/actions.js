export function setTestTxt (data) {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_TEST_TXT', data: data })
  }
}