import checkmark from '../../assets/imagem/checkmark-outline.svg';
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import { BotaoHabitoFeito, ContainerHabitoHoje, HabitoHoje, ImgCheck, SequenciaERecorde, TituloHabito } from "../Hoje/estilo";
import { DadosHabito } from "./estilo";

export default function HabitosHoje({habitoHoje}) {
    const {data, BuscarHabitosHoje} = useContext(UserContext);

    function HabitoFeito() {
        const config = {headers: { Authorization: `Bearer ${data.token}`}};
        let condicao = "";

        (habitoHoje.done) ? condicao = "naoFetito" : condicao = "feito";

        const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitoHoje.id}/${condicao}`, {}, config);
        requisicao.then(() => BuscarHabitosHoje());
        requisicao.catch(erro => alert(erro.response.status));
    }

    return (
        <ContainerHabitoHoje plus={true}>
            <HabitoHoje>
                <TituloHabito>{habitoHoje.name}</TituloHabito>
                <SequenciaERecorde>Sequência atual:
                    <DadosHabito done={habitoHoje.done}>{habitoHoje.currentSequence} {habitoHoje.currentSequence<2 ? "dia" : "dias"}</DadosHabito>
                </SequenciaERecorde>
                <SequenciaERecorde>Seu recorde: 
                    <DadosHabito novoRecord={ habitoHoje.done && habitoHoje.currentSequence===habitoHoje.highestSequence}>{habitoHoje.highestSequence} {habitoHoje.highestSequence<2 ? "dia" : "dias"}</DadosHabito>
                </SequenciaERecorde>
            </HabitoHoje>
            <BotaoHabitoFeito>
                <ImgCheck src={checkmark} alt="checkmark" color={habitoHoje.done ? '#8FC549' : '#EBEBEB'} onClick={HabitoFeito}/>
            </BotaoHabitoFeito>
        </ContainerHabitoHoje>
    );
} 