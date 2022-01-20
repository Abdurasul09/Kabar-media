import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/actions/postActions";
import ModalContent from "./modal";

export default function MainNewsList() {
    const router = useRouter();
    const dispatch = useDispatch();

    const showItem = (item) => {
        if (item.media) {
            if(item.media.video) {
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
            }
            return <img src={item.media.thumbnail} alt="Med"/>
        }
        return (
            <img src={item.images[0].image} alt="Med"/>
        )
    }
    const {
        posts: {posts},
    } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <>
            <div className="MainNewsList">
                {posts ? (
                    posts.map((item) => (
                        <div className='newsItem' key={item.id}>
                            <div className="newsModal">
                                <div className="news--item">
                                    <div className="box">
                                        {
                                            showItem (item)
                                        }
                                    </div>

                                    <div className="newsItemElems">
                                        <div className='newsItemElemsBox1'>
                                            <Link href={`/article/[id]`} as={`/article/${item.id}`}>
                                                <h4>{item.title.substr(0, 80)}</h4>
                                            </Link>
                                        </div>
                                        <div className="newsItemElemsBox2">
                                            <div className='box1'>
                                                <h6>{item.created.substr(0, 10)}</h6>
                                            </div>
                                            <div className='box2'>
                                                <i className="far fa-eye"/>
                                                <h6>{item.viewed}</h6>
                                            </div>
                                            <ModalContent/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="underline"/>
                        </div>
                    ))
                ) : (
                    <h2>Жүктөө</h2>
                )}
            </div>
        </>
    );
}
