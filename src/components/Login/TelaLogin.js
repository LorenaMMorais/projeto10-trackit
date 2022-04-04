import { Link } from 'react-router-dom';
import {Corpo, Img, Form, Input, Button, LinkCadastro} from "./../../assets/css/estilos"
import logo from './../../assets/imagem/logo-trackit.png'
import {ThreeDots} from 'react-loader-spinner';
import { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function TelaLogin(){
    const [dadosUsuario, setDadosUsuario] = useState({email: "", password: ""});
    const [desabilitado, setDesabilitado] = useState(false);
    const navigate = useNavigate();
    const {setData} = useContext(UserContext);
    
    function EnviarDados(e){
        e.preventDefault();
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', dadosUsuario);
        setDesabilitado(true);
        requisicao.then(resposta => {
            setData(resposta.data);
            navigate("/hoje");
        });
        requisicao.catch(e => {
            setDesabilitado(false);
            alert(`${e}. Login inválido, preenchar novamente!`);
        });
    }

    return(
        <>
            <Corpo>
                <Img src={logo} alt="logo-trackit"/>
                <Form onSubmit={EnviarDados}>
                    <Input type="email" placeholder="email" value={dadosUsuario.email} onChange={e => setDadosUsuario({...dadosUsuario, email: e.target.value})} disabled={desabilitado} required/>
                    <Input type="password" placeholder="senha"value={dadosUsuario.password} onChange={e => setDadosUsuario({...dadosUsuario, password: e.target.value})} disabled={desabilitado} required/>
                    <Link to="/hoje">
                        <Button type="submit" disabled={desabilitado}>{desabilitado ? <ThreeDots width="60" heigth="60" color="#FFFFFF" ariaLabel="loading"/> : "Entrar"}</Button>
                    </Link>
                </Form>
                <Link to="/cadastro">
                    <LinkCadastro className="link-cadastre-se">Não tem uma conta? Cadastre-se</LinkCadastro>
                </Link>
            </Corpo>
        </>
    );
}