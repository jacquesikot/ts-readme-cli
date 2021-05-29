"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitlabFileQuestion = void 0;
const tslib_1 = require("tslib");
const inquirer_1 = tslib_1.__importDefault(require("inquirer"));
const answer_choice_1 = require("../models/answer-choice");
async function GitlabFileQuestion() {
    const listOfFiles = [
        { name: 'Merge request', value: answer_choice_1.GitlabChoiceValue.MERGE_REUEST },
    ];
    return inquirer_1.default.prompt([
        {
            name: 'files',
            type: 'list',
            message: 'Which Gitlab files do you want to generate',
            choices: listOfFiles,
        },
    ]);
}
exports.GitlabFileQuestion = GitlabFileQuestion;
