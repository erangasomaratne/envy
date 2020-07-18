import React from 'react';
import Input from '../input/input.component';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : {
                username:'',
                password:''
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('submitted');
    };

    handleChange = ({ currentTarget: input }) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data });
    };

    render(){
        const { username, password } = this.state.data;
        return (
            <div className='sign-in'>
                <h2 className='sign-in-heading'>sign in</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input label='Username' name='username' type='email' value={username} onChange={this.handleChange} />
                    <Input label='Password' name='password' type='password' value={password} onChange={this.handleChange} />
                    <button className='sign-in-btn' type='submit'>sign in</button>
                </form>
            </div>
        );
    }
}

export default SignIn;