import { notFound } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";

type Props = {
  searchParams?: ResultsEntry;
};

function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: ResultsEntry = searchParams;

  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {article.image_url && (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl
            object-cover rounded-lg shadow-md"
            src={article?.image_url?.toString()}
            alt={article?.title?.toString()}
          />
        )}

        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>

          <div className="flex divide-x-2 space-x-4">
            <h2 className="mb-1 font-bold">
              By: {article.creator || "unknown"}
            </h2>
            <h2 className="font-bold pl-4">
              Source: {article.source_url || "unknown"}
            </h2>
            <p className="pl-4">
              <LiveTimestamp time={article.pubDate.toString()} />
            </p>
          </div>

          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
