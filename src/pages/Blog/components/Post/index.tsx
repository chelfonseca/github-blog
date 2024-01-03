import { PostContainer, PostHeader, PostContent, PublishedAt } from "./styles"

interface PostProps {
    id: string,
    title: string,
    publishedAt: string,
    content: string

}

export function Post({title, publishedAt, content}:PostProps) {
    return (
        <PostContainer>
            <PostHeader>
                <h3>{title}</h3>
                <PublishedAt>{publishedAt}</PublishedAt>
            </PostHeader>
            <PostContent>{content}</PostContent>
            

        </PostContainer>

    )
}