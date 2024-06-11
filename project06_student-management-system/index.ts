#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

// Define student class
class Student {
    static counter = 1000;
    id: number;
    name: string;
    courses: string[];
    balance: number;

    constructor(name: string) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = []; // Initialize an empty array
        this.balance = 10000;
    }
    
    // Method to enroll a student in a course
    enrollCourse(course: string){
        this.courses.push(course)
    }

    // Method to view the student balance
    viewBalance(){
        console.log(chalk.hex('#FFA500')(`Balance for ${this.name}: ${this.balance}`));
    }

    // Method to pay fees
    payFees(amount: number){
        this.balance -= amount;
        console.log(chalk.hex('#FFA500')(`Amount fees $${amount} successfully paid for ${this.name}`));
    }

    // Method to view status
    viewStatus(){
        console.log(`ID: ${this.id}`)
        console.log(`Name: ${this.name}`)
        console.log(`Balance: ${this.balance}`)
        console.log(`Courses: ${this.courses}`)
    }

}

// Define a student manager class to manage students
class Student_manager {
    students: Student[];

    constructor(){
        this.students = [];
    }

    // Method to add new students
    addStudent(name: string){
        let student = new Student(name);
        this.students.push(student);
        console.log(chalk.hex('#FFA500')(`'${name}' successfully added. ID: ${student.id}`));
    }

    // Method to enroll a student in a course
    enrollStudents(student_id: number, course: string){
        let student = this.find_student(student_id)
        if(student){
            student.enrollCourse(course);
            console.log(chalk.hex('#FFA500')(`Student: '${student.name}' successfully enrolled in ${course}`));
        }else{
            console.log(chalk.bold.red("Student not find. Please enter a correct student ID"));
        }
    }

    // Method to view a student balance
    viewStudentBalance(student_id: number){
        let student = this.find_student(student_id)
        if(student){
            student.viewBalance()
        }else{
            console.log(chalk.bold.red("Student not find. Please enter a correct student ID"));
        }
    }

    // Method to pay a fees
    payStudentFees(student_id: number, amount: number){
        let student = this.find_student(student_id)
        if(student){
            student.payFees(amount)
        }else{
            console.log(chalk.bold.red("Student not find. Please enter a correct student ID"))
        }
    }

    // Method to display student status
    viewStudentStatus(student_id: number){
        let student = this.find_student(student_id)
        if(student){
            student.viewStatus()
        }else{
            console.log(chalk.bold.red("Student not find. Please enter a correct student ID"))
        }
    }


    // Method to find a student by student_id
    find_student(student_id: number){
        return this.students.find(std => std.id === student_id);
    }
    
}

// Main
async function main(){
    console.log(chalk.white("         ",("-").repeat(41)));
    console.log(chalk.green("          "+"Sheikh Hammad - Student Management System"+"          "));
    console.log(chalk.white("         ",("-").repeat(41)));

    let student_manager = new Student_manager();

    // While loop to keep program running
    while(true){
        let choice = await inquirer.prompt([
            {
                name: "choices",
                type: "list",
                message: chalk.hex('#F56416')("What do you want to do?"),
                choices: [
                    "Add Student",
                    "Enroll Student",
                    "View Student Balance",
                    "Pay Student Fees",
                    "View Student Status",
                    "Exit"
                ]
            }
        ]);

        // Using a switch case to handle user choices
        switch(choice.choices){
            case "Add Student":
                let name_input = await inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: "Enter a student name"
                    }
                ]);
                student_manager.addStudent(name_input.name);
                break;
            case "Enroll Student":
                let enroll_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a student ID"
                    },
                    {
                        name: "course",
                        type: "input",
                        message: "Enter a course name"
                    }
                ]);
                student_manager.enrollStudents(enroll_input.student_id, enroll_input.course);
                break;
            case "View Student Balance":
                let view_balance_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a student ID"
                    }
                ]);
                student_manager.viewStudentBalance(view_balance_input.student_id);
                break;
            case "Pay Student Fees":
                let fees_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a student ID"
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter a fees amount"
                    }
                ]);
                student_manager.payStudentFees(fees_input.student_id, fees_input.amount);
                break;
            case "View Student Status":
                let student_status_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a student ID"
                    }
                ]);
                student_manager.viewStudentStatus(student_status_input.student_id);
                break;
            case "Exit":
                console.log("Exiting......");
                process.exit();
        }
    }
}

main();