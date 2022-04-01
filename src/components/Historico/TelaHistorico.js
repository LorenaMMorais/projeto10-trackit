import { Corpo } from '../../assets/css/estilos';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { ConteudoHistorico, Progresso, Titulo, TituloHistorico } from './estilo';

export default function TelaHistorico(){
    return(
        <Corpo>
            <Header/>
            <ConteudoHistorico>
                <TituloHistorico>
                    <Titulo>Histórico</Titulo>
                    <Progresso>Em breve você poderá ver o histórico dos seus hábitos aqui!</Progresso>
                </TituloHistorico>
            </ConteudoHistorico>
            <Footer/>
        </Corpo>
    );
}