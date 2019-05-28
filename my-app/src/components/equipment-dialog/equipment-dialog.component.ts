import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import {HeroEquipment} from "../../interfaces/hero-equipment.interface";
import {translate} from "../../lang";

@Component({
    selector: 'app-shop',
    templateUrl: './equipment-dialog.component.html',
    styleUrls: ['./equipment-dialog.component.scss']
})
export class EquipmentDialogComponent {
    translate = translate;
    private prices = {
        armor: Math.round(5 + 1.2),
        power: Math.round(3 + 1.4),
        healthPotion: 10
    };

    constructor(public dialogRef: MatDialogRef<EquipmentDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public heroEquipment: HeroEquipment,
                private snackBar: MatSnackBar) {
    }

    close(): void {
        this.dialogRef.close();
    }

    updatePrices() {
        this.prices.armor = Math.round(5 + this.heroEquipment.armor * 1.2);
        this.prices.power = Math.round(3 + this.heroEquipment.power * 1.4);
    }

    hasMoney(value: number) {
        return this.heroEquipment.money >= value;
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
        this.heroEquipment.power++;
        this.updatePrices();
        this.heroEquipment.money -= this.prices.power;
    }

    buyArmor() {
        if (!this.checkMoney(this.prices.armor)) {
            return;
        }
        this.heroEquipment.armor++;
        this.updatePrices();
        this.heroEquipment.money -= this.prices.armor;
    }

    buyHealthPotion() {
        if (!this.checkMoney(this.prices.healthPotion)) {
            return;
        }
        this.heroEquipment.healthElixirs++;
        this.heroEquipment.money -= this.prices.healthPotion;
    }

}
