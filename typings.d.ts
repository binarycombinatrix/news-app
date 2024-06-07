type Category =
  | "top"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";

// business
// crime
// domestic
// education
// entertainment
// environment
// food
// health
// lifestyle
// other
// politics
// science
// sports
// technology
// top
// tourism
// world

type ResultsEntry = {
  ai_org: String;
  ai_region: String;
  ai_tag: String;
  article_id: String;
  category: [String];
  content: String;
  country: [String];
  creator: [String];
  description: String;
  image_url: String;
  keywords: [String];
  language: String;
  link: String;
  pubDate: String;
  sentiment: String;
  sentiment_stats: String;
  source_icon: String;
  source_id: String;
  source_priority: Int;
  source_url: String;
  title: String;
  video_url: JSON;
};

type NewsResponse = {
  nextPage: Float;
  results: [ResultsEntry];
  status: String;
  totalResults: Int;
};
