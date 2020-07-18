import React from 'react';
import './sign-up.styles.scss';
import Input from '../input/input.component';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : {
                name:'',
                username:'',
                password:'',
                confirmPassword : ''
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('Sign Up');
    };

    handleChange = ({ currentTarget: input }) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data });
    };

    render() {
        const { name, username, password, confirmPassword } = this.state.data
        return (
            <div className='sign-up'>
                <h2 className='sign-up-heading'>sign up</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input label='Name' name='name' type='text' value={name} onChange={this.handleChange} />
                    <Input label='Username' name='username' type='email' value={username} onChange={this.handleChange} />
                    <Input label='Password' name='password' type='password' value={password} onChange={this.handleChange} />
                    <Input label='Confirm Password' name='confirmPassword' type='password' value={confirmPassword} onChange={this.handleChange} />
                    <button className='sign-up-btn' type='submit'>sign up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;