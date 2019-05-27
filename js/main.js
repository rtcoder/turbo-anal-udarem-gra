const screenTypes = ['choose-hero', 'game', 'shop'];
const player = new Hero();
const game = new Game();
const drawEngine = new DrawEngine();
const mouse = new Mouse();
game.resize();
game.startGame();
