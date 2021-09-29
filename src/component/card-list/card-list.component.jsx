import React from 'react';
import './card-list.styles.css';
import CardDescription from './card.description.component';

class CardList extends React.Component{
    render(){
        return this.props.cards.map(({id, title, description})=>{
            return (
            <div key={id} className="card">
                <span onClick={()=>this.props.onCardDelete(id)} className="card__delete">X</span>
                <h2 className="card__title">{title}</h2>
                <CardDescription description={description}/>
            </div>
            );
        });
    }
}

export default CardList;