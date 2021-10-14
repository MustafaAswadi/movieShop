import React from 'react';
import {RouteComponentProps} from 'react-router-dom'
import Form from './common/form';

interface MatchParams {
    id: string;
}

interface MovieFormProps extends RouteComponentProps<MatchParams> {
    
}
 
 
class MovieForm extends Form  {
    render() { 
        return ( 
            <div>
                <h1>Movie Form</h1>
                {this.renderInput('title','Title')}





                <button className='btn btn-primary' onClick={() => this.props.history.push('/movies')}>Save</button>
            </div> 
        );
    }
}
 
export default MovieForm;