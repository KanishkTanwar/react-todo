import React from 'react';
import { Link } from 'react-router-dom'
import './button.styles.css';

const Button = () => {
    return <Link className="home__button" to="/create">Create new Todo</Link>
}

export default Button;