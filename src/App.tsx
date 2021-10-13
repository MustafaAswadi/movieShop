
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Customers from './components/Customers';
import Movies from './components/Movies';
import NotFound from './components/NotFound';
import Rentals from './components/rentals';
import MovieForm from './components/MovieForm';
import './App.css';



class App extends Component {

  render(){
    return (
      <React.Fragment>
          <Navbar/>
        <div className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/customers" component={Customers}/>
            <Route path="/rentals" component={Rentals}/>
            <Route path="/not-found" component={NotFound}/>
            <Redirect from='/' exact to='movies'/>
            <Redirect  to='not-found'/>
          </Switch>
        </div>
      </React.Fragment>
    );
  }  

}
export default App;
