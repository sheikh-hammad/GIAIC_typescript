"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grades = [67, 84, 56, 98, 34];
const newArr = grades.reduce((a, b) => (a + b) / grades.length);
console.log(newArr);
