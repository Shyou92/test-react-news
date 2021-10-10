import NewsList from "../NewsList/NewsList"
import news from '../../utils';
import { useState, useEffect, useCallback } from "react";

function News() {
  let newsNumber = 50;
  let addOnePieceOfNews = 1;
  const [amountOfNews, setAmountOfNews] = useState(newsNumber)

  let width = document.documentElement.clientWidth;

  // const memoizedCallback = useCallback(() => function numberOfNews() {
  //   setAmountOfNews(amountOfNews + addOnePieceOfNews);
  // }, [amountOfNews, addOnePieceOfNews]);

  // useEffect(() => {
  //   console.log(amountOfNews);
  //   if (Element.scrollLeft === width) {
  //     setAmountOfNews(amountOfNews + 1);
  //   }
  // }, [amountOfNews, width])
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position)
    setScrollPosition(position);
};
  useEffect(() => {
    document.addEventListener('scroll', handleScroll());
    return () => {
        document.removeEventListener('scroll', handleScroll());
    };
  }, [])
  console.log(document.documentElement.clientWidth);
  return (
    <section className="news">
      <NewsList news={news.length !== 0 ? news.slice(0, amountOfNews) : ''}/>
    </section>
  )
}

export default News;