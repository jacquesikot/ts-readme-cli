export interface Answer {
  files: Object;
  provider: ProviderChoiceValue;
  overwrite?: boolean;
}

export interface Choice {
  name: string;
  value: GithubChoiceValue | GitlabChoiceValue | ProviderChoiceValue;
}

export enum GithubChoiceValue {
  FEATURE_REQUEST = 'FEATURE_REQUEST',
}

export enum GitlabChoiceValue {
  MERGE_REUEST = 'MERGE_REQUEST',
}

export enum ProviderChoiceValue {
  GITHUB = 'Github',
  GITLAB = 'Gitlab',
}
