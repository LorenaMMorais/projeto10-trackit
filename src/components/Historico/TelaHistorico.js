import { Corpo } from '../../assets/css/estilos';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { ConteudoHistorico, Progresso, Titulo, TituloHistorico } from './estilo';
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function TelaHistorico(){

    const {data} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => !data.token && navigate("/"), [data.token, navigate]);

    return(
        <Corpo>
            <Header/>
            <ConteudoHistorico>
                <TituloHistorico>
                    <Titulo>Histórico</Titulo>
                    <Progresso>Em breve você poderá ver o histórico dos seus hábitos aqui!</Progresso>
                </TituloHistorico>
            </ConteudoHistorico>
            <Footer/>
        </Corpo>
    );
}