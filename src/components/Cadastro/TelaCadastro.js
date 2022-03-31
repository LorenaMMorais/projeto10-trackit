import { Link } from 'react-router-dom';
import {Conteudo, Img, Form, Input, Button, LinkCadastro} from "./../../assets/css/estilosForm"
import logo from './../../assets/imagem/logo-trackit.png'

export default function TelaCadastro(){
    return(
        <>
            <Conteudo>
                <Img src={logo} alt="logo-trackit"/>
                <Form>
                    <Input type="email" placeholder="email"/>
                    <Input type="password" placeholder="senha"/>
                    <Input type="text" placeholder="nome"/>
                    <Input type="url" placeholder="foto"/>
                    <Link to="/">
                        <Button>Cadastrar</Button>
                    </Link>
                </Form>
                <Link to="/">
                    <LinkCadastro className="link-cadastre-se">Já tem uma conta? Faça login!</LinkCadastro>
                </Link>
            </Conteudo>
        </>
    );
}

