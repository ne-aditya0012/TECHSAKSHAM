import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";


export default function Header(props) {
    const navigate = useNavigate()
    return <Container className="flex a-center j-between">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
            {props.login ? "Login" : "Sign in"}
        </button>
    </Container>;
}


const Container = styled.div`

    padding: 0 3rem;
    padding-bottom: 10rem;
    .logo{
        img{
            width: 15rem;
        }
    }
        button{
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;


        }
    

`;