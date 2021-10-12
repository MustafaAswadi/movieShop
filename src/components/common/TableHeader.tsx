import React from 'react'


interface TableHeaderProps {
    sortColumn: any,
    columns: any,
    onSort: any
}

 
class TableHeader extends React.Component<TableHeaderProps> {
    
    reisSort = (path: any) => {
        const sortColumn ={...this.props.sortColumn};
        if (sortColumn.path === path) 
            sortColumn.order = (sortColumn.order === "asc") ? "desc" : "asc";
        else{
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    }
    renderSortIcon= (column: any) =>{
        const { sortColumn } = this.props;

        if (column.path !== sortColumn.path) 
            return null;
        if (this.props.sortColumn.order === 'asc') 
            return <i className='fa fa-sort-asc'></i>
        
        return <i className='fa fa-sort-desc'></i>
        
    }
    
    render() { 
        return ( 
            <thead>
                <tr>
                    {this.props.columns.map((column: any) => 
                        <th 
                            key={column.path || column.key} 
                            onClick={() => this.reisSort(column.path)}
                            style={{cursor: 'pointer'}}
                        > 
                            {column.label} {this.renderSortIcon(column)}
                        </th>
                    )}
                </tr>
            </thead>
        );
    }
}
 
export default TableHeader;