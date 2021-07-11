import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Card(props) {

    const currentUser = React.useContext(CurrentUserContext)
    const isOwn = props.card.owner === currentUser._id;
    const cardDeleteButtonClassName = (`element__delete ${isOwn ? 'element__delete_visible' : 'element__delete_hidden'}`);
    const isLiked = props.card.likes.some(i => i === currentUser._id);
    const cardLikeButtonClassName = `element__image-like ${isLiked && 'element__image-like_active'}`;

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLike() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }
    
    return (
        <div className="element">
            <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
            <div className="element__item">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__wrapper">
                    <button className={cardLikeButtonClassName} onClick={handleLike} type="button"></button>
                    <p className="element__image-like-number">{props.card.likes.length}</p>
                </div>
            </div>
        </div>   
    )
} 

export default Card;