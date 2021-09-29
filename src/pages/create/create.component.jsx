import React from 'react';
import { connect } from 'react-redux'
import { addCard } from '../../redux/card/card.actions';
import './create.styles.css'

class Create extends React.Component {
    onFormSubmit = (e)=>{
        e.preventDefault();
        const title = e.target[0].value;
        const description = e.target[1].value;
        const id = this.props.id+1;
        this.props.addCard([{id, title, description}]);
        this.props.history.push("/");
    }

    render(){
        return (
            <section className="create">
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="title">Title</label>
                    <input className="create__title" id="title" type="text"/>
                    <label htmlFor="description">Description</label>
                    <textarea className="create__description" name="" id="description" cols="30" rows="10"></textarea>
                    <button className="create__button">Submit</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: Object.values(state.card).length
    }
}

export default connect(mapStateToProps, {addCard})(Create);