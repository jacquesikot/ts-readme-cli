"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.featureRequest = void 0;
const path_1 = require("../../models/path");
const filename_1 = require("../../models/filename");
const default_template_1 = require("../default/default.template");
function featureRequest() {
    const fileName = filename_1.FileName.FEATURE_REQUEST;
    const hasPath = true;
    const filePath = path_1.GithubPath.ISSUE_TEMPLATE;
    const fileContent = () => {
        return `---
name: Feature request
about: Suggest an idea for this project
title: ''
labels: ''
assignees: ''
---
**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]
**Describe the solution you'd like**
A clear and concise description of what you want to happen.
**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.
**Additional context**
Add any other context or screenshots about the feature request here.
        `;
    };
    return default_template_1.defaultTemplate(fileName, fileContent(), hasPath, filePath);
}
exports.featureRequest = featureRequest;
