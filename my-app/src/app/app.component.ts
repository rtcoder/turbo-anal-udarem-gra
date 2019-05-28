import {Component, HostListener} from '@angular/core';
import {Hero} from "../models/hero.model";
import {ViewType} from "../types/view.type";
import {GameService} from "../services/game.service";
import {HeroAvatarInterface} from "../interfaces/hero-avatar.interface";
import {MatDialog} from "@angular/material";
import {EquipmentDialogComponent} from "../components/equipment-dialog/equipment-dialog.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    view: ViewType = "intro";
    player: Hero;

    constructor(public gameService: GameService,
                public dialog: MatDialog) {
        gameService.onSelectHero.subscribe((avatar: HeroAvatarInterface) => {
            if (!this.player) {
                this.player = new Hero(avatar);
                this.gameService.changeView("game");
            }
        });
        gameService.onViewChange.subscribe((view: ViewType) => this.view = view);
    }

    @HostListener('contextmenu', ['$event'])
    rightClick($event: MouseEvent) {
        $event.preventDefault();
    }

    @HostListener('document:keypress', ['$event'])
    onKeyPress($event: KeyboardEvent) {
        switch ($event.key.toLowerCase()) {
            case 'e':
                if (this.view === "intro") {
                    return;
                }
                const dialogRef = this.dialog.open(EquipmentDialogComponent, {
                    data: this.player.equipment,
                    width: '250px',
                });
                dialogRef.afterClosed().subscribe(result => {
                    console.log('The dialog was closed', result);

                });
                break;
            default:
                $event.preventDefault();

        }
    }
}
