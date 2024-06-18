export interface INews {
  link: string;
  photo_url: string;
  published_datetime_utc: string;
  source_favicon_url: string;
  source_logo_url: string;
  source_url: string;
  title: string;
  sub_articles?: INews[]; // Assuming sub_articles are also of type INews
}
