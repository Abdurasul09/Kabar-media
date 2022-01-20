import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {adversitingAction} from "../store/actions/adversiting-action";
import Link from "next/link";
import Slider from "react-slick";


export default function Advertising() {
    const router = useRouter();
    const dispatch = useDispatch();
    const {
        adversiting: {adversitings},
    } = useSelector((state) => state);
    useEffect(() => {
        dispatch(adversitingAction());
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: Boolean,
    };
    return (
        <div className="advertising">
            <div className="container">
            <Slider {...settings}>
                {
                    adversitings.map((item) => (
                        <Link href={item.link} passHref>
                            <a target="_blank">
                                <img key={item.image} src={item.image} alt="Бул жерде сиздин рекламаңыз болмок"/>
                            </a>
                        </Link>
                    ))
                }
            </Slider>
            </div>
        </div>
    );
}
