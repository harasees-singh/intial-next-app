import Link from "next/link";

const NewsPage = () => {
    return <ul>
        <li>
            <Link href='/news/Next-js-is-a-great-framework'>
                Next js is great
            </Link>
        </li>
        <li>
            <Link href='/news/React-js-is-a-great-library'>
                React js is great
            </Link>
        </li>
    </ul>
}
export default NewsPage;