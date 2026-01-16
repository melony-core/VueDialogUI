import type { IAnswer } from "./IAnswer.interface";

export interface IDialog {
    name: string;
    description: string;
    answers: IAnswer[];
}