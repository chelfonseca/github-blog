import { Followers, Info, InfoContainer, LinksHeader, PostHeaderContainer, } from "./styles";
import { ArrowSquareOut, GithubLogo, ChatCircle, CaretLeft, Calendar } from 'phosphor-react';


export function PostHeader() {
    return (
        <PostHeaderContainer>
            <LinksHeader>
                <a>
                    <CaretLeft />
                    <span>VOLTAR</span>
                </a>
                <a>
                    <span>GITHUB</span>
                    <ArrowSquareOut />
                </a>
            </LinksHeader>
            <h2>JavaScript data types and data structures</h2>
            <InfoContainer>
                <Info>
                    <GithubLogo />
                    <span>cameronwll</span>
                </Info>
                <Info>
                    <Calendar />
                    <span>1 day</span>
                </Info>
                <Info>
                    <ChatCircle />
                    <Followers>
                        <span>5</span>
                        <span>comments</span>
                    </Followers>

                </Info>

            </InfoContainer>


        </PostHeaderContainer>
    )
}