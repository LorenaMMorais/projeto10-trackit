import styled from "styled-components";

export const ContainerHabito = styled.div`
    width: 100%;
    height: 100%;
    padding: 18px 19px 15px;

    display: ${props => props.plus ? "flex" : "none"};

    background: #FFFFFF;
    border-radius: 5px;
    box-sizing: border-box;
`
export const HeaderHabitos = styled.div`
    gap: 94px;
    display: flex;    
`
export const Input = styled.input`
    width: 303px;
    height: 45px;  
    margin-bottom: 8px; 

    background-color: ${props => props.disabled ? '#F2F2F2' : '#FFFFFF'};
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
        
        color: ${props => props.disabled ? '#AFAFAF' : '#DBDBDB'};
    }
`
export const ContainerHabitoSalvo = styled.div`
    width: 340px;
    height: 91px;

    background: #FFFFFF;
    border-radius: 5px;
`
export const Semana = styled.div`
    display: flex;
    flex-direction: inline;
    gap: 4px;
`
export const DiaDaSemana = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.selecionado ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color:  ${props => props.selecionado ? "#FFFFFF" : "#DBDBDB"};
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
    cursor: pointer;
    
    
    background-color: ${props => props.salvo ? "#52B6FF" : "#FFFFFF"}
    border: none;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;

    color: ${props => props.salvo ? "#FFFFFF" : "#52B6FF"};
    ${props => props.desabilitado && 'opacity: 0.7' };
`
export const BotaoSalvar = styled.button`
    width: 84px;
    height: 35px;
    cursor: pointer;

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
export const ImgTrash = styled.img`
    width: 13px;
    heigth: 15px;
    cursor: pointer;
`