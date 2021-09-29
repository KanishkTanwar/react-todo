import React from 'react';
import { fetchCards, deleteCard } from '../../redux/card/card.actions';
import { searchTerm } from '../../redux/search/search.actions';
import { connect } from 'react-redux';
import { cardArray  } from '../../cards-data';
import Input from '../../component/input/input.component';
import CardList from '../../component/card-list/card-list.component';
import Button from '../../component/button/button.component';
import './home.styles.css'

class Home extends React.Component {
    componentDidMount(){
        this.props.fetchCards(cardArray);
    }
    onSearchInput = (e)=>{
        this.props.searchTerm(e.target.value);
    }
    renderedCards(){
        return this.props.cards.filter(card=>card.title.toLowerCase().includes(this.props.searchedTerm.toLowerCase()));
    }
    onCardDelete = (id) => {
        this.props.deleteCard(id);
    }
    render(){
        return (
            <section className="home">
                <Input onSearchInput={this.onSearchInput}/>
                <CardList onCardDelete={this.onCardDelete} cards={this.renderedCards()}/>
                <Button/>
            </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        cards: Object.values(state.card),
        searchedTerm: state.search
    }
}
export default connect(mapStateToProps, {fetchCards, searchTerm, deleteCard})(Home);