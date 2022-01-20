import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {bannerAction} from "../../store/actions/banner-action";
import Link from "next/link"
import Slider from "react-slick";
import {Player} from "video-react";


export default function MainNewsVideo() {
    const router = useRouter();
    const dispatch = useDispatch();
    const {
        banner: {banners},
    } = useSelector((state) => state);
    useEffect(() => {
        dispatch(bannerAction());
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: Boolean,
    };


    return (<div className="main-video">
        {banners ?
            (
                banners.map((item) => (
                    <div key={item.id}>
                        <Slider {...settings}>
                            {item.images.map(el => (
                                <img src={el.image} alt="img" className='bannerImg'/>
                            ))}
                        </Slider>
                        <Link href={`/article/${item.id}`} key={item.id}>
                            <a>
                                <h1>{item.title}</h1>
                            </a>
                        </Link>
                    </div>
                ))) : (<h2>Жаңылык жок</h2>)}


    </div>);
}


