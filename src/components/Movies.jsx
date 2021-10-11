import React, { Component } from 'react'
import Like from './common/Like';


class Movies extends Component {

    state = {
        movies : [
            {
                _id: '3234234255345',
                title: 'Treminator',
                genre: {_id: 'ds345fdf345df445' , name: 'Action'},
                numberInStock: 6,
                dailyRentalRate:2.5,
                publishDate: '2018-01-03T19:04:28.809Z',
                liked: true,
            },
            {
                _id: '32342342255345',
                title: 'Gally Boy',
                genre: {_id: 'ds345fdf3745df445' , name: 'HipHop'},
                numberInStock: 6,
                dailyRentalRate:2.5,
                publishDate: '2018-01-03T19:04:28.809Z'
              },
              {
                _id: '32334234255345',
                title: 'End Game',
                genre: {_id: 'ds345f5df345df445' , name: 'Action'},
                numberInStock: 6,
                dailyRentalRate:2.5,
                publishDate: '2018-01-03T19:04:28.809Z'
              },
        ]
      }
      deleteMovie = movie=>{
          const movies = this.state.movies.filter(m => m._id !== movie._id);
          this.setState({movies})
      }
      liked = movie => {
        const movies =[...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};

        movies[index].liked = !movies[index].liked;

        this.setState({movies})

    }
      

    render(){
        const movies = this.state.movies;
        const { length: count } = this.state.movies;
        if(count === 0) return <div className='mt-3'><p>There are no movie in the database</p></div>;
        return (
            <div className='mt-3'>
                <p>Showing {count} movies in database.</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th />
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                    {movies.map( (m) =>
                        <tr key={m._id}>
                            <th>{m.title}</th>
                             <td>{m.genre.name}</td>
                            <td>{m.numberInStock}</td>
                            <td>{m.dailyRentalRate}</td>
                            <td>
                                <Like like={m.liked} onClick={()=> this.liked(m)}/>
                            </td>
                            <td>
                                <button className='btn btn-danger btn-sm' onClick={()=> this.deleteMovie(m)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Movies
