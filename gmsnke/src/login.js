import React, { Component } from 'react';
import './App.css';

export default class Login extends Component {

    constructor() {
        super();
        this.state = { id:"", key: "" }
        this.display = this.display.bind(this);
    }

    display() {
        alert(this.state.key);
    }

    render() {
        return(
        <form onSubmit={this.display}>
            <div>
                <label>ID</label>
                <input id="id" onChange={(event) => { this.setState( {id: event.target.value } ) }} type="text" ></input>
                <br />
                <label>Key</label>
                <input id="key" onChange={(event) => { this.setState( {key: event.target.value } ) }} type="password" ></input>
                <br />
                <button id = "btngo" value="Go">GO</button>
            </div>
        </form>
        )
    }

}