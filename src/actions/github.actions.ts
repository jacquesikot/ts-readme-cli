import { featureRequest } from '../templates/github';
import { GithubChoiceValue, Answer } from '../models/answer-choice';
import { GithubFileQuestion as githubFileQuestion } from '../questions';
import { ConsoleMessage } from '../models/console-message';
import { showInfo } from '../utils/logger.util';

export async function githubActions(): Promise<any> {
  const githubFileAnswer: Answer = await githubFileQuestion();

  switch (githubFileAnswer.files) {
    case GithubChoiceValue.FEATURE_REQUEST: {
      showInfo(ConsoleMessage.START_GENERATING);
      return featureRequest();
    }
  }
}
