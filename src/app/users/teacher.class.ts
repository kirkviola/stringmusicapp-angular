import { Student } from "./student.class";

export class Teacher {
    id: number = 0;
    username: string = "";
    password: string = "";
    firstname: string = "";
    lastname: string = "";
    email: string = "";

    students: Student[] = [];
}