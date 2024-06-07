import LiveTimestamp from "./LiveTimestamp";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
  article: ResultsEntry;
};

function Article({ article }: Props) {
  return (
    <article
      className="bg-slate-100 dark:bg-black flex flex-col 
    rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200
    transition-all duration-200 ease-out"
    >
      {article.image_url && (
        <img
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
          src={article.image_url.toString()}
          alt={article.title.toString()}
        />
      )}

      <div className="flex-1 flex flex-col justify-between px-4 py-2">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{article.title}</h2>

          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-3">{article.description}</p>
          </section>

          <footer
            className="text-xs text-right ml-auto
          flex space-x-1 pt-5 italic text-gray-400"
          >
            <p>{article.source_url}</p>
            <p>
              <LiveTimestamp time={article.pubDate.toString()} />
            </p>
          </footer>
        </div>

        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}

export default Article;
