import {HeaderContainer, Logo, ImgPerfil} from "./estilo";
import { useContext } from "react";
import UserContext from "./../../contexts/UserContext";

export default function Header(){
    const {data} = useContext(UserContext);

    return(
        <>
            <HeaderContainer>
                <Logo>TrackIt</Logo>
                <ImgPerfil src={data.image} alt="foto do usuário" />
            </HeaderContainer>
        </>
    );
}