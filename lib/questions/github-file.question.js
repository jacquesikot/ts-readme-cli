"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubFileQuestion = void 0;
const tslib_1 = require("tslib");
const inquirer_1 = tslib_1.__importDefault(require("inquirer"));
const answer_choice_1 = require("../models/answer-choice");
async function GithubFileQuestion() {
    const listOfFiles = [
        { name: 'Feature request', value: answer_choice_1.GithubChoiceValue.FEATURE_REQUEST },
    ];
    return inquirer_1.default.prompt([
        {
            name: 'files',
            type: 'list',
            message: 'Which Githab files do you want to generate',
            choices: listOfFiles,
        },
    ]);
}
exports.GithubFileQuestion = GithubFileQuestion;
