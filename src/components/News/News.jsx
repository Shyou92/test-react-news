import NewsList from "../NewsList/NewsList"
import news from '../../utils';

function News() {
  return (
    <section className="news">
      <NewsList news={news}/>
    </section>
  )
}

export default News;