import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../models/hero.model";
import {MatSnackBar} from "@angular/material";
import {GameService} from "../../services/game.service";

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
    private prices = {
        armor: Math.round(5 + 1.2),
        power: Math.round(3 + 1.4),
        healthPotion: 10
    };

    constructor(private gameService: GameService,
                public snackBar: MatSnackBar) {
    }

    _player?: Hero;

    get player(): Hero {
        return this._player;
    }

    @Input() set player(player: Hero) {
        if (player) {
            this._player = player;
            this.updatePrices();
        }
    }

    ngOnInit() {

    }

    updatePrices() {
        this.prices.armor = Math.round(5 + this.player.armor * 1.2);
        this.prices.power = Math.round(3 + this.player.power * 1.4);
    }

    hasMoney(value: number) {
        return this.player.money >= value;
    }

    checkMoney(value: number) {
        if (!this.hasMoney(value)) {
            this.snackBar.open(`You don't have enough money`, 'OK', {
                duration: 3000
            });
            return false;
        }
        return true;
    }

    buyPower() {
        if (!this.checkMoney(this.prices.power)) {
            return;
        }
        this.player.power++;
        this.updatePrices();
        this.player.money -= this.prices.power;
    }

    buyArmor() {
        if (!this.checkMoney(this.prices.armor)) {
            return;
        }
        this.player.armor++;
        this.updatePrices();
        this.player.money -= this.prices.armor;
    }

    buyHealthPotion() {
        if (!this.checkMoney(this.prices.healthPotion)) {
            return;
        }
        this.player.healthElixirs++;
        this.player.money -= this.prices.healthPotion;
    }

    backToGame() {
        this.gameService.changeView("game");
    }
}
