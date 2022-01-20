import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import HomeLayout from "../components/HomeLayout";

import {fetchInterestingPosts} from "../store/actions/interesting-action";
import {fetchMostRead} from "../store/actions/most-read-actions";
import {useRouter} from "next/router";
import ModalContent from "../components/main-news/modal";

const InterestingPosts = () => {
    const dispatch = useDispatch();

    const {
        interestingReducer: {interestingPosts},
    } = useSelector((state) => state);

    // useEffect(() => {
    //     dispatch(fetchInterestingPosts());
    // }, []);

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(12);


    const router = useRouter();

    const [brandValue, setBrandValue] = useState("");

    useEffect(() => {
        let object = new URLSearchParams(window.location.search);
        dispatch(fetchInterestingPosts(brandValue));
        dispatch(fetchMostRead(brandValue));
        setBrandValue(object.get("region"));
    }, [router]);

    useEffect(() => {
        if (interestingPosts) {
            const data = interestingPosts;
            setPosts(interestingPosts);
        }
    }, [interestingPosts]);

    const numberOfLastPost = currentPage * postPerPage;
    const numberOfFirstPost = numberOfLastPost - postPerPage;
    const currentPosts = posts.slice(numberOfFirstPost, numberOfLastPost);
    const totalPosts = posts.length;

    const handlePage = (newPage) => {
        setCurrentPage(newPage);
    };

    const resetCurrentPage = () => {
        setCurrentPage(1);
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    const showOutVideo = (item) => {
        if (item.media) {
            if (item.media.video) {
                return (
                    <iframe
                        src={item.media.video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )

            } else if (item.media.file) {
                return (
                    <img src={item.media.thumbnail} alt="Med"/>
                )
            }


        } else {
            return (
                <img src={item.images[0].image} alt="Med"/>
            )
        }

}

return (
    <HomeLayout>
        <div className="most-read">
            <div className="container">
                <h2 className='interH2'> Эң кызыктуу </h2>
                <div className="itemContent">
                    {interestingPosts ? (
                        currentPosts.map((item) => (
                            <div className="item" key={item.id}>
                                <div className="card-img">
                                    {showOutVideo(item)}
                                </div>
                                <div className="bottom-card">
                                    <span>{item.region}</span>
                                    <Link href={`/article/[id]`} as={`/article/${item.id}`}>
                                        <h3>{item.title.substr(0, 60)}</h3>
                                    </Link>
                                    <div className="bottom">
                                        <h6 className='p1'>{item.created.substr(0, 10)}</h6>
                                        <div className='box2'>
                                            <i className="far fa-eye"/>
                                            <h6>{item.viewed}</h6>
                                        </div>
                                        <ModalContent/>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h2>Жүктөө</h2>
                    )}
                </div>

                <div className="pagination">
                    {pageNumbers.map((page) => (
                        <div key={page}>
                            <button
                                style={{
                                    backgroundColor: page === currentPage ? "red" : "gray",
                                    color: "white",
                                    margin: "5px",
                                }}
                                onClick={() => handlePage(page)}
                            >
                                {page}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </HomeLayout>
);
}
;

export default InterestingPosts;
