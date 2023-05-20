import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Head from "next/head";

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1);
            router.push('/')
        }, 3000);
    }, []);
    return (
        <>
            <Head>
                <title>Mahmoud's Blog | 404</title>
                <meta name="keywords" content="notfound"/>
            </Head>
            <div className={'not-found'}>
                <h1>Oppsss...</h1>
                <h2>That page cannot be found.</h2>
                <Link href="/">Homepage</Link>
            </div>
        </>
    )
}
export default NotFound;