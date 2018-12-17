import React from 'react';

export class Question extends React.Component {
 
  render() {
    return (
        <div>
            <h2>What is a full stack developer?</h2>
            <p>A full stack developer works on every layer of a an application's technology stack; including a front end user-interface, a back-end server, databases, and various Frameworks and application programming interfaces (API's) necessary to the needs of the application.</p>
            <h2>Why hire a full stack developer?</h2>
            <ol>
                <li>Reduce development costs.</li>
                <li>Open up opportunities for custom API's and Integration.</li>
            </ol>
        </div>
    );
  }
}