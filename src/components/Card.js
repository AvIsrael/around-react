const Card = ({onCardClick, card, onConfirmDeleteClick}) => {
    const handleClick = () => {
        onCardClick(card);
    }
    return (
            <li className="elements__item">
                <img className="elements__grid-image" onClick={handleClick}
                    src = {`${card.link}`} alt={card.name.toString()}></img>
                    <div className="elements__info">
                        <h2 className="elements__description">{card.name}</h2>
                        <div className="elements__likes-zone">
                            <button className="elements__button-heart"
                                    type="button"
                                    aria-label="like"></button>
                            <span className="elements__amount-likes">{card.likes.length}</span>
                        </div>
                    </div>
                    <button className="elements__button-delete button"
                            type="button"
                            aria-label="delete"
                            onClick={onConfirmDeleteClick}></button>
            </li>);
    }
    export default Card;
