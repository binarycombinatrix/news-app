import fetchNews from "@/lib/fetchNews";
import NewsList from "../../NewsList";
import { categories } from "@/constants";
type Props = {
  params: { category: Category };
};
async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}

//localhost:3000/news/business
//localhost:3000/news/entertainment
//etc will be prebuilt
