import {Component, HostListener} from '@angular/core';
import {Hero} from "../models/hero.model";
import {ViewType} from "../types/view.type";
import {GameService} from "../services/game.service";
import {HeroAvatarInterface} from "../interfaces/hero-avatar.interface";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    view: ViewType = "intro";
    player: Hero;

    constructor(public gameService: GameService) {
        gameService.onSelectHero.subscribe((avatar: HeroAvatarInterface) => {
            if (!this.player) {
                this.player = new Hero(avatar);
                this.gameService.changeView("shop");
            }
        });
        gameService.onViewChange.subscribe((view: ViewType) => this.view = view);
    }

    @HostListener('contextmenu', ['$event'])
    rightClick($event: MouseEvent) {
        $event.preventDefault();
    }

}
