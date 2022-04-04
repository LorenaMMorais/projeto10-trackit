import { BotaoCancelar, BotaoSalvar, Botoes, ContainerHabito, DiaDaSemana, HeaderHabitos, ImgTrash, Input, Semana } from "./estilo";
import { BotaoHabitoFeito, ContainerHabitoHoje, HabitoHoje, ImgCheck, SequenciaERecorde, TituloHabito } from "../Hoje/estilo";
import lixeira from '../../assets/imagem/trash-outline.svg'
import checkmark from '../../assets/imagem/checkmark-outline.svg';
import { useState, useContext } from 'react';
import axios from 'axios';
import TokenContext from "../../context/Context";

export default function Habit({type}){
    const [habito, setHabito] = useState({name: "", days: []});
    // const [selecionado, setSelecionado] = useState([]);
    const {token} = useContext(TokenContext);
    const semana = ['Seg','Ter','Qua','Qui','Sex','Sab','Dom'];
    
    function SelecionarDias(diaSmn){
        if(habito.days.includes(diaSmn)){
            setHabito({...habito, days: habito.days.filter((e)=> diaSmn === e ? false : true)});
            return;
        }
        setHabito({...habito, days: [...habito.days, diaSmn]});
    }  

    function SalvarHabito(){
        const URL_CRIAR_HABITO = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const config = {headers: {Authorization: `Bearer ${token}`}};
        const requisicao = axios.post(URL_CRIAR_HABITO, habito, config);
        requisicao.then(resposta => console.log(resposta));
        requisicao.catch(error => console.log(error));
    }
    
    if(type === "novo"){
        return (
            <ContainerHabito>
                <Input type="text" placeholder="nome do hábito" value={habito.name} onChange={e => setHabito({...habito, name: e.target.value})}/>
                <Semana>
                    {semana.map((e, i) => 
                        <DiaDaSemana key={e} selecionado={habito.days.includes(i)} onClick={() => SelecionarDias(i)}>{e[0]}</DiaDaSemana>
                    )}
                </Semana>
                <Botoes>
                    <BotaoCancelar salvar={false}>Cancelar</BotaoCancelar>
                    <BotaoSalvar salvar={true} onClick={SalvarHabito}>Salvar</BotaoSalvar>
                </Botoes>
            </ContainerHabito>
        );
    }
    if(type ==="salvo"){
        return (
            <ContainerHabito>
                <HeaderHabitos>
                    <TituloHabito>Titulo do seu hábito</TituloHabito>
                    <ImgTrash src={lixeira} alt="lixeira"/>
                </HeaderHabitos>
                <Semana>
                    {semana.map((e, i) => 
                        <DiaDaSemana key={e} selecionado={habito.days.includes(i)}>{e[0]}</DiaDaSemana>
                    )}
                </Semana>
            </ContainerHabito>
        );
    }
    if(type === "hoje"){
        return(
            <ContainerHabitoHoje>
                <HabitoHoje>
                    <TituloHabito>Ler 1 capítulo de livro</TituloHabito>
                    <SequenciaERecorde>Sequência atual: 3 dias</SequenciaERecorde>
                    <SequenciaERecorde>Seu recorde: 5 dias</SequenciaERecorde>
                </HabitoHoje>
                <BotaoHabitoFeito>
                    <ImgCheck src={checkmark} alt="checkmark"/>
                </BotaoHabitoFeito>
            </ContainerHabitoHoje>
        );
    }
}