"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeRequest = void 0;
const path_1 = require("../../models/path");
const filename_1 = require("../../models/filename");
const default_template_1 = require("../default/default.template");
function mergeRequest() {
    const fileName = filename_1.FileName.MERGE_REQUEST;
    const hasPath = true;
    const filePath = path_1.GitlabPath.MERGE_REQUEST_TEMPLATE;
    const fileContent = () => {
        return `# What does this implement/fix? Explain your changes.
…
## Does this close any currently open issues?
…
## Any relevant logs, error output, etc?
(Please put this in a code block, so it is more readable for reviewers )
## Any other comments?
...
## Where has this been tested?
**Browsers:**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] IE 11
- [ ] Edge
- [ ] Opera
        `;
    };
    return default_template_1.defaultTemplate(fileName, fileContent(), hasPath, filePath);
}
exports.mergeRequest = mergeRequest;
