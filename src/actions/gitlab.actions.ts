import { mergeRequest } from '../templates/gitlab';
import { GitlabChoiceValue, Answer } from '../models/answer-choice';
import { GitlabFileQuestion } from '../questions';
import { ConsoleMessage } from '../models/console-message';
import { showInfo } from '../utils/logger.util';

export async function gitlabActions(): Promise<any> {
  const gitlabFileAnswer: Answer = await GitlabFileQuestion();

  switch (gitlabFileAnswer.files) {
    case GitlabChoiceValue.MERGE_REUEST: {
      showInfo(ConsoleMessage.START_GENERATING);
      return mergeRequest();
    }
  }
}
