import Header from './Header';
import Footer from "./Footer";
import Main from "./Main";
import {useState, useEffect} from "react";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

export function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(undefined);
    const [currentUser, setCurrentUser] = useState({
        name: "",
        about: "",
        avatar: "",
    });
    const [cards, setCards] = useState([]);
    const handleCardLike = (card) => {
        const isLiked = card.likes.some((user) => user._id === currentUser._id);
        api
            .changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) =>
                    state.map((currentCard) =>
                        currentCard._id === card._id ? newCard : currentCard
                    )
                );
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }

    const handleCardDelete = (card) => {
        api
            .deleteCard(card._id)
            .then(() => {
                setCards((state) =>
                    state.filter((currentCard) => currentCard._id !== card._id)
                );
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }

    useEffect(() => {
        api
            .getInitialCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }, []);

    useEffect(() => {
        api
            .getUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }, []);

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }
    const handleConfirmDeleteClick = () => {
        setIsConfirmDeletePopupOpen(true);
    }
    const handleCardClick = (card) => {
        setSelectedCard(card);
    }

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsConfirmDeletePopupOpen(false);
        setSelectedCard(null);
    }

    const handleUpdateUser = (currentUser) => {
        api
            .editProfile({ name: currentUser.name, about: currentUser.about })
            .then((userData) => {
                setCurrentUser(userData);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }
    const handleUpdateAvatar = (currentUser) => {
        console.log(currentUser)
        api
            .editAvatar({ avatar: currentUser.avatar })
            .then((userData) => {
                setCurrentUser(userData);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }

    const handleAddPlaceSubmit = (newCard) => {
        api
            .createCard(newCard)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }

    return (<div className="page">
        <div className="wrapper">
            <CurrentUserContext.Provider value={currentUser}>
                <Header />
                <Main
                    onEditAvatarClick={handleEditAvatarClick}
                    onEditProfileClick={handleEditProfileClick}
                    onAddPlaceClick={handleAddPlaceClick}
                    onConfirmDeleteClick={handleConfirmDeleteClick}
                    onCardClick={handleCardClick}
                    cards={cards}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                />
                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                />
                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPlaceSubmit={handleAddPlaceSubmit}
                />
               {/*deleting card*/}
                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                />
                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />
                <Footer />
            </CurrentUserContext.Provider>
        </div>
    </div>);
}