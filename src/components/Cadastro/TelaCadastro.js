import { Link, useNavigate} from 'react-router-dom';
import {Corpo, Img, Form, Input, Button, LinkCadastro} from "./../../assets/css/estilos"
import logo from './../../assets/imagem/logo-trackit.png'
import {ThreeDots} from 'react-loader-spinner';
import {useState} from 'react'
import axios from "axios";

export default function TelaCadastro(){
    const [dadosUsuario, setDadosUsuario] = useState ({email: "", name: "", image: "", passaword: ""});
    const [desabilitado, setDesabilitado] = useState(false);
    const navigate = useNavigate();

    function enviarDados(e){
        e.preventDefault();
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', dadosUsuario);
        setDesabilitado(true);
        requisicao.then(() => navigate("/"));
        requisicao.catch(erro => {
            setDesabilitado(false);
            alert(`${erro}. Login inválido, preenchar novamente!`);
        });
    }

    return(
        <>
            <Corpo>
                <Img src={logo} alt="logo-trackit"/>
                <Form onSubmit={enviarDados}>
                    <Input type="email" placeholder="email" value={dadosUsuario.email} onChange={e => setDadosUsuario({...dadosUsuario, email: e.target.value})} disabled={desabilitado} required/> 
                    <Input type="password" placeholder="senha" value={dadosUsuario.passaword} onChange={e => setDadosUsuario({...dadosUsuario, passaword: e.target.value})} disabled={desabilitado} required/>
                    <Input type="text" placeholder="nome" value={dadosUsuario.name} onChange={e => setDadosUsuario({...dadosUsuario, name: e.target.value})} disabled={desabilitado} required/>
                    <Input type="url" placeholder="foto" value={dadosUsuario.image} onChange={e => setDadosUsuario({...dadosUsuario, image: e.target.value})} disabled={desabilitado} required/>
                    <Link to="/">
                        <Button type="submit" disabled={desabilitado}>{desabilitado ? <ThreeDots width="60" heigth="60" color="#FFFFFF" ariaLabel="loading"/> : "Cadastrar"}</Button>
                    </Link>
                </Form>
                <Link to="/">
                    <LinkCadastro>Já tem uma conta? Faça login!</LinkCadastro>
                </Link>
            </Corpo>
        </>
    );
}

