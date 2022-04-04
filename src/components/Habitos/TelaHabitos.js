import { Corpo } from '../../assets/css/estilos';
import Footer from '../Footer/Footer';
import Habito from '../Habito/Habito';
import Header from '../Header/Header';
import {ContainerHabitos, ContainerTitulo, Titulo, Plus, Texto, ConteudoHabitos, CaixaHabitos} from "./estilo"
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function TelaHabitos(){
    const {data} = useContext(UserContext);
    const navigate = useNavigate();
    const [listaHabitos, setListaHabitos] = useState([]);
    const [plus, setPlus] = useState(false);

    useEffect(() => !data.token && navigate("/"), [data.token, navigate]);

    useEffect(() => {
        const config = {headers: { Authorization: `Bearer ${data.token}`}};
        const requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);

        requisicao.then(resposta => setListaHabitos(resposta.data));
        requisicao.catch(erro => console.log(erro));
    }, [data.token]);

    return(
        <Corpo>
            <Header/>
            <ConteudoHabitos>
                <ContainerHabitos>
                    <ContainerTitulo>
                        <Titulo>Meus hábitos</Titulo>
                        <Plus onClick={() => setPlus(true)}>+</Plus>
                    </ContainerTitulo>
                    <CaixaHabitos>
                        <Habito type="novo" setListaHabitos={setListaHabitos} listaHabitos={listaHabitos} setPlus={setPlus} plus={plus}/>
                        {listaHabitos.length!==0 && listaHabitos.map((habito, i) => <Habito key={i} type="salvo" dadosHabito={habito} setListaHabitos={setListaHabitos}/>)}
                    </CaixaHabitos>   
                    {listaHabitos.length===0  && <Texto>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Texto>}             
                </ContainerHabitos>
            </ConteudoHabitos>
            <Footer/>
        </Corpo>
    );
}