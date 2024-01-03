import { styled } from "styled-components";

export const ProfileContainer = styled.div`
    width: 54rem;
    height: 13.25rem;
    background-color: ${props => props.theme['base-profile']};
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 9.25rem;
    grid-template-areas: "Avatar BioContainer";
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-radius: 10px;
`
export const Avatar = styled.img`
    width: 9.25rem;    
    height: 9.25rem;    
    grid-area: "avatar";
    /* background-color: ${props => props.theme['base-span']}; */
    border-radius: 10px;
`
export const BioContainer = styled.div`
    width: auto;    
    height: 9.25rem;  
    grid-area: "BioContainer";
    background-color: ${props => props.theme['base-profile']};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    h1 {
        color: ${props => props.theme['base-title']};
    } 
    
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
export const Bio = styled.p`
    color: ${props => props.theme['base-text']};
`

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