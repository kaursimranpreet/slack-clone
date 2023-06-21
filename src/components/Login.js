import { Button } from '@mui/material';
import React from 'react'
import { styled } from 'styled-components'
import { auth, provider } from '../firebase';

function Login() {

    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>
        alert(error.message));

    }
  return <LoginContainer>

    <LoginInnerContainer>
        <img
        src="https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      
        alt="" 
        />
        <h1>Sign In to Slack-Clone</h1>
        <Button onClick={signIn} >Sign In with Google</Button>
    </LoginInnerContainer>
  </LoginContainer>
}
// src="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
export default Login;

const LoginContainer=styled.div`
    background-color: #f8f8f8;
    height:100vh;
    display:grid;
    place-items: center;
`;


const LoginInnerContainer=styled.div`
padding: 100px;
text-align:center;
background-color: white;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

> img {
    object-fit:contain;
    height:100px;
    margin-bottom: 40px;
}

> button{
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48;
    color:white
}
`;
