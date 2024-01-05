import { PostSummaryContainer, PostSummaryHeader, PostSummaryContent, PublishedAt } from "./styles"

interface PostSummaryProps {
    id: string,
    title: string,
    publishedAt: string,
    content: string

}

export function PostSummary({title, publishedAt, content}:PostSummaryProps) {
    return (
        <PostSummaryContainer>
            <PostSummaryHeader>
                <h3>{title}</h3>
                <PublishedAt>{publishedAt}</PublishedAt>
            </PostSummaryHeader>
            <PostSummaryContent>{content}</PostSummaryContent>
            

        </PostSummaryContainer>

    )
}