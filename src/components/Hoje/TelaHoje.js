import { Corpo } from '../../assets/css/estilos';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HabitosHoje from '../HabitosHoje/HabitosHoje';
import { ConteudoHoje, Progresso, Titulo, TituloHoje} from './estilo';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import axios from 'axios';

export default function TelaHoje(){
    const {data, habitosHoje, setHabitosHoje, done, setDone} = useContext(UserContext);
    const navigate = useNavigate();
    dayjs.locate('pt-br');
    let porcentagem = Math.round((done.length*100)/habitosHoje.length);

    useEffect(() => !data.token && navigate("/"), [data.token, navigate]);

    useEffect(() => {
        const config = {headers: { Authorization: `Bearer ${data.token}`}};
        const requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);

        requisicao.then(resposta => {setHabitosHoje(resposta.data);   
                                     setDone(resposta.data.filter((e) => e.done));         
        });
        requisicao.catch(erro => alert(`${erro.response.status}`));
    }, [data.token, setDone, setHabitosHoje]);

    return(
        <Corpo>
            <Header/>
            <ConteudoHoje>
                <TituloHoje>
                    <Titulo>{`${(dayjs().format('dddd'))[0].toUpperCase()}${(dayjs().format('dddd, DD/MM')).slice(1)}`}</Titulo>
                    <Progresso done={!(habitosHoje.length === 0 || porcentagem === 0)}> 
                        {(habitosHoje.length === 0 || porcentagem === 0) ? "Nenhum hábito concluído ainda" : `${porcentagem}% dos hábitos concluídos`}
                    </Progresso>
                </TituloHoje>
                {habitosHoje.map((habitoHoje, i) => <HabitosHoje key={i} habitoHoje={habitoHoje} />)}
            </ConteudoHoje>
            <Footer/>
        </Corpo>
    );
}