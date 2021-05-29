"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTemplate = void 0;
const tslib_1 = require("tslib");
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
const logger_util_1 = require("../../utils/logger.util");
const checker_util_1 = require("../../utils/checker.util");
const questions_1 = require("../../questions");
function defaultTemplate(fileNameWithExt, fileContent, hasPath = false, filePath = '') {
    logger_util_1.showGenerate(fileNameWithExt);
    checker_util_1.checkIfDirExistElseMakeDir(hasPath, filePath);
    const fileExists = checker_util_1.checkExistence(`${filePath}/${fileNameWithExt}`);
    if (!fileExists)
        return createFile(filePath, fileNameWithExt, fileContent);
    return overwriteFileOrThrowError(filePath, fileNameWithExt, fileContent);
}
exports.defaultTemplate = defaultTemplate;
function createFile(filePath, fileName, fileContent, fileAlreadyExists = false) {
    const filepath = process.cwd() + `${filePath}/${fileName}`;
    fs_extra_1.default.writeFile(filepath, fileContent, (error) => {
        if (!error && !fileAlreadyExists)
            return logger_util_1.showCreate(fileName, filePath);
        if (!error && fileAlreadyExists)
            return logger_util_1.showUpdate(fileName, filePath);
        return logger_util_1.showError(error);
    });
}
async function overwriteFileOrThrowError(filePath, fileNameWithExt, fileContent) {
    const overwriteAnswer = await questions_1.overwriteFileQuestion();
    if (overwriteAnswer.overwrite === true)
        return createFile(filePath, fileNameWithExt, fileContent, true);
    return checker_util_1.fileAlreadyExist(fileNameWithExt);
}
