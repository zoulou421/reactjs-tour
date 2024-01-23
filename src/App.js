import React, { Component } from 'react';
import Client from './components/Client';
import ClientForm from './components/ClientForm';


class App extends React.Component {
  state = {
    clients: [
      { id: 1, name: "Bonevy BEBY" },
      { id: 2, name: "Bonevy BEBY" },
      { id: 3, name: "Bonevy BEBY" },
    ],

  }

  handleDelete = id => {
    //const clients = this.state.clients.slice();
    const clients = [...this.state.clients];
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);
    //this.setState({ clients: clients });
    this.setState({ clients });
  }
  //handleSubmit taken into ClientForm
  /* handleOnchange = (event) => {
     const value = event.currentTarget.value;
     this.setState({ newClient: value });
     console.log(event.currentTarget.value)
 
   }*/

  handleAdd = client => {
    const clients = [...this.state.clients];
    //clients.push(clientTemp);
    clients.push(client);
    this.setState({ clients })
  }
  //handleOnchange = (event) => this.setState({ newClient: event.currentTarget.value });

  render() {
    const title = "List of clients";
    return (
      <div>
        <h1> {title}</h1>
        <ul>
          {this.state.clients.map((client) =>
            <Client details={client} onDelete={this.handleDelete} />
          )}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
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


