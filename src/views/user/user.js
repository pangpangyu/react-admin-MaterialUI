import React from "react";
import { connect } from 'react-redux';
import { setTestTxt } from '../../store/actions.js'
import Button from '../../components/button.js';
// function User(props) {
//   console.log(props)
//   let { setTestTxt } = props
//   setTestTxt('222222222222')
//   let { test } = props
//   return (
//     <div>User {test}</div>
//   );
// }

class User extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    let { setTestTxt } = this.props
    setTestTxt('56555555555555555555555555')
  }
  setTestTxt = (data) => {
    return this.props.setTestTxt(data)
  }
  setTxt = () => {
    let t = new Date().getTime() + ''
    this.setTestTxt(t)
  }
  render(){
    let { test } = this.props
    return (
      <div>User {test} <Button onClick={this.setTxt}>123456</Button></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    test: state.setTest
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setTestTxt (data) {
      dispatch(setTestTxt(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
