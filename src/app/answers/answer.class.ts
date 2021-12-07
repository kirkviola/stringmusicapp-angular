export class Answer {
    id: number;
    option: string;
    problemModelId: number;
    activityId: number;

    constructor() {
        this.id = 0;
        this.option = "";
        this.problemModelId = 0;
        this.activityId = 0;

    }
}