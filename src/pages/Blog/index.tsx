import { Profile } from "./components/Profile";
import { Search } from "./components/Search";
import { BlogContainer } from "./styles";

export function Blog(){
    return (
        <BlogContainer>
            <Profile/>
            <Search/>

        </BlogContainer>
    )
}