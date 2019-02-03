import React from 'react';
import { Jumbotron } from 'reactstrap';
import Cards from '../content/Cards.js';

export class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron className="jumbo">
                    {Cards.map(card => (
                        <div className="repoCard">
                            <p className="cardTitle">{card.name}</p>
                            <a className="pageLink" href={card.link}><img className="repos" src={card.image} alt={card.name} /></a>
                            <a className="gitLink" href={card.repo}>Github</a>
                        </div>
                    ))}
                </Jumbotron>
            </div>
        );
    }
}

export default Portfolio;