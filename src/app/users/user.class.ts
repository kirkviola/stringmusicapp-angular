import { Activity } from "../activities/activity.class";

export class User {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    teacherName: string;
    isTeacher: boolean;
    isAdmin: boolean;

    activities!: Activity[];

    constructor(){
        this.id = 0;
        this.username = "";
        this.password = "";
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.teacherName = "";
        this.isTeacher = false;
        this.isAdmin = false;
    }
}