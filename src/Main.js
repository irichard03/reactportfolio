//contains routes for displaying tables and dynamic page elements.
import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Question } from './content/Question.js';
import { Statement } from './content/Statement.js';
import { StackTable } from './content/StackTable.js';


class Main extends Component {

  render() {
    return (
      <div>
        <Jumbotron className="jumbo">
          <Statement />
          <Question />
          <StackTable />
        </Jumbotron>
      </div>
    );
  }
}

export default Main;