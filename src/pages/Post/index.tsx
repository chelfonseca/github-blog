

import { PostHeader } from "./components/PostHeader";
import { PostContainer, PostContent } from "./styles";


const posts = [{
    id: "1",
    title: "JavaScript data types and data structures",
    publishedAt: "1 day",
    content: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ..."


},
{
    id: "2",
    title: "JavaScript data types and data structures",
    publishedAt: "1 day",
    content: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ..."

},
{
    id: "3",
    title: "JavaScript data types and data structures",
    publishedAt: "1 day",
    content: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ..."

}
]

export function Post() {



    return (
        <PostContainer>
            <PostHeader/>
            <PostContent>
                <p>{posts[0].content}</p>

            </PostContent>
            

        </PostContainer>
    )
}