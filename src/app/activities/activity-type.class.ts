import { Answer } from "../answers/answer.class";
import { Activity } from "./activity.class";

export class ActivityType {
    id: number;
    name: string;

    answers!: Answer[];


    
    constructor(){
        this.id = 0;
        this.name = "";
    }
}