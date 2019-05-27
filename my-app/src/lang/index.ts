import {de} from "./de";
import {en} from "./en";
import {pl} from "./pl";
import {ru} from "./ru";

const langs = {
    en: {...en},
    pl: {...pl},
    ru: {...ru},
    de: {...de},
};
export var defaultLang: langNames = 'pl';

export class Lang {
    static default: langNames = "pl";

    static translate(value: string, replacements?: Array<string | number>): string {
        let newVal: string = langs[Lang.default][value];

        if (replacements && replacements.length) {
            let i = 1;
            for (const replacement of replacements) {
                newVal = newVal.split(`_${i}_`).join(String(replacement));
                i++;
            }
        }

        return newVal;
    }
}

export const setLang = (lang: langNames): void => {
    Lang.default = lang;
};
export const translate = (value: string, replacements?: Array<string | number>): string => {
    return Lang.translate(value, replacements);
};
export declare type langNames = 'en' | 'pl' | 'de' | 'ru';
