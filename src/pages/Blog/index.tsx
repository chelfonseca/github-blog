import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";
import { BlogContainer, PostsContainer } from "./styles";

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

export function Blog() {



    return (
        <BlogContainer>
            <Profile />
            <Search />
            <PostsContainer>
                {posts.map((post) => {
                    return (
                        <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        publishedAt = { post.publishedAt } 
                        content = { post.content }
                    />
                    )
                })}
                              


            </PostsContainer>

        </BlogContainer>
    )
}