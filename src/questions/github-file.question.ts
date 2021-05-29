import inquirer from 'inquirer';

import { Answer, Choice, GithubChoiceValue } from '../models/answer-choice';

export async function GithubFileQuestion(): Promise<Answer> {
  const listOfFiles: Choice[] = [
    { name: 'Feature request', value: GithubChoiceValue.FEATURE_REQUEST },
  ];

  return inquirer.prompt([
    {
      name: 'files',
      type: 'list',
      message: 'Which Githab files do you want to generate',
      choices: listOfFiles,
    },
  ]);
}
