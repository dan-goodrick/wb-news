import { useEffect, useState } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { requestArticles } from '../../reducers/reddit.js';

export default function Reddit() {
  const articles = useSelector(state=>state.reddit.articles)
  const loading = useSelector(state=>state.reddit.loading)
  const dispatch = useDispatch()
  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);

  useEffect(()=> {
    dispatch(requestArticles)
  }, [])
  return (
    <div className="news-container">
      <img src="../../assets/redditLogo.png" alt="" className='logo' />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
