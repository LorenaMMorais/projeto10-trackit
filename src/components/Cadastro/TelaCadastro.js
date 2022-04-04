import { Link, useNavigate} from 'react-router-dom';
import {Corpo, Img, Form, Input, Button, LinkCadastro} from "./../../assets/css/estilos"
import logo from './../../assets/imagem/logo-trackit.png'
import {useState} from 'react'
import axios from "axios";

export default function TelaCadastro(){
    const [dadosUsuario, setDadosUsuario] = useState ({email: "", nomeUsuario: "", urlImagem: "", senha: ""});
    const [desabilitado, setDesabilitado] = useState(false);
    const navigate = useNavigate();

    function enviarDados(e){
        e.preventDefault();
        const URL_SING_UP = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
        const requisicao = axios.post(URL_SING_UP, dadosUsuario);
        setDesabilitado(true);
        requisicao.then(resposta => { 
            console.log(resposta.data);
            navigate("/");
        });
        requisicao.catch(e => {
            setDesabilitado(false);
            console.log(e);
            alert(`${e}. Login inválido, preenchar novamente!`)
        });
    }

    return(
        <>
            <Corpo>
                <Img src={logo} alt="logo-trackit"/>
                <Form onSubmit={enviarDados}>
                    <Input type="email" placeholder="email" value={dadosUsuario.email} onChange={e => setDadosUsuario({...dadosUsuario, email: e.target.value})} desabilitado={desabilitado}/>
                    <Input type="password" placeholder="senha" value={dadosUsuario.email} onChange={e => setDadosUsuario({...dadosUsuario, senha: e.target.value})} desabilitado={desabilitado}/>
                    <Input type="text" placeholder="nome" value={dadosUsuario.email} onChange={e => setDadosUsuario({...dadosUsuario, nomeUsuario: e.target.value})} desabilitado={desabilitado}/>
                    <Input type="url" placeholder="foto" value={dadosUsuario.email} onChange={e => setDadosUsuario({...dadosUsuario, urlImagem: e.target.value})} desabilitado={desabilitado}/>
                    <Link to="/">
                        <Button type="submit" desabilitado={desabilitado}>{desabilitado ? "desabilitado" : "Cadastrar"}</Button>
                    </Link>
                </Form>
                <Link to="/">
                    <LinkCadastro>Já tem uma conta? Faça login!</LinkCadastro>
                </Link>
            </Corpo>
        </>
    );
}

