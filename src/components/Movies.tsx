import React, { Component } from 'react'
import Like from './common/Like';
import GenreList from './GenreList';
import Pagination from './Pagination';
import { paginate } from './utils/paginate';
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'


class Movies extends Component{

    state = {
        pageSize: 7,
        currentPage: 1,
        selectedItem: {_id: '',name: ''},
        movies : [] as any,
        genres : [] as any
    }

    componentDidMount(){
        this.setState({movies: getMovies(), genres: getGenres()})
    }
 
      
    handleSelectItem = (g: any)=>{
        this.setState({selectedItem: g})
    }
    deleteMovie = (movie: any) =>{
          const movies = this.state.movies.filter((m:any) => m._id !== movie._id);
          this.setState({movies})
    }
    liked = (movie: any) => {
        const movies =[...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};

        movies[index].liked = !movies[index].liked;

        this.setState({movies})

    } 

    handlePageChange = (p: number) =>{
        this.setState({currentPage: p})
    }
      

    render(){
        const { movies: allMovies, currentPage, pageSize, genres, selectedItem} = this.state;
        const { length: count } = this.state.movies;


        if(count === 0) return <div className='mt-3'><p>There are no movie in the database</p></div>;
        
        const filtered = selectedItem ? allMovies.filter((m:any) => m.genre._id === selectedItem._id) : allMovies;
        const movies = paginate(filtered, currentPage, pageSize)

        return (
            <div className="row">
                <div className="col-sm-2 mt-5">
                    <GenreList 
                    textProperty='name'
                    valueProperty='_id'
                    onItemSelect={this.handleSelectItem}
                    item={genres}
                    selectedItem={this.state.selectedItem}
                    />
                </div>
                <div className='mt-3 col-sm-10'>
                <p>Showing {filtered.length} movies in database.</p>
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
                <Pagination itemsCount={filtered.length} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} currentPage={this.state.currentPage}/>
            </div>
        

            </div>

           )
    }
}

export default Movies
