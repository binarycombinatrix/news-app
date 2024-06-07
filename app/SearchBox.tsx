"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?searchTerm=${input}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a topic"
        className="w-full h-14 rounded-sm placeholder-gray-500 text-black-dark outline-none flex-1 bg-transparent dark:text-black-light"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-dark-gray disabled:text-gray-500"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
