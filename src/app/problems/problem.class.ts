export class Problem {
    id: number;
    name: string;
    correctAnswer: string;
    questionText: string;
    selectedAnswer: string;
    pointsEarned: number;
    pointsPossible: number;
    photoPath: string;
    activityType: string;

    styleType!: string;


    constructor() {
        this.id = 0;
        this.name = '';
        this.correctAnswer= '';
        this.questionText = '';
        this.selectedAnswer = '';
        this.pointsEarned = 0;
        this.pointsPossible = 0;
        this.photoPath = '';
        this.activityType = '';
    }

}