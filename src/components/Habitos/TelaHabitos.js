import { Corpo } from '../../assets/css/estilos';
import Footer from '../Footer/Footer';
import Habito from '../Habito/Habito';
import Header from '../Header/Header';
import {ContainerHabitos, ContainerTitulo, Titulo, Plus, Texto, ConteudoHabitos, CaixaHabitos} from "./estilo"

export default function TelaHabitos(){
    return(
        <Corpo>
            <Header/>
            <ConteudoHabitos>
                <ContainerHabitos>
                    <ContainerTitulo>
                        <Titulo>Meus hábitos</Titulo>
                        <Plus>+</Plus>
                    </ContainerTitulo>
                    <CaixaHabitos>
                        <Habito type="novo"/>
                        <Habito type="salvo"/>  
                    </CaixaHabitos>                
                    <Texto>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear</Texto>
                </ContainerHabitos>
            </ConteudoHabitos>
            <Footer/>
        </Corpo>
    );
}