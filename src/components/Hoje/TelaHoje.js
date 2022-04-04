import { Corpo } from '../../assets/css/estilos';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HabitosHoje from '../HabitosHoje/HabitosHoje';
import { ConteudoHoje, Progresso, Titulo, TituloHoje} from './estilo';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import axios from 'axios';

export default function TelaHoje(){
    const {token} = useContext(UserContext);
    const navigate = useNavigate();
    const [habitosHoje, setHabitosHoje] = useState([]);

    useEffect(() => !token && navigate("/"), [token, navigate]);

    useEffect(() => {
        const config = {headers: { Authorization: `Bearer ${token}`}};
        const requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);

        requisicao.then(resposta => {console.log(resposta.data);
                                     setHabitosHoje(resposta.data);            
        });
        requisicao.catch(erro => alert(`${erro.response.status}`));
    }, [token]);

    return(
        <Corpo>
            <Header/>
            <ConteudoHoje>
                <TituloHoje>
                    <Titulo>Segunda, 17/05</Titulo>
                    <Progresso>Nenhum hábito concluído ainda</Progresso>
                </TituloHoje>
                {habitosHoje.map((habitoHoje, i) => <HabitosHoje key={i} habitoHoje={habitoHoje} setHabitosHoje={setHabitosHoje}/>)}
            </ConteudoHoje>
            <Footer/>
        </Corpo>
    );
}