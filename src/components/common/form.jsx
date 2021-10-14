import React, { Component } from 'react';
import Joi from 'joi';
import Input from './Input';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };
    
    validate = () => {
        const {error} = this.schema.validate(this.state.data, { abortEarly: false })
        if (!error) return null;
        const errors = {username: '', password: ''}
        for(let item of error.details)
            errors[item.path[0]]= item.message;
        return errors;
        
        //======= withOut JOI
        // const errors = {username: '', password: ''}
        // const {data} = this.state;
        // if(data.username.trim() === '')
        //     errors.username = 'Username is required'
        // if(data.password.trim() === '')
        //     errors.password = 'Password is required'
        // return Object.keys(errors).length === 0 ? null : errors;

    };

    validateProperty = ({ name, value }) => {
        const obj ={ [name]: value}
        const schema = Joi.object({[name]: Joi.string().required().label(name)})
        const {error} = schema.validate(obj, { abortEarly: false })
        return error ? error.details[0].message: null;
        
        //======= withOut JOI
        // if (name === 'username') {
        //     if (value.trim() === '') return "Username is required.";
        // }
        // if (name === 'password') {
        //     if (value.trim() === '') return "Password is required.";
        // }


    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors }
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name]

        const data = { ...this.state.data }
        data[input.name] = input.value;
        this.setState({ data, errors })
    };

    
    handeSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} })
        if (errors) return;

        this.doSubmit();

    };

    renderBtn =(lebal) => {
        return (
            <button 
                // disabled={this.validate()}
                type="submit" 
                className="btn btn-primary btn-block"
            >
                {lebal}
            </button>
        )
    }

    renderInput = (name, label, type = "text") => {
        const { data, errors } = this.state;

        return(
            <Input
                type={type}
                name={name}
                label={label}
                value={data[name]}
                onChange={this.handleChange}
                error={errors[name]}
            />
        )
    }

}

export default Form;