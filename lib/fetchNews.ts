import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  q?: string,
  page?: string,
  isDynamic?: boolean
) => {
  // $q: String
  // $page: String
  //     q: $q, page: $page
  // GraphQl query\

  const GET_QUERY = gql`
    query MyQuery(
      $apikey: String!
      $category: String
      $page: String
      $q: String
    ) {
      myQuery(apikey: $apikey, category: $category, page: $page, q: $q) {
        results {
          article_id
          category
          content
          country
          creator
          description
          image_url
          keywords
          language
          link
          pubDate
          sentiment_stats
          sentiment
          source_icon
          source_id
          source_priority
          source_url
          title
          video_url
        }
        status
        totalResults
        nextPage
      }
    }
  `;

  const res = await fetch(
    "https://cavalheiro.eu-central-a.ibm.stepzen.net/api/musty-hummingbird/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `APIKey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query: GET_QUERY,
        variables: {
          apikey: process.env.NEWS_API_KEY,
          category: category,
          q: q,
          page: page,
        },
      }),
    }
  );

  const newsResponse = await res.json();

  // console.log("newsResponse >>", newsResponse?.data?.myQuery);
  const newsRes = newsResponse?.data?.myQuery;

  if (newsRes?.results?.length > 0) {
    const news = sortNewsByImage(newsResponse.data.myQuery);
    newsRes.results = news;
  }

  return newsRes;
};

export default fetchNews;

// stepzen import curl https://newsdata.io/api/1/latest?apikey=pub_4564532e134ea28ce0a195ca0e898319aac40
//stepzen import curl --request GET 'https://newsdata.io/api/1/latest?apikey=pub_4564532e134ea28ce0a195ca0e898319aac40&q=tech&country=au,jp&category=sports,top&page=1717542140584690614' \
