import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import React from "react";
import NewsList from "./NewsList";
import response from "../response.json";

async function Homepage() {
  const news: NewsResponse = await fetchNews();

  // console.log("homepage response", news?.results);
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;
