import { styled } from "styled-components";

export const PostSummaryContainer = styled.div`
    width: 26rem;
    height: 16.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme['base-post']};
    padding: 2rem;
    border-radius: 10px;
    border: 1px solid ${props => props.theme['base-post']};

    &:hover{
        border: 2px solid ${props => props.theme['blue']};
    }
`
export const PostSummaryHeader = styled.div`
    display: flex;
    align-items: top;
    justify-content: space-between;
    color: ${props => props.theme['base-title']};
`

export const PublishedAt = styled.div`
    width: 3.5rem;
    height: 1rem;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme['base-span']};
    margin-top: 0;
`
export const PostSummaryContent = styled.p`
    color: ${props => props.theme['base-text']};
    line-height: 2rem;
`
