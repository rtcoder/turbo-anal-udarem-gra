import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ChooseHeroComponent} from '../components/choose-hero/choose-hero.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    MAT_DIALOG_DEFAULT_OPTIONS,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule
} from "@angular/material";
import {IntroScreenComponent} from '../components/intro-screen/intro-screen.component';
import {GameComponent} from '../components/game/game.component';
import {EquipmentDialogComponent} from "../components/equipment-dialog/equipment-dialog.component";

@NgModule({
    declarations: [
        AppComponent,
        EquipmentDialogComponent,
        ChooseHeroComponent,
        IntroScreenComponent,
        GameComponent,
    ],
    entryComponents: [
        EquipmentDialogComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatSnackBarModule,
        MatIconModule,
        MatDialogModule,
    ],
    providers: [
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
