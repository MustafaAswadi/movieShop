import React, { Component } from 'react'


interface LikeProps {
    like: any,
    onClick: any
}

export default class Like extends Component<LikeProps> {
    render() {
        let classes = 'fa fa-heart'
        if (!this.props.like)  classes +='-o';        
        return (<i style={{cursor:'pointer'}}  onClick={this.props.onClick} className={classes} aria-hidden='true'></i>);
    }
}
