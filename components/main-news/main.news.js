import MainNewsList from "./main-news-list";
import MainNewsVideo from "./main-news-video";
export default function MainNews() {
  return (
    <section id="hero">
      <div className="container">
        <h1 className="hero--title">Күндүн окуясы</h1>
        <div className="main-news">
          <MainNewsList />
          <MainNewsVideo />
        </div>
      </div>
    </section>
  );
}
