import { ActivityType } from "../activities/activity-type.class";

export class Answer {
    id: number;
    selection: string;
    activityTypeId: number;

    activityType!: ActivityType

    constructor() {
        this.id = 0;
        this.selection = "";
        this.activityTypeId = 0;

    }
}