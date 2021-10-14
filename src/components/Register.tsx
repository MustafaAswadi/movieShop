import React, { PureComponent } from 'react';
import Joi from 'joi';
import form from './common/form';


 
class Register extends form {
    state = {
        data: { username: '', password: '', name: ''},
        errors: { }
    };

    schema = Joi.object({
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().min(5).label('Password'),
        name: Joi.string().required().label('Name'),

    });

    doSubmit =() => {
        //......
    }


    render() { 
        return (
            <div className='container card col-6' >
                <form onSubmit={this.handeSubmit} style={{margin:'20px'}}>
                    <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Register</h1>
                    {this.renderInput('username','Username')}
                    {this.renderInput('password','Password', 'password')}
                    {this.renderInput('name','Name')}
                    {this.renderBtn('Register')}
                </form>
            </div>
        );
    }
}
 
export default Register;