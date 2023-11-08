import { BackGroundContainer, Cover } from "./styles";
import CoverImage from "../../../assets/Cover.png";

export function BackGround(){
    return (
        <BackGroundContainer>
             <Cover src={CoverImage}/>
        </BackGroundContainer>
    )
}