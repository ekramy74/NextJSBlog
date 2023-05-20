import Head from "next/head";
import styles from '../../../styles/Author.module.css'

export async function getStaticPaths() {
    // Fetch the list of item IDs from your API
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    // Generate the paths for all item IDs
    const paths = data.map((user) => ({
        params: {userId: user.id.toString()},
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const {params} = context;
    const {userId} = params;

    // Fetch data from API using the itemId
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await res.json();

    return {
        props: {
            user: data,
        },
    };
}

const UserDetails = ({user}) => {

    return (
        <>
            <Head>
                <title>Mahmoud's Blog | Author</title>
                <meta name="keywords" content="author"/>
            </Head>
            <div className={styles.author_header}>
                <h1>{user.name}</h1>
                <p>{user.username}</p>
            </div>
            <div className={styles.author_info}>
                <a href={'mailto:' + user.email}>{user.email}</a>
                <p>{user.phone}</p>
                <a href={`http://www.${user.website}`} target={'_blank'}>{user.website}</a>
                <p>{user.company.name}</p>
                <p className={styles.address}>{user.address.suite}, {user.address.street}, {user.address.city}</p>
            </div>
        </>
    );
}
export default UserDetails;