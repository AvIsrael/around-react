export default class Card {
    constructor(
        name, link, id, ownerId, userId, likes, cardSelector,
        {handleCardClick, handleLikeButton, handleDeleteCard},


    ) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikeButton = handleLikeButton;
        this._handleDeleteCard = handleDeleteCard;
        this._id = id;
        this._userId = userId;
        this._ownerId = ownerId;
        this._likes = likes;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content.querySelector(".elements__item")
            .cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        this._deleteButton.addEventListener("click", () =>
            this._handleDeleteCard(this._id)
        );
        this._likeButton.addEventListener("click", () =>
            this._handleLikeButton(this._id)
        );
        this._cardImage.addEventListener("click", () =>
            this._handleCardClick({ name: this._name, src: this._link })
        );
    }

    removeCardFromDOM = () => {
        this._element.remove();
        this._element = null;
    };


    isLiked() {
            return this._likes.some((likedCard) => likedCard._id === this._userId);
    }
    handleLikeCard = (addLike) => {
        this._likes = addLike;
        this._renderLikes();
    };
    _renderLikes() {
            this._likesCount.textContent = this._likes.length;
        if (this.isLiked()) {
            this._likeButton.classList.add("elements__button-heart_active");
        } else {
            this._likeButton.classList.remove("elements__button-heart_active");
        }
    }


    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector(".elements__grid-image");
        this._cardName = this._element.querySelector(".elements__description");
        this._likesCount = this._element.querySelector(".elements__amount-likes");
        this._likeButton = this._element.querySelector(".elements__button-heart");
        this._deleteButton = this._element.querySelector(".elements__button-delete");
        this._setEventListeners();
        this._cardImage.src = this._link;
        this._cardImage.alt = `Photo of ${this._name}`;
        this._cardName.textContent = this._name;
        this._renderLikes();
        if (this._ownerId !== this._userId) {
            this._deleteButton.style.display = "none";
        }
        return this._element;
    }

}