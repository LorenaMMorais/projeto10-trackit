import styled from 'styled-components';

export const Corpo = styled.div`
    width: 375px;
    height: 667px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    // flex-wrap: wrap;
    // justify-content: center;
    align-items: center;

    background: #FFFFFF;
`
export const Img = styled.img`
    width: 180px;
    height: 178.38px;
    margin: 68px 0 32.62px 0;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 6px;
`
export const Input = styled.input`
    width: 303px;
    height: 45px;
    padding-left: 11px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    &&::placeholder{

        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #DBDBDB;
    }
`
export const Button = styled.button`
    width: 303px;
    height: 45px;
    cursor: pointer;

    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;

    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #FFFFFF;
`
export const LinkCadastro = styled.p`
    width: 232px;
    height: 17px;
    curso: pointer;

    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    color: #52B6FF;
`