class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _customFetch = (url, headers) => {
        return fetch(url, headers).then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Error: ${res.status}`)
            }
        );
    };

    getUserInfo() {
        return this._customFetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
        });
    }

    getInitialCards() {
        return this._customFetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
        });
    }

    createCard(data) {
        return this._customFetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify(data),
        });
    }

    deleteCard(cardId) {
        return this._customFetch(`${this._baseUrl}/cards/${cardId}`, {
            headers: this._headers,
            method: "DELETE",
        });
    }

    editProfile({name, about}) {
        return this._customFetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                name: name,
                about: about,
            }),
        });
    }

    editAvatar({avatar}) {
        return this._customFetch(`${this._baseUrl}/users/me/avatar`, {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                avatar: avatar,
            }),
        });
    }

    likeCard(cardId) {
        return this._customFetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            headers: this._headers,
            method: "PUT",
        });
    }

    unlikeCard(cardId) {
        return this._customFetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            headers: this._headers,
            method: "DELETE",
        });
    }
}

export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-12", headers: {
        authorization: "cc8ab050-a9c0-4b6f-94ee-d21a7e05974a", "Content-Type": "application/json",
    },
});