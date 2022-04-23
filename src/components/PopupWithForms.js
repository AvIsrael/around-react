import DDDPopUp from "./DDDPopUp.js";

export default class PopupWithForm extends DDDPopUp {
    constructor(modalWindow, handleFormSubmit, buttonTextValue) {
        super(modalWindow);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popupElement.querySelector(".popup__form");
        this._buttonSubmit = this._popupElement.querySelector(".popup__button-sbmt");
        this._buttonTextValue = buttonTextValue;
        this._inputs = Array.from(
            this._popupForm.querySelectorAll(".popup__item")
        );
    }

    _getInputValues() {
        const inputValues = {};
        this._inputs.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }

    showMessageLoading() {
        this._buttonSubmit.value = "Saving...";
    }
    hideMessageLoading() {
        this._buttonSubmit.value = this._buttonTextValue;
    }

    close() {
        super.close();
        this._popupForm.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener("submit", () =>
            this._handleFormSubmit(this._getInputValues())
        );
    }
}