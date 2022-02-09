export class Student {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    teacherId: number;

    constructor(){
        this.id = 0;
        this.username = "";
        this.password = "";
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.teacherId = 0;
    }
}