import React from 'react';
import {RouteComponentProps} from 'react-router-dom'

interface MatchParams {
    id: string;
}

interface MovieFormProps extends RouteComponentProps<MatchParams> {
    
}
 
 
class MovieForm extends React.Component<MovieFormProps> {
    render() { 
        return ( 
            <div>
                <h1>Movie Form {this.props.match.params.id}</h1>
                <button className='btn btn-primary' onClick={() => this.props.history.push('/movies')}>Save</button>
            </div> 
        );
    }
}
 
export default MovieForm;