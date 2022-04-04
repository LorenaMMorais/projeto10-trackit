import { Corpo } from '../../assets/css/estilos';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { ConteudoHoje, Progresso, Titulo, TituloHoje} from './estilo';
import Habit from '../Habito/Habito';
export default function TelaHoje(){
    return(
        <Corpo>
            <Header/>
            <ConteudoHoje>
                <TituloHoje>
                    <Titulo>Segunda, 17/05</Titulo>
                    <Progresso>Nenhum hábito concluído ainda</Progresso>
                </TituloHoje>
                <Habit type="hoje"/>
            </ConteudoHoje>

            <Footer/>
        </Corpo>
    );
}