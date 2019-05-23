const heroesImages = [{
    image: null,
    src: 'img/heroes/1.png',
    name: 'Izunia',
    superPower: '-'
}, {
    image: null,
    src: 'img/heroes/2.png',
    name: 'Leżeg',
    superPower: '-'
}, {
    image: null,
    src: 'img/heroes/3.png',
    name: 'Agusia',
    superPower: '-'
}, {
    image: null,
    src: 'img/heroes/4.png',
    name: 'Kaczka',
    superPower: '-'
}, {
    image: null,
    src: 'img/heroes/5.png',
    name: 'Korni',
    superPower: 'Darcie ryja'
}, {
    image: null,
    src: 'img/heroes/6.png',
    name: 'Lost to chuj',
    superPower: 'Rzut winylem'
}, {
    image: null,
    src: 'img/heroes/7.png',
    name: 'Marcinek',
    superPower: 'Jebnięcie fleszem'
}, {
    image: null,
    src: 'img/heroes/8.png',
    name: 'Endżi',
    superPower: ''
}];
var visibleHero = 0;
const arrowsImages = {
    left: new Image(),
    right: new Image()
};
arrowsImages.left.src='img/arrows/left.png';
arrowsImages.right.src='img/arrows/right.png';
for (const img of heroesImages) {
    if (!img.image) {
        img.image = new Image();
        img.image.src = img.src;
    }
}
