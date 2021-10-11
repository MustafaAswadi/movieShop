import React, { Component } from 'react'

export default class Like extends Component {
    render() {
        let classes = 'fa fa-heart'
        if (!this.props.like)  classes +='-o';        
        return (<i style={{cursor:'pointer'}}  onClick={this.props.onClick} className={classes} aria-hidden='true'></i>);
    }
}
