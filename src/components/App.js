import Header from './Header';
import Footer from "./Footer";
import Main from "./Main";
import {useState} from "react";
import PopupWithForm from "./PopupWithForms";
import ImagePopup from "./ImagePopup";

export function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleEditAvatarClick = () => {setIsEditAvatarPopupOpen(true);
    }
    const handleEditProfileClick = () => {setIsEditProfilePopupOpen(true);
    }
    const handleAddPlaceClick = () => {setIsAddPlacePopupOpen(true);
    }
    const handleConfirmDeleteClick = () => {setIsConfirmDeletePopupOpen(true);
    }
    const handleCardClick = (card) => {setSelectedCard(card);
    }

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsConfirmDeletePopupOpen(false);
        setSelectedCard(null);
    }

    return (<div className="page">
            <div className="wrapper">
                <Header/>
                <Main
                    onEditAvatarClick={handleEditAvatarClick}
                    onEditProfileClick={handleEditProfileClick}
                    onAddPlaceClick={handleAddPlaceClick}
                    onConfirmDeleteClick={handleConfirmDeleteClick}
                    onCardClick={handleCardClick}
                />
                <PopupWithForm
                    name="edit data"
                    title="Edit profile"
                    submitButton="Save"
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                >
                    <input
                        id="name"
                        name="name"
                        className="popup__item"
                        type="text"
                        placeholder="Name"
                        minLength='2'
                        maxLength='40'
                        required
                    />
                    <span className="popup__error name-error"></span>
                    <input
                        id="about"
                        name="about"
                        className="popup__item"
                        type="text"
                        placeholder="About me"
                        minLength="2"
                        maxLength="200"
                        required
                    />
                    <span className="popup__error about-error"></span>
                </PopupWithForm>
                <PopupWithForm
                    name="new-place"
                    title="New Place"
                    submitButton="Create"
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                >
                    <input
                        id="title"
                        name="title"
                        className="popup__item"
                        type="text"
                        placeholder="Title"
                        minLength="2"
                        maxLength="30"
                        required
                    />
                    <span className="popup__error title-error"></span>
                    <input
                        id="image-link"
                        type="url"
                        name="image-link"
                        className="popup__item popup__input_type_image-link"
                        placeholder="Image Link"
                        required
                    />
                    <span className="popup__error image-link-error"></span>
                </PopupWithForm>
                <PopupWithForm
                    name="you-sure"
                    title="Are you sure?"
                    submitButton="Yes"
                    isOpen={isConfirmDeletePopupOpen}
                    onClose={closeAllPopups}
                />
                <PopupWithForm
                    name="profile-image"
                    title="Change profile picture"
                    submitButton="Save"
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                >
                    <input
                        id="image-input"
                        type="url"
                        name="avatar"
                        className="popup__item"
                        placeholder='Image Link'
                        required
                    />
                    <span className='popup__error image-input-error'></span>
                </PopupWithForm>
                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}/>
                <Footer/>
            </div>
        </div>);
}