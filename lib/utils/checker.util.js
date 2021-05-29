"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileAlreadyExist = exports.checkIfDirExistElseMakeDir = exports.checkExistence = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const logger_util_1 = require("./logger.util");
const checkExistence = (path) => {
    return fs_1.default.existsSync(process.cwd() + path);
};
exports.checkExistence = checkExistence;
const checkIfDirExistElseMakeDir = (hasPath, path) => {
    if (hasPath) {
        let dir = exports.checkExistence(path);
        if (!dir) {
            fs_1.default.mkdirSync(process.cwd() + path, { recursive: true });
        }
    }
};
exports.checkIfDirExistElseMakeDir = checkIfDirExistElseMakeDir;
const fileAlreadyExist = (fileName) => {
    logger_util_1.showError(`${fileName} already exists!`);
    process.exit(1);
};
exports.fileAlreadyExist = fileAlreadyExist;
