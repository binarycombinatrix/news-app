"use client";

import { useRouter } from "next/navigation";

type Props = {
  article: ResultsEntry;
};
function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-indigo-500 h-10 rounded-b-lg dark:text-gray-900
  hover:bg-indigo-300"
    >
      Read More
    </button>
  );
}

export default ReadMoreButton;
