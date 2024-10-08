"use strict";
/*
Pulling Apart a Nested Object: Imagine you
 have a list inside another list that shows what a
 computer programmer knows, like coding languages,
 tools, and software frameworks. Find a way to get
 three specific skills from this list and show them.
*/
const computerProgrammer = {
    languages: ['Javascript', 'Kotlin', 'PHP'],
    tools: ['VS Code', 'Postman', 'Docker'],
    frameworks: ['React', 'Next', 'Nest']
};
const { languages, tools, frameworks } = computerProgrammer;
console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
