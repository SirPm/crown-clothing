import React, { Component } from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import FormInput from '../form-input/FormInput.component'
import './sign-up.styles.scss'
import CustomButton from '../custom-button/CustomButton.component'

class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state

        if( password !== confirmPassword ) {
            alert("Passwords don't match")
            return
        }

        try {
            // The userAuth created with createUserWithEmailAndPassword is stored in an object
            // as the value attached to a key user. So we destructure the user property from
            // the object
            const { user } = await auth.createUserWithEmailAndPassword( email, password )

            // we add an additional parameter which is an object key value
            await createUserProfileDocument( user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className="title">I don't hava an account</h2>
                <span>Create an account with email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>                    
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput 
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp
