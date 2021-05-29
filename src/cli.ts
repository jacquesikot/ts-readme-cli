import { Answer, ProviderChoiceValue } from './models/answer-choice';
import { githubActions, gitlabActions } from './actions';
import { providerQuestion } from './questions';
import { showTitleAndBanner } from './utils/logger.util';

export async function CGX(): Promise<any> {
  showTitleAndBanner();

  const providerAnswer: Answer = await providerQuestion();

  if (providerAnswer.provider === ProviderChoiceValue.GITHUB) {
    return await githubActions();
  } else if (providerAnswer.provider === ProviderChoiceValue.GITLAB) {
    return await gitlabActions();
  }
}
