import { Avatar, Bio, BioContainer, Followers, Header, Info, InfoContainer, ProfileContainer } from "./styles";
import { ArrowSquareOut, GithubLogo, Buildings, Users } from 'phosphor-react';
import avatar from '../../../../assets/avatar.svg';

export function Profile() {
    return (
        <ProfileContainer>
            <Avatar src={avatar} />
            <BioContainer>
                <Header>
                    <h2>Cameron Williamson</h2>
                    <a>
                        <span>GITHUB</span>
                        <ArrowSquareOut />
                    </a>
                </Header>
                <Bio>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.

                </Bio>
                <InfoContainer>
                    <Info>
                        <GithubLogo />
                        <span>cameronwll</span>
                    </Info>
                    <Info>
                        <Buildings />
                        <span>Rocketseat</span>
                    </Info>
                    <Info>
                        <Users />
                        <Followers>
                            <span>32</span>
                            <span>followers</span>
                        </Followers>

                    </Info>

                </InfoContainer>

            </BioContainer>
        </ProfileContainer>
    )
}