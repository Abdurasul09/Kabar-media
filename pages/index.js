import Advertising from "../components/advertising";
import FilterPosts from "../components/bottomPage/filter";
import Interesting from "../components/bottomPage/interesting";
import MostRead from "../components/bottomPage/most-read";
import HomeLayout from "../components/HomeLayout";
import MainNews from "../components/main-news/main.news";
import FirstFilter from "../components/first-filter";
import Search from "../components/search";

export default function Home() {
    return (
        <HomeLayout>
            <Search/>
            <div className="category">
                <div className="container">
                    <FirstFilter/>
                </div>
            </div>
            <MainNews/>
            <FilterPosts/>
            <MostRead/>
            <Interesting/>
            <Advertising/>
        </HomeLayout>
    );
}
