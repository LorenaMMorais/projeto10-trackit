import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    position: fixed;
    width: 375px;
    height: 70px;
    bottom: 0px;
    padding: 0 36px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #FFFFFF;
`
export const Opcao = styled.div`
    width: 68px;
    height: 22px;
    cursor: pointer;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    text-decoration: none;
    color: #52B6FF;
`
export const Progresso = styled.div`
    position: fixed;
    width: 91px;
    height: 91px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    bottom: 10px;
    left: calc(50vw - 45.5px);

    background: #52B6FF;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
`
export const LinkRotas = styled(Link)`
    text-decoration-line: none;
`