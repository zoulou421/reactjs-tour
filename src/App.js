import React, { Component } from 'react';


class App extends React.Component {
  state = {
    clients: [
      { id: 1, name: "Bonevy BEBY" },
      { id: 2, name: "Bonevy BEBY" },
      { id: 3, name: "Bonevy BEBY" },
    ],
    newClient: 'Bonevy',

  }

  handleDelete = id => {
    const clients = this.state.clients.slice();

    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients: clients });
  }
  handleSubmit = event => {
    event.preventDefault();
    const id = new Date().getTime();
    const name = this.state.newClient;
    const clientTemp = { id, name };
    const clients = this.state.clients.slice();
    clients.push(clientTemp);
    this.setState({ clients: clients })
  }
  handleOnchange = (event) => {
    const value = event.currentTarget.value;
    this.setState({ newClient: value });
    console.log(event.currentTarget.value)
  }

  render() {
    const title = "List of clients";
    return (
      <div>
        <h1> {title}</h1>
        <ul>
          {this.state.clients.map((client, index) => <li key={index}>{client.name}
            <button onClick={() => this.handleDelete(client.id)}>x</button></li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="enter your name" value={this.state.newClient} onChange={this.handleOnchange} />
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


