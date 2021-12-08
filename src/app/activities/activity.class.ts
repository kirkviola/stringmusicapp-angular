import { Problem } from "../problems/problem.class";
import { User } from "../users/user.class";
import { ActivityType } from "./activity-type.class";

export class Activity {
    id: Number;
    title: string;
    pointsEarned: number;
    pointsPossible: number;
    score: number;
    userId: number;
    isComplete: boolean;
    activityTypeId: number;

    activityType!: ActivityType
    user!: User;
    problems!: Problem[];

    constructor(){
        this.id = 0;
        this.title = "";
        this.pointsEarned = 0;
        this.pointsPossible = 0;
        this.score = 0;
        this.isComplete = false;
        this.activityTypeId = 0;
        this.userId = 0;
    }
}