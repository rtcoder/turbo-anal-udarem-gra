const UI_ELEMENTS = [
    {
        screen: 'choose-hero',
        name: "left-arrow",
        text: null,
        img: {
            src: 'img/arrows/left.png',
            image: new Image()
        },
        getPosition: () => [50, (canvas.height / 2) - 50],// return [xPos, yPos]
        getSize: () => [60, 96], //return [width, height]

    }
];

class UIElements {
    constructor() {

    }

    drawUiElements() {

    }
}
