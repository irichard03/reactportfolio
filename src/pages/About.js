import React from 'react';
import { Statement } from '../content/Statement';
import { StackTable } from  '../content/StackTable';
import { Jumbotron } from 'reactstrap';

export class About extends React.Component {
 
  render() {
    return (
        <div>
            <Jumbotron className="jumbo">
              <Statement />
              <StackTable />
            </Jumbotron>
        </div>
    );
  }
}

export default About;