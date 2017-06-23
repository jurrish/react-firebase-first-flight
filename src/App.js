import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
  constructor(props){
    //app extends native component from react, but also do my special stuff through super
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    //listen at the root of the tree (ref) for changes
    database.ref().on('value', () => {
      console.log('the data changed');
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          One day, some data from Firebase will go here.
        </pre>
      </div>
    );
  }
}

export default App;
