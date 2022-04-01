import {HeaderContainer, Logo, ImgPerfil} from "./estilo";
import foto from './../../assets/imagem/foto-usuario.png';

export default function Header(){
    return(
        <>
            <HeaderContainer>
                <Logo>TrackIt</Logo>
                <ImgPerfil src={foto} alt="foto do usuário" />
            </HeaderContainer>
        </>
    );
}