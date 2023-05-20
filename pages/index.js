import styles from '../styles/Home.module.css';
import Link from "next/link";
import Head from 'next/head';


export default function Home() {
    return (
        <>
            <Head>
                <title>Mahmoud's Blog | Home</title>
                <meta name="keywords" content="blog"/>
            </Head>
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit
                    suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio
                    tempore iure accusamus, dolorem nobis odit.</p>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit
                    suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio
                    tempore iure accusamus, dolorem nobis odit.</p>
                <Link href="/Blogs" className={styles?.btn}>See Blogs</Link>
            </div>
        </>

    )
}
