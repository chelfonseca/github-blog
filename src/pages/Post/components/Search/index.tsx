import { SearchContainer, SearchHeader, SearchInput } from "./styles";

export function Search(){
    return(
        <SearchContainer>
            <SearchHeader>
                <h3>Publications</h3>
                <div>
                    <span>6</span>
                    <span>publications</span>
                </div>
            </SearchHeader>
            <SearchInput placeholder="Search Content"/>


        </SearchContainer>
        
    )
}