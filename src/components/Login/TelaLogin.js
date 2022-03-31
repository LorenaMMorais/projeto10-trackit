import { Link } from 'react-router-dom';
import {Conteudo, Img, Form, Input, Button, LinkCadastro} from "./../../assets/css/estilosForm"
import logo from './../../assets/imagem/logo-trackit.png'

export default function TelaLogin(){
    return(
        <>
            <Conteudo>
                <Img src={logo} alt="logo-trackit"/>
                <Form>
                    <Input type="email" placeholder="email"/>
                    <Input type="password" placeholder="senha"/>
                    <Link to="/hoje">
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