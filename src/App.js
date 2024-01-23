import React, { Component } from 'react';


class App extends React.Component {

  clientInput = React.createRef();
  state = {
    clients: [
      { id: 1, name: "Bonevy BEBY" },
      { id: 2, name: "Bonevy BEBY" },
      { id: 3, name: "Bonevy BEBY" },

    ],
    //  counter: 0
  }
  // handleClick = () => {
  // this.setState({ counter: this.state.counter + 1 })
  //   const clients = this.state.clients.slice();
  //   clients.push({ id: 4, name: "Ketsia BEBY" });
  //   this.setState({ clients: clients });
  // }
  handleDelete = id => {
    // console.log(id)
    const clients = this.state.clients.slice();
    /*const index = clients.findIndex(function (client) {
      return client.id === id;
    });*/
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients: clients });
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.clientInput.current.value);
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
          <input type="text" placeholder="enter your name" ref={this.clientInput} />
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


