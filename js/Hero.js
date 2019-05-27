class Hero {
    constructor() {

        this.avatar = 'img/1.png';
        this.position = {
            x: 0,
            y: 0
        };
        this.size = {
            width: 50,
            height: 50
        };

    }

    levelUp() {
        this.maxLives += 5;
        this.level++;
    }

    addExp(val) {
        this.exp += val;
    }

    addLives(val) {
        this.lives += val;
        if (this.lives > this.maxLives) this.lives = this.maxLives;
    }

    deleteLives(val) {
        this.lives -= val;
        if (this.lives <= 0) game.fail();
    }


}
