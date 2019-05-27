import {HeroAvatarInterface} from "../interfaces/hero-avatar.interface";

export class Hero {
    experience: 0;
    maxLives = 100;
    lives = 100;
    avatar: HeroAvatarInterface;
    level = 1;
    power = 1;
    armor = 1;
    money = 50;
    healthElixirs = 0;
    isPlayerTurn = true;

    constructor(avatar: HeroAvatarInterface) {
        this.avatar = avatar;
    }

    addExp(val: number) {
        this.experience += val;
    }

    addLives(val: number) {
        this.lives += val;
        if (this.lives > this.maxLives) this.lives = this.maxLives;
    }

    deleteLives(val: number) {
        this.lives -= val;
        if (this.lives <= 0) this.lives = 0;
    }

}
