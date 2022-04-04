import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaCadastro from "./components/Cadastro/TelaCadastro";
import TelaHabitos from "./components/Habitos/TelaHabitos";
import TelaHoje from "./components/Hoje/TelaHoje";
import TelaHistorico from "./components/Historico/TelaHistorico"
import TelaLogin from './components/Login/TelaLogin';
import { useState } from 'react';
import UserContext from "./contexts/UserContext";

export default function App(){
    const [data, setData] = useState({});

    return(
        <UserContext.Provider value={{data, setData}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/hoje" element={<TelaHoje />} />
                    <Route path="/habitos" element={<TelaHabitos />} />
                    <Route path="historico" element={<TelaHistorico/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}