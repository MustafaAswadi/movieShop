import React from 'react';
import Form from './common/form';
import Joi from 'joi';

class Login extends Form {
    state = {
        data: { username: '', password: ''},
        errors: { }
    };

    schema = Joi.object({
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),
    })

    doSubmit =() => {
        //......
    }
    
    render() {
        return (
            <div className='container card col-6' style={this.containerStyle}>
                <form onSubmit={this.handeSubmit}>
                    <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>LOGIN</h1>
                    {this.renderInput('username','Username')}
                    {this.renderInput('password','Password', 'password')}
                    {this.renderBtn('Login')}
                </form>
            </div>
        );
    }
    containerStyle = {
        padding: ' 40px', marginTop: '60px'
    }


}


export default Login;