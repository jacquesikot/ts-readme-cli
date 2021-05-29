"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitlabActions = void 0;
const gitlab_1 = require("../templates/gitlab");
const answer_choice_1 = require("../models/answer-choice");
const questions_1 = require("../questions");
const console_message_1 = require("../models/console-message");
const logger_util_1 = require("../utils/logger.util");
async function gitlabActions() {
    const gitlabFileAnswer = await questions_1.GitlabFileQuestion();
    switch (gitlabFileAnswer.files) {
        case answer_choice_1.GitlabChoiceValue.MERGE_REUEST: {
            logger_util_1.showInfo(console_message_1.ConsoleMessage.START_GENERATING);
            return gitlab_1.mergeRequest();
        }
    }
}
exports.gitlabActions = gitlabActions;
