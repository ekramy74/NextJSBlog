import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/About"> About</Link>
            <Link href="/Blogs"> Blogs</Link>
        </nav>
    );
}
export default Navbar;