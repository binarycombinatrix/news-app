import fetchNews from "@/lib/fetchNews";
import NewsList from "../NewsList";
type Props = {
  searchParams?: {
    searchTerm: string;
  };
};

async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    undefined,
    searchParams?.searchTerm,
    undefined,
    true
  );

  console.log("search results>>>> ", searchParams?.searchTerm);
  return (
    <div>
      <h1 className="headerTitle">
        Search Results for: {searchParams?.searchTerm}
      </h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
