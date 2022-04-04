import { BotaoCancelar, BotaoSalvar, Botoes, ContainerHabito, DiaDaSemana, Input, Semana } from "./estilo";

export default function Habit(){
    const semana = ['S','T','Q','Q','S','S','D'];
    return (
        <ContainerHabito>
            <Input placeholder="nome do hábito"/>
            <Semana>
                {semana.map((e) => 
                    <DiaDaSemana>{e}</DiaDaSemana>
                )}
            </Semana>
            <Botoes>
                <BotaoCancelar salvar={false}>Cancelar</BotaoCancelar>
                <BotaoSalvar salvar={true}>Salvar</BotaoSalvar>
            </Botoes>
        </ContainerHabito>
    );
}