import { Activity } from "./activity.class";

export class ActivityType {
    id: number;
    name: string;
    activities!: Activity[];
    
    constructor(){
        this.id = 0;
        this.name = "";
    }
}