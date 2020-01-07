import React from "react";
import { connect } from 'react-redux';
import { setTestTxt } from '../../store/actions.js'
import Button from '../../components/button.js';

class User extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
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
