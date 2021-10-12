import { Component } from "react";
import Like from './common/Like';
import Table from "./common/Table";


interface MovieTableProps {
    movies: any;
    onDelete: Function;
    onLike: Function;
    onSort: Function;
    sortColumn: any
}
class MovieTable extends Component<MovieTableProps>{
    column = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { 
            key: 'like', 
            content: (movie: any) => <Like like={movie.liked} onClick={()=> this.props.onLike(movie)} />
        },
        { 
            key: 'delete', 
            content: (movie: any) => <button className='btn btn-danger btn-sm' onClick={()=> this.props.onDelete(movie)} > Delete </button>
        }
    ]
    
    render(){
        const {movies, sortColumn, onSort} = this.props;
        return ( 
            <Table
                movies={movies} 
                sortColumn={sortColumn} 
                onSort={onSort}
                column={this.column}
            />        
         );
    }
}
 
// const MovieTable: FunctionComponent<MovieTableProps> = ({movies,onDelete,onLike,onSort}: MovieTableProps) => {
// }
export default MovieTable;