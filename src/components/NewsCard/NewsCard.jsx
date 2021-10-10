function NewsCard({title, photo, text, rating}) {

  return (
    <section className="card">
      <h2 className="card__header">{title}</h2>
      <img src={photo} alt="space news" className="card__photo" />
      <p className="card__text">{text}</p>
      <p className="card__rating">Rating: {rating}/5</p>
    </section>
  )
}

export default NewsCard;