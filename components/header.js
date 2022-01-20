import Link from "next/link";
import Image from "next/image"
import Logo from "../public/images/logo.svg";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {mediaAction} from "../store/actions/media-action";

export default function Header() {
    const router = useRouter();
    const dispatch = useDispatch();

    const {
        medias: {media},
    } = useSelector((state) => state);
    useEffect(() => {
        dispatch(mediaAction());
    }, []);
    return (
        <>
            <div className='header'>
                <div className="container">
                    <div className="headerContent">
                        <nav className="navbar">
                            <Link href="/">
                                <a>
                                    <Image src={Logo} alt="Logo"/>{" "}
                                </a>
                            </Link>


                            <div className="navbar__socials">
                                {
                                    media ? (
                                        media.map((item) => (
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

                                    ) : (
                                        <h2>байланыштар жок</h2>
                                    )
                                }

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
