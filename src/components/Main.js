import { useState, useEffect } from "react";
import {api} from './Api';

export const Main= ()=> {({
    onEditProfileClick,
    onEditAvatarClick,
    onAddPlaceClick,
    onCardClick,
    onConfirmDeleteClick,
})
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__image">
                    <div className="profile__avatar"></div>
                    <div className="profile__image-overlay"></div>
                </div>

                <div className="profile__info">
                    <div className="profile__content">
                        <h1 className="profile__hero"></h1>
                        <button className="button profile__button-unusual" type="button" aria-label="edit">
                        </button>
                    </div>
                    <p className="profile__role"></p>
                </div>
                <button className="button profile__button" type="button" aria-label="add">
                </button>
            </section>
            <section className="elements">
                <ul className="elements__items"></ul>
            </section>
        </main>
    )
}