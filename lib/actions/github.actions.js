"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubActions = void 0;
const github_1 = require("../templates/github");
const answer_choice_1 = require("../models/answer-choice");
const questions_1 = require("../questions");
const console_message_1 = require("../models/console-message");
const logger_util_1 = require("../utils/logger.util");
async function githubActions() {
    const githubFileAnswer = await questions_1.GithubFileQuestion();
    switch (githubFileAnswer.files) {
        case answer_choice_1.GithubChoiceValue.FEATURE_REQUEST: {
            logger_util_1.showInfo(console_message_1.ConsoleMessage.START_GENERATING);
            return github_1.featureRequest();
        }
    }
}
exports.githubActions = githubActions;
