export default class DDDSection {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(name, link, id, ownerId, likes) {
        const card = this._renderer(name, link, id, ownerId, likes);
        this._container.prepend(card);
    }

    renderItems(items) {
        items.forEach((item) => {
            this.addItem(item.name, item.link, item._id, item.owner._id, item.likes);
        });
    }
}
