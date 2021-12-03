import { User } from "../users/user.class";

export class Activity {
    id: Number;
    title: string;
    pointsEarned: number;
    pointsPossible: number;
    score: number;
    userId: number;
    user!: User;

    constructor(){
        this.id = 0;
        this.title = "";
        this.pointsEarned = 0;
        this.pointsPossible = 0;
        this.score = 0;
        this.userId = 0;
    }
}