import {EventEmitter, Injectable, Output} from "@angular/core";
import {HeroAvatarInterface} from "../interfaces/hero-avatar.interface";
import {ViewType} from "../types/view.type";

@Injectable({
    providedIn: 'root'
})
export class GameService {
    @Output() onFail: EventEmitter<any> = new EventEmitter();
    @Output() onSelectHero: EventEmitter<HeroAvatarInterface> = new EventEmitter();
    @Output() onViewChange: EventEmitter<ViewType> = new EventEmitter();

    fail() {
        this.onFail.emit();
    }

    selectHero(hero: HeroAvatarInterface) {
        this.onSelectHero.emit(hero);
    }

    changeView(view: ViewType) {
        this.onViewChange.emit(view);
    }
}
