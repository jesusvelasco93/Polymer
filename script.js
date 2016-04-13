function createNew(container, image, body) {
    var root = document.querySelector(container).createShadowRoot();
    var template = document.querySelector("#news").content;
    template.querySelector.(".body").textContent = body;
    template.querySelector.(".image").textContent = image;
    root.append();
}
createNew();
createNew();