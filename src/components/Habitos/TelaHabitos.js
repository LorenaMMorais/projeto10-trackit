import { Corpo } from '../../assets/css/estilos';
import Footer from '../Footer/Footer';
import Habit from '../Habito/Habito';
import Header from '../Header/Header';
import {ContainerHabitos, ContainerTitulo, Titulo, Plus, Texto, ConteudoHabitos} from "./estilo"

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
                    <Habit/>
                    <Texto>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear</Texto>
                </ContainerHabitos>
            </ConteudoHabitos>
            <Footer/>
        </Corpo>
    );
}