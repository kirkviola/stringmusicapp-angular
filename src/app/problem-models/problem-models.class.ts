export class ProblemModel {
    id: number;
    name: string;
    correctAnswer: string;
    questionText: string;
    pointsPossible: number;
    photoPath: string;
    activityType: string;

    constructor() {
        this.id = 0;
        this.name = "";
        this.correctAnswer = "";
        this.questionText = "";
        this.pointsPossible = 0;
        this.photoPath = "";
        this.activityType = "";
    }
}
