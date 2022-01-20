import {createWrapper} from "next-redux-wrapper";
import {Provider} from "react-redux";
import {store} from "../store";
import Head from 'next/head'
import '../styles/index 2.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../node_modules/video-react/dist/video-react.css";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Кабар Медиа</title>
                <link rel="icon" href="/images/Group 86.svg/"/>
                <link rel="stylesheet" href="/css/video-react.css" />
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>

                <meta
                    name="description"
                    content="КАБАР МЕДИА МААЛЫМАТ АГЕНТТИГИ
                    🔵ЭЛ ЧЫНДЫКТЫ БИЛСИН!
                    🔵 Күндүн жаңылыктары менен кабардар болуңуз!
                    🔵24 саат бою биз менен бирге! Байланыш телефон: 0777-54-45-460220625695
                  "
                  
                />
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
