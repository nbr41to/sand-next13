import { cache } from 'react';

const fetchNews = async () => {
  /* 3秒待ってからデータを返す */
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const getNews = cache((): string[] => ['news1', 'news2', 'news3']);

    return getNews();
  } catch (error) {
    console.error(error);
  }
};

const News = async () => {
  const news = await fetchNews();
  console.log(news);

  if (!news) return null;

  return (
    <div>
      <h1>News Page</h1>
      {news ? (
        <ul>
          {news?.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default News;
