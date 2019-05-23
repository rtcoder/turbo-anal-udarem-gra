class DrawEngine {
    constructor() {
        this.backgroundColor = '#000';
    }

    Heroes(mouse) {
        this.background();

        ctx.font = "30px Arial";
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "#fff";
        ctx.fillText(`Imię: ${heroesImages[visibleHero].name}`, 10, 50);
        ctx.fillText(`Supermoc: ${heroesImages[visibleHero].superPower}`, 10, 100);
        ctx.rect((canvas.width / 2) - 50, canvas.height - 60, 100, 40);
        ctx.stroke();
        ctx.fillText(`OK`, (canvas.width / 2) - 25, canvas.height - 30);
        ctx.drawImage(heroesImages[visibleHero].image, (canvas.width / 2) - 45, (canvas.height / 2) - 50);
        ctx.drawImage(arrowsImages.left, 50, (canvas.height / 2) - 50);
        ctx.drawImage(arrowsImages.right, canvas.width - 110, (canvas.height / 2) - 50);
    }

    background() {
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = this.backgroundColor;
        ctx.fill();
        ctx.stroke();
    }

    enemies() {
    }

    Info() {

    }

    All() {
        this.background();
        this.enemies();
    }
}
