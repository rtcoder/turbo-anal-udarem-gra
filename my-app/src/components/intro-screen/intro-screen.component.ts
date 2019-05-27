import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {setLang, translate} from "../../lang";

@Component({
    selector: 'app-intro-screen',
    templateUrl: './intro-screen.component.html',
    styleUrls: ['./intro-screen.component.scss']
})
export class IntroScreenComponent implements OnInit {
    translate = translate;
    setLang = setLang;

    constructor(private gameService: GameService) {
    }

    ngOnInit() {
    }

    enter() {
        this.gameService.changeView("choose-hero");
    }
}
