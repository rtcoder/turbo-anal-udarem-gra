import {Component, OnInit} from '@angular/core';
import {HeroAvatarInterface} from "../../interfaces/hero-avatar.interface";
import {GameService} from "../../services/game.service";
import {MatSnackBar} from "@angular/material";

export const heroesAvatars: HeroAvatarInterface[] = [{
    src: 'assets/img/heroes/1.png',
    name: 'Izunia',
    superPower: '-'
}, {
    src: 'assets/img/heroes/2.png',
    name: 'Leżeg',
    superPower: '-'
}, {
    src: 'assets/img/heroes/3.png',
    name: 'Agusia',
    superPower: '-'
}, {
    src: 'assets/img/heroes/4.png',
    name: 'Kaczka',
    superPower: '-'
}, {
    src: 'assets/img/heroes/5.png',
    name: 'Korni',
    superPower: "Darcie ryja i wypierdalanie innych z grupy"
}, {
    src: 'assets/img/heroes/6.png',
    name: 'Lost to chuj',
    superPower: 'Rzut winylem'
}, {
    src: 'assets/img/heroes/7.png',
    name: 'Marcinek',
    superPower: 'Jebnięcie fleszem'
}, {
    src: 'assets/img/heroes/8.png',
    name: 'Endżi',
    superPower: 'Xanax'
}];

@Component({
    selector: 'app-choose-hero',
    templateUrl: './choose-hero.component.html',
    styleUrls: ['./choose-hero.component.scss']
})
export class ChooseHeroComponent implements OnInit {
    heroIndex = 0;
    heroesAvatars = heroesAvatars;

    constructor(public gameService: GameService,
                public snackBar: MatSnackBar) {
    }

    ngOnInit() {
    }

    next() {
        this.heroIndex++;
        if (this.heroIndex >= this.heroesAvatars.length)
            this.heroIndex = 0;
    }

    previous() {
        this.heroIndex--;
        if (this.heroIndex < 0)
            this.heroIndex = this.heroesAvatars.length - 1;
    }

    selectHero() {
        this.gameService.selectHero(this.heroesAvatars[this.heroIndex]);
        this.gameService.changeView("shop");
        this.snackBar.open('Wybrano: ' + this.heroesAvatars[this.heroIndex].name, 'OK', {duration: 3000})
    }
}
