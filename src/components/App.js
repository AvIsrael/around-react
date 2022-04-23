import {Header} from './Header';
import {Footer} from "./Footer";
import {Main} from "./Main";
import { useState } from "react";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(undefined);

    const handleEditAvatarClick = ()=> {
        setIsEditAvatarPopupOpen(true);
    }
    const handleEditProfileC = ()=>  {
        setIsEditProfilePopupOpen(true);
    }
    const handleAddPlaceC = ()=>  {
        setIsAddPlacePopupOpen(true);
    }
    const handleConfirmDeleteC = ()=>  {
        setIsConfirmDeletePopupOpen(true);
    }
    const handleCardClick = (card)=>  {
        setSelectedCard(card);
    }

    const closeAllPopups = ()=> {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsConfirmDeletePopupOpen(false);
        setSelectedCard(undefined);
    }

    return (
        <div className="page">
            <div className="wrapper">
                <Header/>
                <Main
                    onEditProfileClick={handleEditProfileClick}
                    onAddPlaceClick={handleAddPlaceClick}
                    onEditAvatarClick={handleEditAvatarClick}
                    onConfirmDeleteClick={handleConfirmDeleteClick}
                    onCardClick={handleCardClick}
                />
                <Footer />
            </div>
        </div>
    );
}

export default App;
