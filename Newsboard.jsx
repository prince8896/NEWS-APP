import { useEffect, useState } from "react";
import React from "react";

import NewsItem from "./Newsitem";

const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url ='https://newsapi.org/v2/top-headlines?country=in&category=&{category}&apiKey=1e86ffa230874a5381c238643b8d49c1';
      
    fetch(url).then((Response) => Response.json()).then(data => setArticles(data.articles));
  }, [category]);
  return (
    <><div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news,index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })} </div>
    </>
  );
};
export default Newsboard;
