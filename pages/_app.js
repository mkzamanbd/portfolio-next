//import bootstrap and master scss
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/scss/master.scss'

import favicon from "../public/favicon.png";
import MyImage from '../public/images/zaman.png'
import Head from "next/head";

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <meta name="keywords" content="web development, web developer, Laravel, php, Vue js, Nuxt js, React js, Next js, bootstrap, website, kamruzzaman, web design, landing page, interaction design, sketch" />
                <meta name="description" content="Transforming idea from designing to client side coding for web, Designing user interface for web & mobile platforms..." />
                <meta name="author" content="kamruzzaman" />
                <meta name="copyright" content="kamruzzaman" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#0180FF" />
                <title>Kamruzzaman | Web & Android Application Developer</title>
                <link rel="icon" href={favicon.src} type="image/x-icon" />
                <meta property="og:image" content={MyImage.src} />
                <meta property="og:image:secure_url" content={MyImage.src} />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="420" />
                <meta property="og:image:height" content="280" />
                <meta property="og:image:alt" content="I'm Zaman" />

            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App
