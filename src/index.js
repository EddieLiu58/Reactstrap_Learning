import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

export default class Main extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Hello, I`m ReactMaker.</h2>
        <p>To get started, edit containers/index.js</p>
         <Button color="danger">Danger!</Button>
      </div>

    );
  }
}
