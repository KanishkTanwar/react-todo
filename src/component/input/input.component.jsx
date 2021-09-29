import React from 'react';
import "./input.styles.css"

const Input = (props) => {
    return (
        <div>
            <input onChange={(e)=>props.onSearchInput(e)}className="home__input"type="text" placeholder="search"/>
        </div>
    )
}

export default Input;