import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaCadastro from "./components/Cadastro/TelaCadastro";
import TelaHabitos from "./components/Habitos/TelaHabitos";
import TelaHoje from "./components/Hoje/TelaHoje";
import TelaHistorico from "./components/Historico/TelaHistorico"
import TelaLogin from './components/Login/TelaLogin';
import { useState } from 'react';
import TokenContext from "./context/Context";

export default function App(){
    const [token, setToken] = useState("");

    return(
        <TokenContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/hoje" element={<TelaHoje />} />
                    <Route path="/habitos" element={<TelaHabitos />} />
                    <Route path="historico" element={<TelaHistorico/>}/>
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    );
}