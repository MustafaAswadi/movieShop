import React, { Component } from 'react'
import GenreList from './GenreList';
import Pagination from './Pagination';
import { paginate } from './utils/paginate';
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import MovieTable from './moviesTable';
import _ from 'lodash';


class Movies extends Component{

    state = {
        pageSize: 5,
        currentPage: 1,
        selectedItem: {_id: '',name: ''},
        movies : [] as any,
        genres : [] as any,
        sortColumn: { path: "title", order: "asc"}
    }

    componentDidMount(){
        const genres = [{_id:'', name: 'All Genre'}, ...getGenres()]
        this.setState({movies: getMovies(), genres})
    }
 
    handleSelectItem = (g: any)=>{
        this.setState({selectedItem: g ,currentPage: 1})
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

    handleSort =(sortColumn: string) => {
        this.setState({ sortColumn })
    } 

    getPageData = () => {
        const { 
            movies: allMovies, 
            currentPage, 
            pageSize, 
            selectedItem, 
            sortColumn
        } = this.state;

        const filtered = selectedItem && selectedItem._id ? 
        allMovies.filter((m:any) => m.genre._id === selectedItem._id) 
        : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [(sortColumn.order === 'asc')? 'asc': 'desc']);//
        
        const movies = paginate(sorted, currentPage, pageSize)

        return {totalCount: filtered.length, data: movies};
    }

    render(){
        const { genres, sortColumn} = this.state;
        const { length: count } = this.state.movies;

        if(count === 0) return <div className='mt-3'><p>There are no movie in the database</p></div>;

        const {totalCount, data: movies} = this.getPageData();       

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
                    <p>Showing {totalCount} movies in database.</p>
                    <MovieTable 
                        movies={movies} 
                        onDelete={this.deleteMovie} 
                        onLike={this.liked} 
                        onSort={this.handleSort}
                        sortColumn={sortColumn}
                    />
                    <Pagination 
                        itemsCount={totalCount} 
                        pageSize={this.state.pageSize} 
                        onPageChange={this.handlePageChange} 
                        currentPage={this.state.currentPage}
                    />
                </div>
            </div>

        )
    }
}

export default Movies
