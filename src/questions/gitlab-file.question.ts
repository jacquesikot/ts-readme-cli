import inquirer from 'inquirer';

import { Answer, Choice, GitlabChoiceValue } from '../models/answer-choice';

export async function GitlabFileQuestion(): Promise<Answer> {
  const listOfFiles: Choice[] = [
    { name: 'Merge request', value: GitlabChoiceValue.MERGE_REUEST },
  ];

  return inquirer.prompt([
    {
      name: 'files',
      type: 'list',
      message: 'Which Gitlab files do you want to generate',
      choices: listOfFiles,
    },
  ]);
}
