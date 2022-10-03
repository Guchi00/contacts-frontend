import styled from "styled-components";
import { Link } from "react-router-dom";

export const GetStarted = styled(Link)`
    height: 30px;
    width: 100px;
    position: absolute;
    bottom: 15rem;
    left: 25rem;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #38a2ed;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    font-weight: 400;
    text-decoration: none;
`;