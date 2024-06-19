export interface INews {
  Title: string;
  Source: string;
  Url: string;
  PublishedOn: string;
  Description: string;
  Image: string;
  SourceNationality: string;
  TitleSentiment: string;
  Summary: string;
  Countries?: [];
  Cities?: [];
  Categories?: {
    label: string | undefined;
    IPTCCode: string;
  };
}
