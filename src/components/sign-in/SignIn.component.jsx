import React from 'react';

import { signInWithGoogle } from '../../firebase/firebase.utils.js';

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='email'
                        name='email'
                        value={this.state.email}
                        required
                        label='email'
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        value={this.state.password}
                        required
                        label='password'
                        handleChange={this.handleChange} 
                    />
                    <div className="buttons">
                        <CustomButton type='submit'> 
                            Sign In
                        </CustomButton>
                        {
                            /* 
                                isGoogleSignIn is a props that we're passing to the CustomButon component.
                                we are not given it any value so that it will always be true, because that's 
                                what we need it to be. 
                            */
                        }
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;