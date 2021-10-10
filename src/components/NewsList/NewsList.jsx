import NewsCard from "../NewsCard/NewsCard";

function NewsList({news}) {
  return (
    <section className="newsList">
      {news.length !== 0 ? (
        news.map((item) => {
          return (
            <NewsCard
              key={item.id}
              title={item.title}
              photo={item.photo}
              text={item.text}
              rating={item.rating}
            />
          )
        })
      ) : ""}
    </section>
  )
}

export default NewsList;