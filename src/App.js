import React, { Component } from 'react';


class App extends React.Component {
  state = {
    clients: [
      { id: 1, name: "Bonevy BEBY" },
      { id: 2, name: "Bonevy BEBY" },
      { id: 3, name: "Bonevy BEBY" },

    ],
    counter: 0
  }
  handleClick = () => {
    // this.setState({ counter: this.state.counter + 1 })
    const clients = this.state.clients.slice();
    clients.push({ id: 4, name: "Ketsia BEBY" });
    this.setState({ clients: clients });
  }
  render() {
    const title = "List of clients";
    return (
      <div>
        <h1> {title}</h1>
        <ul>
          {this.state.counter}
          <button onClick={this.handleClick}>click me</button>
          {this.state.clients.map((client, index) => <li key={index}>{client.name}<button>x</button></li>)}
        </ul>
        <form>
          <input type="text" placeholder="enter your name" />
          <button>Confirmer</button>
        </form>
      </div>

    );
  }
}

export default App;




/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
      </div>
    );
  }

export default App; */


