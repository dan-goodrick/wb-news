import { useEffect} from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { requestArticles } from '../../reducers/hackerNews.js';

export default function HackerNews() {
  const articles = useSelector(state=>state.hackerNews.articles)
  const loading = useSelector(state=>state.hackerNews.loading)
  const dispatch = useDispatch()
  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);

  useEffect(()=> {
    dispatch(requestArticles)
  }, [])
  return (
    <div className="news-container">
      <img className='logo' src="../../assets/hackerNews.jpeg" alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
