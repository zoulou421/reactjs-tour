import React, { Component } from 'react';

class ClientForm extends Component {
    state = {
        newClient: ''
    }
    handleOnchange = (event) => this.setState({ newClient: event.currentTarget.value });

    handleSubmit = event => {
        event.preventDefault();
        const id = new Date().getTime();
        const name = this.state.newClient;
        // const clientTemp = { id, name };
        // const clients = this.state.clients.slice();
        //
        this.props.onClientAdd({ id, name })
        this.setState({ newClient: '' })

    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="enter your name" value={this.state.newClient} onChange={this.handleOnchange} />
                <button>Confirmer</button>
            </form>
        );
    }
}

export default ClientForm;
