import { Corpo } from '../../assets/css/estilos';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { ConteudoHoje, Progresso, Titulo, TituloHoje} from './estilo';
import Habito from '../Habito/Habito';
export default function TelaHoje(){
    return(
        <Corpo>
            <Header/>
            <ConteudoHoje>
                <TituloHoje>
                    <Titulo>Segunda, 17/05</Titulo>
                    <Progresso>Nenhum hábito concluído ainda</Progresso>
                </TituloHoje>
                <Habito type="hoje"/>
            </ConteudoHoje>
            <Footer/>
        </Corpo>
    );
}