import Image from "next/image"
import Link from 'next/link'
import Logo from "../public/images/logo.svg";
import Logo2 from "../public/images/logo_title.svg";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {contactsAction} from "../store/actions/contacts";
import {mediaAction} from "../store/actions/media-action";


export default function Footer() {
    const router = useRouter();
    const dispatch = useDispatch();

    const {
        contact: {contacts},
    } = useSelector((state) => state);

    const {
        medias: {media},
    } = useSelector((state) => state);

    useEffect(() => {
        dispatch(contactsAction());
        dispatch(mediaAction())
    }, []);
    console.log(media)
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="footerContent">
                        <div className='firstSecond'>
                            <div className="firstContent">
                                <Image src={Logo} alt="Logo"/>{" "}
                                <div className="footerSotSet">
                                    {
                                        media ? (
                                            media.map((item)=>(
                                                <>
                                                <a href={item.instagram}>
                                                    <i className="fab fa-instagram"/>
                                                </a>
                                            <a href={item.facebook}>
                                                <i className="fab fa-facebook"/>
                                            </a>
                                         <a href={item.youtube}>
                                         <i className="fab fa-youtube"/>
                                         </a>
                                         <a href={item.telegram}>
                                         <i className="fab fa-telegram"/>
                                         </a>
                                                </>
                                            ))
                                        ):(<h2>medias not found</h2>)
                                    }

                                </div>
                                <span>
                            Кабар же Кыргыз Улуттук маалымат агенттиги “Кабар” Кыргызстандын расмий маалымат агенттиги.
                            Бул өлкөдөгү эң эски маалымат агенттиги.
                        </span>
                            </div>
                            <div className="secondContent">
                                <h2>Меню</h2>
                                <Link href={'/'}>
                                    <a className="nav-item">
                                        Башкы бет
                                    </a>
                                </Link>
                                <Link href={'/interesting-posts'}>
                                    <a className="nav-item">
                                        Кызыктуулар
                                    </a>
                                </Link>
                                <Link href={'/mostreading-posts'}>
                                    <a className="nav-item">
                                        Эң көп окулгандар
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="fourthContent">
                            <h2>Биз менен байланышуу</h2>
                            <div className="content">
                            {
                                contacts ? (

                                    contacts.map((item) => (

                                        <>
                                            <a href="https://2gis.kg/bishkek/geo/15763234351155013?m=74.617735%2C42.885493%2F16" className="address">
                                                <i className="fas fa-home"/>
                                                <span>Жибек жолу 369</span>
                                            </a>
                                            <a href={"tel:`${item.phone}`"} className="address">
                                                <i className="fas fa-phone"/>
                                                <span>{item.phone}</span>
                                            </a>
                                            <a href={"mailto: `${item.email}`"} className="address">
                                                <i className="fas fa-at"/>
                                                <span>{item.email}</span>
                                            </a>
                                        </>
                                    ))
                                ) : (
                                    <h2>Байланыштар жок</h2>
                                )
                            }

                        </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='footer-2'>
                <div className='container'>
                    <div className='finish'>
                        <div className="box1">
                            <i className="far fa-copyright"/>
                               <span>2021   Баардык укуктар корголгон</span>
                        </div>
                        <div className="box2">
                            <Image src={Logo2}/>
                            <a href="https://www.motion-web.io/">Motion Web LLC cтудиясы жасаган.</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
