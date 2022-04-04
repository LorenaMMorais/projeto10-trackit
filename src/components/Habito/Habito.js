import { BotaoCancelar, BotaoSalvar, Botoes, ContainerHabito, DiaDaSemana, HeaderHabitos, ImgTrash, Input, Semana } from "./estilo";
import { TituloHabito } from "../Hoje/estilo";
import lixeira from '../../assets/imagem/trash-outline.svg'
import {ThreeDots} from 'react-loader-spinner';
import { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from "../../contexts/UserContext";

export default function Habito({type, plus, setPlus, dadosHabito, setListaHabitos}){
    const [habito, setHabito] = useState({name: "", days: []});
    const [desabilitado, setDesabilitado] = useState(false);
    const {data} = useContext(UserContext);
    const semana = ['Seg','Ter','Qua','Qui','Sex','Sab','Dom'];
    
    function SelecionarDias(diaSmn){
        if(habito.days.includes(diaSmn)){
            setHabito({...habito, days: habito.days.filter((e)=> diaSmn === e ? false : true)});
            return;
        }
        setHabito({...habito, days: [...habito.days, diaSmn]});
    }  

    function SalvarHabito(){
        if(habito.days.length === 0){
            alert("Por favor, selecione pelo menos um dia!");
            return;
        }

        const config = {headers: {Authorization: `Bearer ${data.token}`}};
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', habito, config);
        setDesabilitado(true);
        requisicao.then(resposta => {setPlus(false);
                                     setDesabilitado(false);
                                     setHabito({name: "", days: []});
                                     BuscarHabitos();
        });
        requisicao.catch(resposta => {setDesabilitado(false);
                                      (habito.name.length === 0) && alert("Por favor, preencha o nome do hábito!");
        });
    }

    function BuscarHabitos(){
        const config = {headers: {Authorization: `Bearer ${data.token}`}};
        const requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        requisicao.then(resposta => setListaHabitos(resposta.data));
        requisicao.catch(e => console.log(e));
    }

    function DeletarHabitos(id){
        if(window.confirm("Você está prestes a deletar permanentemente um hábito, confirmar esta ação?") === false) return;
        const config = {headers: {Authorization: `Bearer ${data.token}`}};
        const requisicao = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
        requisicao.then(() => BuscarHabitos());
        requisicao.catch(resposta => console.log(resposta));
    }
    
    if(type === "novo"){
        return (
            <ContainerHabito plus={plus}>
                <Input type="text" placeholder="nome do hábito" value={habito.name} onChange={e => setHabito({...habito, name: e.target.value})} disabled={desabilitado} required/>
                <Semana>
                    {semana.map((e, i) => 
                        <DiaDaSemana type="button" key={e} selecionado={habito.days.includes(i)} onClick={() => SelecionarDias(i)} disabled={desabilitado}>{e[0]}</DiaDaSemana>
                    )}
                </Semana>
                <Botoes>
                    <BotaoCancelar salvar={false} onClick={() => setPlus(false)} disabled={desabilitado}>Cancelar</BotaoCancelar>
                    <BotaoSalvar salvar={true} onClick={SalvarHabito}>{desabilitado ? <ThreeDots width="60" heigth="60" color="#FFFFFF" ariaLabel="loading"/> : "Salvar"}</BotaoSalvar>
                </Botoes>
            </ContainerHabito>
        );
    }
    if(type ==="salvo"){
        return (
            <ContainerHabito plus={true}>
                <HeaderHabitos>
                    <TituloHabito>{dadosHabito.name}</TituloHabito>
                    <ImgTrash src={lixeira} alt="lixeira" onClick={() => DeletarHabitos(dadosHabito.id)}/>
                </HeaderHabitos>
                <Semana>
                    {semana.map((e, i) => 
                        <DiaDaSemana key={e} selecionado={dadosHabito.days.includes(i)}>{e[0]}</DiaDaSemana>
                    )}
                </Semana>
            </ContainerHabito>
        );
    }
}