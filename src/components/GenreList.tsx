import React from 'react';


interface GenreListProps {
    item:any,
    textProperty: string,
    valueProperty: string,
    onItemSelect: Function,
    selectedItem: any, 
}

class GenreList extends React.Component<GenreListProps> {
    render() { 
        const {item, textProperty, valueProperty, onItemSelect, selectedItem} = this.props;
        console.log(selectedItem)
        return ( 
            <ul className="list-group">
                {item.map((g: any)=>
                    <li 
                        className={(selectedItem === g)? "list-group-item  active": "list-group-item"} 
                        onClick={()=>onItemSelect(g)}
                        key={g[valueProperty]} 
                        aria-current="true"
                    >
                        {g[textProperty]}
                    </li>
                )}
            </ul>
         );
    }
}
 
export default GenreList;