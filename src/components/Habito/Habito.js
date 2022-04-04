import { BotaoCancelar, BotaoSalvar, Botoes, ContainerHabito, DiaDaSemana, HeaderHabitos, ImgTrash, Input, Semana } from "./estilo";
import { useState } from 'react';
import lixeira from '../../assets/imagem/trash-outline.svg'
import checkmark from '../../assets/imagem/checkmark-outline.svg';
import { BotaoHabitoFeito, ContainerHabitoHoje, HabitoHoje, ImgCheck, SequenciaERecorde, TituloHabito } from "../Hoje/estilo";

export default function Habit({type}){
    const [habito, setHabito] = useState("");
    const [selecionado, setSelecionado] = useState([]);
    const semana = ['Seg','Ter','Qua','Qui','Sex','Sab','Dom'];
    
    function SelecionarDias(diaSmn){
        if(selecionado.includes(diaSmn)){
            setSelecionado(selecionado.filter((e)=> diaSmn === e ? false : true));
            return;
        }
        setSelecionado([...selecionado, diaSmn]);
    }  
    
    if(type === "novo"){
        return (
            <ContainerHabito>
                <Input type="text" placeholder="nome do hábito" value={habito} onChange={e => setHabito(e.target.value)}/>
                <Semana>
                    {semana.map((e) => 
                        <DiaDaSemana key={e} selecionado={selecionado.includes(e)} onClick={() => SelecionarDias(e)}>{e[0]}</DiaDaSemana>
                    )}
                </Semana>
                <Botoes>
                    <BotaoCancelar salvar={false}>Cancelar</BotaoCancelar>
                    <BotaoSalvar salvar={true}>Salvar</BotaoSalvar>
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
                    {semana.map((e) => 
                        <DiaDaSemana key={e} selecionado={selecionado.includes(e)}>{e[0]}</DiaDaSemana>
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