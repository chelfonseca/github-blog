import { styled } from 'styled-components';

export const SearchContainer = styled.div`
    width: 54rem;
    height: 6.25rem;
    display:flex;
    flex-direction: column;
    margin: 4rem 2rem 0;
    gap: 1rem;
    
`
export const SearchHeader = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        color: ${props => props.theme['base-subtitle']};
    }

    div {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        color: ${props => props.theme['base-span']};
    }
`   
    
export const SearchInput = styled.input`
    height: 3.125rem;
    background-color: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-border']};
    border-radius: 3px;
    padding: 1rem;
`


