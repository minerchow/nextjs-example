import { useRouter } from 'next/router'
import Link from 'next/link'


const Post = () => {
    const router = useRouter()
    const { a } = router.query
    console.log(router.query);


    return (
        <>
            <h1>Post: {a}</h1>
            <ul>
                <li>
                    <Link href="/post/[id]/[comment]" as={`/post/${a}/first-comment`}>
                        <a>First comment</a>
                    </Link>
                </li>
                <li>
                    <Link href="/post/[id]/[comment]" as={`/post/${a}/second-comment`}>
                        <a>Second comment</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Post
