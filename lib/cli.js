"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CGX = void 0;
const answer_choice_1 = require("./models/answer-choice");
const actions_1 = require("./actions");
const questions_1 = require("./questions");
const logger_util_1 = require("./utils/logger.util");
async function CGX() {
    logger_util_1.showTitleAndBanner();
    const providerAnswer = await questions_1.providerQuestion();
    if (providerAnswer.provider === answer_choice_1.ProviderChoiceValue.GITHUB) {
        return await actions_1.githubActions();
    }
    else if (providerAnswer.provider === answer_choice_1.ProviderChoiceValue.GITLAB) {
        return await actions_1.gitlabActions();
    }
}
exports.CGX = CGX;
