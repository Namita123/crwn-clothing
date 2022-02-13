import React, { Component } from 'react'
import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';
import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';
export default class SignIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       'email':'',
       'password':''
    }
    
  }
  HandleClick = (event) => { 
    event.preventDefault();  
    this.setState({email:'', password:''}) 
}

handleChange = (event) => {
const {name, value}= event;

this.setState({[name]: value})
}
  
    render() {

    return (
      <div className='sign-in'>
          <h2>I already have a account</h2>
          <span>Sign In with your email and password</span>

          <form onSubmit={this.HandleClick}>
              <FormInput name="email" type="email" value={this.state.value} handleChange={this.handleChange} label='email' required/>
              <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label='password' required/>
              <div className='buttons'>
              <CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
              <CustomButton type="submit" value="Submit Form" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
              </div>
          </form>
      </div>
    )
  }
}
