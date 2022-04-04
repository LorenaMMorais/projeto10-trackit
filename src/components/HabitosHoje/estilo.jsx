import styled from "styled-components";

export const DadosHabito = styled.p`
    font-size: 13px;
    color:${props => (props.done || props.record) ? '#8FC549' : '#666666'};
    padding-left: 3px;
`; 