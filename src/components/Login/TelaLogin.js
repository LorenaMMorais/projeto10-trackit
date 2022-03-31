import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './../../assets/imagem/logo-trackit.png'
export default function TelaLogin(){
    return(
        <>
            <Conteudo>
                <Img src={logo} alt="logo-trackit"/>
                <Form>
                    <Input type="email" placeholder="email"/>
                    <Input type="password" placeholder="senha"/>
                    <Link to="/habitos">
                        <Button>Entrar</Button>
                    </Link>
                </Form>
                <Link to="/cadastro">
                    <LinkCadastro className="link-cadastre-se">Não tem uma conta? Cadastre-se</LinkCadastro>
                </Link>
            </Conteudo>
        </>
    );
}

const Conteudo = styled.div`
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
const Img = styled.img`
    width: 180px;
    height: 178.38px;
    margin: 68px 0 32.62px 0;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 6px;
`
const Input = styled.input`
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
const Button = styled.button`
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
const LinkCadastro = styled.p`
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