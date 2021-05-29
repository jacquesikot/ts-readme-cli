"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showUpdate = exports.showCreate = exports.showGenerate = exports.showInfo = exports.showSuccess = exports.showError = exports.showTitleAndBanner = void 0;
const tslib_1 = require("tslib");
const kleur_1 = require("kleur");
const figlet = tslib_1.__importStar(require("figlet"));
const console_message_1 = require("../models/console-message");
const newLine = '\n';
const showTitleAndBanner = () => {
    console.log(kleur_1.cyan(figlet.textSync(console_message_1.ConsoleMessage.TITLE, { horizontalLayout: 'full' })));
    console.info(kleur_1.cyan(console_message_1.ConsoleMessage.BANNER));
};
exports.showTitleAndBanner = showTitleAndBanner;
const showError = (message) => {
    console.error(kleur_1.red(console_message_1.ConsoleMessage.ERROR) + message);
};
exports.showError = showError;
const showSuccess = (message) => {
    console.log(kleur_1.green(console_message_1.ConsoleMessage.SUCCESS) + message + newLine);
};
exports.showSuccess = showSuccess;
const showInfo = (message) => {
    console.info(kleur_1.cyan(console_message_1.ConsoleMessage.INFO) + message + newLine);
};
exports.showInfo = showInfo;
const showGenerate = (fileName) => {
    console.log(kleur_1.cyan(console_message_1.ConsoleMessage.GENERATE) + `${fileName}...`);
};
exports.showGenerate = showGenerate;
const showCreate = (fileName, filePath) => {
    filePath
        ? console.log(kleur_1.green(console_message_1.ConsoleMessage.CREATE) + `${fileName} in ${filePath}`)
        : console.log(kleur_1.green(console_message_1.ConsoleMessage.CREATE) + `${fileName}`);
};
exports.showCreate = showCreate;
const showUpdate = (fileName, filePath) => {
    filePath
        ? console.log(kleur_1.green(console_message_1.ConsoleMessage.UPDATE) + `${fileName} in ${filePath}`)
        : console.log(kleur_1.green(console_message_1.ConsoleMessage.UPDATE) + `${fileName}`);
};
exports.showUpdate = showUpdate;
