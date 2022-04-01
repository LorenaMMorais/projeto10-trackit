import {FooterContainer, LinkRotas, Opcao, Progresso} from "./estilo"
// import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <FooterContainer>
            <LinkRotas to="/habitos">
                <Opcao>Hábitos</Opcao>
            </LinkRotas>
            <LinkRotas to="/hoje">
                <Progresso>Hoje</Progresso>
            </LinkRotas>
            <LinkRotas to="/historico">
                <Opcao>Histórico</Opcao>
            </LinkRotas>
        </FooterContainer>
    );
}