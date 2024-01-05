import { styled } from "styled-components";

export const PostHeaderContainer = styled.div`
    width: 54rem;
    height: 13.25rem;
    background-color: ${props => props.theme['base-profile']};
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    padding: 2rem;
    border-radius: 10px;
`

export const LinksHeader = styled.div`
    display: flex;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        color: ${props => props.theme['blue']};
        font-size: 0.75rem;
        border-bottom: 2px solid ${props => props.theme['base-profile']};
        padding-top: 0.5rem;

        svg {
            width: 1rem;
            height: 1rem;
        }
    }

    a:hover{
        border-bottom: 2px solid ${props => props.theme['blue']};
    }

`
// export const Bio = styled.p`
//     color: ${props => props.theme['base-text']};
// `

export const InfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    align-items: center;
    gap: 1rem;

`
export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`
export const Followers = styled(Info)`
    gap: 0.25rem
`