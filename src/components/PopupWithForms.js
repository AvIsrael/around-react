const PopupWithForm = ({
                           name, isOpen, title, onClose, submitButton, children,
                       }) => {
    return (<div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <form name={`form-${name}`} className={`popup__form popup__form_type_${name}`}
                >
                    {children}
                    <button type="submit" className="popup__button-sbmt">
                        {submitButton}
                    </button>
                    <button
                        className="button-reset popup__button"
                        type="button"
                        aria-label="cancel"
                        onClick={onClose}
                    ></button>
                </form>
            </div>
        </div>)
}
export default PopupWithForm;