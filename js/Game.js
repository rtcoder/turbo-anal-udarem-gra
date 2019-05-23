class Game {

    constructor() {
        this.gameLoop = null;
        this.loopMiliseconds = 20;
        this.view = 'choose-hero';
        window.addEventListener('resize', this.resize);
    }

    resize() {
        canvas.setAttribute('width', window.innerWidth);
        canvas.setAttribute('height', window.innerHeight);
    }

    startGame() {
        this.gameLoop = setInterval(() => {
            this.loop()
        }, this.loopMiliseconds);
    }

    fail() {
        console.error('fail')
    }

    loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (this.view === 'choose-hero') {
            drawEngine.Heroes(mouse);

            if (mouse.leftBtn) {
                if (mouse.x < 110 && mouse.y >= (canvas.height / 2) - 45 && mouse.y <= (canvas.height / 2) + 45) {
                    visibleHero--;
                    if (visibleHero < 0) visibleHero = heroesImages.length - 1;
                }
                if (mouse.x > canvas.width - 110 && mouse.y >= (canvas.height / 2) - 45 && mouse.y <= (canvas.height / 2) + 45) {
                    visibleHero++;
                    if (visibleHero === heroesImages.length) visibleHero = 0;
                }
            }

        }
        if (this.view === 'shop') {
        }

        if (this.view === 'game') {
            drawEngine.All();

        }
    }

}
