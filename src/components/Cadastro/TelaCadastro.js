import { Link } from 'react-router-dom';
import {Corpo, Img, Form, Input, Button, LinkCadastro} from "./../../assets/css/estilos"
import logo from './../../assets/imagem/logo-trackit.png'

export default function TelaCadastro(){
    return(
        <>
            <Corpo>
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
            </Corpo>
        </>
    );
}

