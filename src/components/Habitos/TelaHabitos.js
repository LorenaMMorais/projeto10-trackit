import { Corpo } from '../../assets/css/estilosForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {ContainerHabitos, ContainerTitulo, Titulo, Plus, Texto} from "./estilo"

export default function TelaHabitos(){
    return(
        <Corpo>
            <Header/>
            <div className="conteudo">
                <ContainerHabitos>
                    <ContainerTitulo>
                        <Titulo>Meus hábitos</Titulo>
                        <Plus>+</Plus>
                    </ContainerTitulo>
                    <Texto>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear</Texto>
                </ContainerHabitos>
            </div>
            <Footer/>
        </Corpo>
    );
}