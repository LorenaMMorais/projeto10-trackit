import styled from "styled-components";

export const ContainerHabito = styled.div`
    width: 340px;
    height: 180px;
    padding: 18px 19px 0;

    background: #FFFFFF;
    border-radius: 5px;
    box-sizing: border-box;
`
export const Input = styled.input`
    width: 303px;
    height: 45px;  
    margin-bottom: 8px; 

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    
    &&::placeholder{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        
        color: #DBDBDB;
    }
`
export const Semana = styled.div`
    display: flex;
    flex-direction: inline;
    gap: 4px;
`
export const DiaDaSemana = styled.div`
    width: 30px;
    height: 30px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #DBDBDB;
`
export const Botoes = styled.div`
    margin-top: 29px;
    gap: 25px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const BotaoCancelar = styled.button`
    width: 69px;
    height: 20px;
    
    background: none;
    border: none;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;

    color: #52B6FF;
`
export const BotaoSalvar = styled.button`
    width: 84px;
    height: 35px;

    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;

    color: #FFFFFF;
`