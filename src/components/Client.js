import React, { Component } from 'react';

class Client extends Component {
    render() {
        //const details = this.props.details;
        //const onDelete = this.props.onDelete;
        const { details, onDelete } = this.props;
        return (

            <li>{details.name}
                <button onClick={() => onDelete(details.id)}>x</button>
            </li>
        );
    }
}

export default Client;
