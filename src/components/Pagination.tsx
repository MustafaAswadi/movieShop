import React, { Component } from 'react';
import _ from 'lodash';

interface PaginationProps {
    itemsCount: any,
    pageSize: number,
    onPageChange: any,
    currentPage: number
}

export default class Pagination extends Component<PaginationProps> {
    

    render() {
        const { itemsCount, pageSize, onPageChange, currentPage } = this.props;
        const pageCount = Math.ceil(itemsCount/pageSize);
        if(pageCount === 1) return null;

        const pages = _.range(1, pageCount+1);
        return (
            <div style={{margin: '0 auto', textAlign: 'center'}}>
                <nav aria-label="...">
                <ul className="pagination pagination-md">
                    {pages.map(p=>
                        <li className={(currentPage == p)? 'page-item active': 'page-item' } key={p}><a onClick={()=>onPageChange(p)} className="page-link">{p}</a></li>
                    )}
                </ul>
                </nav>
            </div>
        )
    }
}
