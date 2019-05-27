import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ChooseHeroComponent} from '../components/choose-hero/choose-hero.component';
import {ShopComponent} from '../components/shop/shop.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatIconModule, MatSnackBarModule} from "@angular/material";
import { IntroScreenComponent } from '../components/intro-screen/intro-screen.component';
import { GameComponent } from '../components/game/game.component';

@NgModule({
    declarations: [
        AppComponent,
        ChooseHeroComponent,
        ShopComponent,
        IntroScreenComponent,
        GameComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatSnackBarModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
