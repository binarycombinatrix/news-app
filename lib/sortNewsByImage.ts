export default function sortNewsByImage(news: NewsResponse) {
  const imagesOnly = news.results.filter((result) => result.image_url !== null);
  const noImages = news.results.filter((result) => result.image_url === null);

  const sortedNews = imagesOnly.concat(noImages);

  return sortedNews;
}
