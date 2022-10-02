import { useRouter } from "next/router";
const DetailPage = () => {
    const router = useRouter();

    // console.log(router.query.newsId);

    return <h3>this is the news details page</h3>
}
export default DetailPage;