import Head from "next/head";
import styles from '../../styles/Blogs.module.css';
import Link from "next/link";

export const getStaticProps = async () => {
    try {
        const [res, res2] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/users')
        ]);
        const data = await res.json();
        const data2 = await res2.json();
        return {
            props: {blogs: data, users: data2}
        }
    } catch (e) {
        return {
            props: {blogs: [], users: []}
        }
    }
}

const Blogs = ({blogs, users}) => {
    return (
        <>
            <Head>
                <title>Mahmoud's Blog | Blogs</title>
                <meta name="keywords" content="blogs"/>
            </Head>
            <div>
                <h1>Blogs</h1>
                {blogs.map(blog => (
                    <div key={blog.id} className={styles.blogs}>
                        <h3 className={styles.single}>{blog.title}</h3>
                        <p>{blog.body}</p>
                        <Link href={'/Blogs/Author/' + blog.userId}
                              className={styles.user}>{users.find(user => user.id === blog.userId).name}</Link>
                    </div>
                ))}
            </div>
        </>

    );
}
export default Blogs;