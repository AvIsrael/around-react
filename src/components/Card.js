export const Card = ({onCardClick, card, onConfirmDeleteClick}) => {
    const handleClick = () => {
        onCardClick(card);
    }
    return (

            <li className="elements__item">
                <div className="elements__grid-image" onClick={handleClick}
                     style={{backgroundImage: `url(${card.link})`}}></div>
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
