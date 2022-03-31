import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaCadastro from "./components/Cadastro/TelaCadastro";
import TelaHabitos from "./components/Habitos/TelaHabitos";
import TelaLogin from './components/Login/TelaLogin';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaLogin />} />
                <Route path="/cadastro" element={<TelaCadastro />} />
                <Route path="/habitos" element={<TelaHabitos />} />
            </Routes>
      </BrowserRouter>
    );
}