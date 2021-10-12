import React from 'react'
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";


interface TableProps {
    movies:any;
    column: any;
    sortColumn:Function;
    onSort:Function;
}
 
 
class Table extends React.Component<TableProps> {
    render() { 
        const {movies, sortColumn, onSort, column} = this.props;
        return ( 
            <table className="table">
                <TableHeader 
                    onSort={onSort} 
                    sortColumn={sortColumn} 
                    columns={column}
                />
                <TableBody 
                    data={movies}
                    columns={column}

                />     
            </table>
            
        );
    }
}
 
export default Table;