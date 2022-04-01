import { Corpo } from '../../assets/css/estilos';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { ConteudoHoje, ContainerHabitoHoje, Progresso, Titulo, TituloHabito, TituloHoje, SequenciaERecorde, BotaoHabitoFeito, HabitoHoje, ImgCheck } from './estilo';
import checkmark from '../../assets/imagem/checkmark-outline.svg';
export default function TelaHoje(){
    return(
        <Corpo>
            <Header/>
            <ConteudoHoje>
                <TituloHoje>
                    <Titulo>Segunda, 17/05</Titulo>
                    <Progresso>Nenhum hábito concluído ainda</Progresso>
                </TituloHoje>
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
                <ContainerHabitoHoje>
                    <HabitoHoje>
                        <TituloHabito>Ler 1 capítulo de livro</TituloHabito>
                        <SequenciaERecorde>Sequência atual: 3 dias</SequenciaERecorde>
                        <SequenciaERecorde>Seu recorde: 3 dias</SequenciaERecorde>
                    </HabitoHoje>
                    <BotaoHabitoFeito>
                        <ImgCheck src={checkmark} alt="checkmark"/>
                    </BotaoHabitoFeito>
                </ContainerHabitoHoje>
                <ContainerHabitoHoje>
                    <HabitoHoje>
                        <TituloHabito>Ler 1 capítulo de livro</TituloHabito>
                        <SequenciaERecorde>Sequência atual: 1 dias</SequenciaERecorde>
                        <SequenciaERecorde>Seu recorde: 5 dias</SequenciaERecorde>
                    </HabitoHoje>
                    <BotaoHabitoFeito>
                    <ImgCheck src={checkmark} alt="checkmark"/>
                    </BotaoHabitoFeito>
                </ContainerHabitoHoje>
            </ConteudoHoje>

            <Footer/>
        </Corpo>
    );
}