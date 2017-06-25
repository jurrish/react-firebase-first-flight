import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
  constructor(props){
    //app extends native component from react, but also do my special stuff through super
    super(props);
    this.state = {
      data: null,
      newData: ''
    };

    this.dataRef = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //listen at the root of the tree (ref) for changes
    //or set the reference point as wowowowow.
    this.dataRef = database.ref(`/WOWOWOWOW/${null}/hehehehe`);
    this.dataRef.on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
  }

  handleChange(event){
    const newData = event.target.value;
    this.setState(
      {
        newData
      }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.dataRef.push(this.state.newData);
            //.set, .push, other things to set data dynamically
  }

  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          { JSON.stringify(this.state.data, null, 2) }
        </pre>
        <input type="text" value={ this.state.newData } onChange={ this.handleChange } />
        <form className="App--form" onSubmit={ this.handleSubmit }>
        <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
