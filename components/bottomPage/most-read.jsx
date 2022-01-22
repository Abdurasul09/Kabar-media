import Link from "next/link";
import React from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import Slider from "react-slick";
import ModalContent from "../main-news/modal";



const MostRead = () => {
    const dispatch = useDispatch();

    const {
        mostRead: {mostPosts},
    } = useSelector((state) => state);
    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    dotsClass: "slick-dots slick-thumb",
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const outMedia = (item) => {
        if(item.media){
            if(item.media.video){
                return (
                    <iframe
                        width="275"
                        height="137"
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
                    <img src={item.media.thumbnail} alt="Med"/>
                )
            }
            return null;
        }else{
            return <img src={item.images[0].image} alt="Med"/>
        }
    }

    return (
        <section id="most-read">
            <div className="container">
                <h2 className='mostRead'> Эң окумдуу </h2>
                <div className="linkMost">
                    <Link href={`/mostreading-posts`}>Кененирээк</Link>
                </div>
                <div className="mostSlider">
                    <Slider {...settings}>
                        {mostPosts ? (
                            mostPosts.map((item) => (
                                <div className="item" key={item.id}>
                                    <div className="card-img">
                                        {outMedia(item)}
                                    </div>
                                    <div className="bottom-card">
                                        <span>{item.region}</span>
                                        <Link href={`/article/[id]`} as={`/article/${item.id}`}>
                                            <h4>{item.title.substr(0, 80)}</h4>
                                        </Link>
                                        <div className="bottom">
                                            <p className='p1'>{item.created.substr(0, 10)}</p>
                                            <div className='box'>
                                                <i className="far fa-eye"/>
                                                <p>{item.viewed}</p></div>
                                            <ModalContent/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h2>Жүктөө</h2>
                        )}
                    </Slider>
                    <div className="linkMost1">
                        <Link href={`/mostreading-posts`}>Кененирээк</Link>
                    </div>

                </div>
                <style jsx global>
                    {`
                      .slick-prev {
                      }

                      .slick-prev:before {
                        font-size: 30px;
                        color: rgba(69, 73, 93, 0.68) !important;

                      }
                    `}
                </style>

                <style jsx global>
                    {`
                      .slick-next:before {
                        font-size: 30px;
                        color: rgba(69, 73, 93, 0.68) !important;
                      }
                    `}
                </style>
            </div>
        </section>
    );
};

export default MostRead;
