export class ProblemModel {
    id: number;
    name: string;
    correctAnswer: string;
    questionText: string;
    photoPath: string;
    activityType: string;

    constructor() {
        this.id = 0;
        this.name = "";
        this.correctAnswer = "";
        this.questionText = "";
        this.photoPath = "";
        this.activityType = "";
    }
}
