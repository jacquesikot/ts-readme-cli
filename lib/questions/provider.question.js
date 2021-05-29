"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerQuestion = void 0;
const tslib_1 = require("tslib");
const inquirer_1 = tslib_1.__importDefault(require("inquirer"));
const answer_choice_1 = require("../models/answer-choice");
async function providerQuestion() {
    const listOfFiles = [
        { name: 'Github', value: answer_choice_1.ProviderChoiceValue.GITHUB },
        { name: 'Gitlab', value: answer_choice_1.ProviderChoiceValue.GITLAB },
    ];
    return inquirer_1.default.prompt([
        {
            name: 'provider',
            type: 'list',
            message: 'Select a Git hosting provider',
            choices: listOfFiles,
        },
    ]);
}
exports.providerQuestion = providerQuestion;
