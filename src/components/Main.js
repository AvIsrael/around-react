import {useState, useEffect} from "react";
import api from "../utils/Api";
import Card from "./Card";

const Main = ({onEditProfileClick, onEditAvatarClick, onAddPlaceClick, onCardClick, onConfirmDeleteClick,
                     }) => {
    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api
            .getUserInfo()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
        api
            .getInitialCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__image">
                    <div className="profile__avatar"
                         style={{ backgroundImage: `url(${userAvatar})` }}></div>
                    <div className="profile__image-overlay"
                         onClick={onEditAvatarClick}></div>
                </div>
                <div className="profile__info">
                    <div className="profile__content">
                        <h1 className="profile__hero">{userName}</h1>
                        <button className="button profile__button-unusual"
                                type="button"
                                aria-label="edit"
                                onClick={onEditProfileClick}>
                        </button>
                    </div>
                    <p className="profile__role">{userDescription}</p>
                </div>
                <button className="button profile__button"
                        type="button"
                        aria-label="add"
                        onClick={onAddPlaceClick}>
                </button>
            </section>
            <section className="elements">
                <ul className="elements__items">
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={onCardClick}
                            onConfirmDeleteClick={onConfirmDeleteClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    )
}
export default Main;