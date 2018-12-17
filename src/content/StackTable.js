import React from 'react';
import { Table } from 'reactstrap';



export class StackTable extends React.Component {
  
    render() {
        return (
        <div>
            <h2>Tech Stack</h2>
           <Table>
        <thead>
          <tr>
            <th>Front End</th>
            <th>Back End</th>
            <th>Databases</th>
            <th>Frameworks</th>
            <th>Languages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="FrontEnd">Handlebars</td>
            <td className="BackEnd">Node</td>
            <td className="Databases">FireBase</td>
            <td className="Frameworks">Bootstrap</td>
            <td className="Langauges">Javascript</td>
          </tr>
          <tr>
            <td className="FrontEnd">HTML/CSS</td>
            <td className="BackEnd"></td>
            <td className="Databases">MongoDB</td>
            <td className="Frameworks">Express</td>
            <td className="Langauges">Java</td>
          </tr>
          <tr>
            <td className="FrontEnd">JQuery</td>
            <td></td>
            <td className="Databases">MySql</td>
            <td className="frameworks">Materialize</td>
            <td className="langauges">C#</td>
          </tr>
          <tr>
            <td className="FrontEnd">React</td>
            <td></td>
            <td className="Databases">MSSQL</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
        </div>
    );
  }
}