export default class DDDUserInfo {
    constructor({userNameSelector, userJobSelector, avatarSelector}) {
        this._userNameElement = document.querySelector(userNameSelector);
        this._userJobElement = document.querySelector(userJobSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._userNameElement.textContent,
            about: this._userJobElement.textContent,
        };
    }

    setUserInfo({name, about}) {
        this._userNameElement.textContent = name;
        this._userJobElement.textContent = about;
    }

    setAvatar({ avatar }) {
        this._avatarElement.style.backgroundImage = avatar
            ? `url(${avatar})`
            : `url(${this._avatar})`;
    }
}