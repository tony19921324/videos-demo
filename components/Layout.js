import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';

function Layout({
    children,
}) {
    const router = useRouter();
    const pathname = router.pathname;
    return (
        <div>
            <nav>
                <Link href='/'>
                    <a className={clsx({ light: pathname === '/' })}>首頁</a>
                </Link>
                <Link href='/liked-videos'>
                    <a className={clsx({ light: pathname === '/liked-videos' })}>收藏</a>
                </Link>
            </nav>
            {children}
            <style jsx>{`
                a {
                    display: inline-block;
                    font-size: 2rem;
                    font-weight: bold;
                    padding: 16px;
                    text-decoration: none;
                    color: #000;
                }
                .light {
                    color: #CC0000;
                }
            `}</style>
        </div>
    )
};

export default Layout;