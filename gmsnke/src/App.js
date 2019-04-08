import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.val = 10;
    this.state = { userData: [] }
  }

  componentDidMount() {
    { fetch( "https://api.github.com/users" ).then( results => results.json() ). then( results => 
        this.setState( { userData: results } )
     ) }

  }

  render() {
    
    return ( <div>
      {
        this.state.userData.map( item =>
          <div>
          <span id="name" > {item.login} </span>
          <span> <img key={item.id} src={item.avatar_url} / > </span>
          </div>
         )
      }
     </div>
    ) } 
}

export default App;
