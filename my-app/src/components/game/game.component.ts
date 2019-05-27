import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../models/hero.model";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
    @Input() player?: Hero;

    constructor() {
    }

    ngOnInit() {
    }

}
