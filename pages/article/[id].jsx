import Link from "next/link";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Interesting from "../../components/bottomPage/interesting";
import HomeLayout from "../../components/HomeLayout";
import {fetchPosts} from "../../store/actions/postActions";
import ModalContent from "../../components/main-news/modal";
import {Player} from "video-react";
import api from "../../helpers/consts";
import Slider from "react-slick";

const settings = {
    infinite: true,
    slidesToShow: 1,
    arrows:true,
    dots:true,
    autoplay: Boolean,
};


export default function Post({onePost}) {
    const dispatch = useDispatch();
    const {
        posts: {posts},
    } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);


    const outArticleInfo = (item) => {
        if(item.media){
            if(item.media.video){
                return (
                    <iframe
                        width="560"
                        height="315"
                        src={item.media.video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )
            }
            if(item.media.file){
                return (
                    <Player
                        playsInline
                        poster="/assets/poster.png"
                        src={onePost.media.file}
                    />
                )
            }
        }else{
            return (
                <Slider {...settings} >
                    {onePost.images.map((elem, i) => (
                        <img src={elem.image} alt="Med"/>
                    ))}
                </Slider>
            )
        }
    }

    const showItem = (item) => {
        if (item.media && item.media.video) {
            return (
                <iframe
                    width="140"
                    height="140"
                    src={item.media.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />)
        } else if (item.media && item.media.file) {
            return (
                <img src={item.media.thumbnail} alt="Med"/>
            )
        }
        return (
            <img src={item.images[0].image} alt="Med"/>
        )
    }

    return (
        <HomeLayout>
            <div className="post-page">
                <div className="container">
                    <div className="post-page-content">
                        <div className="one-post">
                            {outArticleInfo(onePost)}
                            <div className="one-post_blockDesc">
                                <h2>{onePost.title}</h2>
                                <p>{onePost.body}</p>
                            </div>
                        </div>
                        <div className="right-posts">
                            <div className="news">
                                {posts ? (
                                    posts.map((item) => (
                                        <div className="newsItem" key={item.id}>
                                            <div className="news--items">
                                                <div className="box">
                                                    {
                                                        showItem(item)
                                                    }
                                                </div>
                                                <div className="newsItemElems">
                                                    <div className="newsItemElemsBox1">
                                                        <Link href={`/article/[id]`} as={`/article/${item.id}`}>
                                                            <h4>{item.title}</h4>
                                                        </Link>
                                                    </div>
                                                    <div className="newsItemElemsBox2">
                                                        <h6>{item.created.substr(0, 10)}</h6>{" "}
                                                        <div className="box2">
                                                            <i className="far fa-eye"/>
                                                            <h6>{item.viewed}</h6>
                                                        </div>
                                                        <ModalContent/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="underline"/>
                                        </div>
                                    ))
                                ) : (
                                    <h2>Loading</h2>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Interesting/>
        </HomeLayout>
    );
}

Post.getInitialProps = async ({query, req}) => {
    const response = await api.get(
        `api/v1/article/${query.id}/`
    );
    const onePost = await response.data;

    return {
        onePost,
    };
};
