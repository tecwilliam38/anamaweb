import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css"

import api from '../../api/api';
import { useAuth } from '../../context/authContext';

export default function SignInScreen() {
  const [msg, setMsg] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user_name, setUser_name] = useState("William Ferreira da Silva");
  const [user_cel_phone, setUser_cel_phone] = useState(21969203932)
  const [endereco, setEndereco] = useState("Rua dezesseies nº 869, jardim da paz")
  const [visible, setVisible] = useState(false);

  async function HandleLogin(e) {
    e.preventDefault();
    setMsg("");
    try {      
      const response = await api.post("/user/register", {
        user_name,
        endereco,
        user_cel_phone,
        user_email: email,
        user_password: password
      });
      if (response.data) {
        // Armazenar os dados da response em variáveis - "sessionToken, sessionId..."
        const dados = await response.data;
        api.defaults.headers.common['authorization'] = "Bearer " + response.data.token;
        login(dados);
        navigate("/home");
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);

    }

  }
  return (
    <div className='bg-image container-fluid min-vh-100 d-flex align-items-center justify-content-center'>
      <div className="bg-form p-3 margin-style">
        <form className="form-signin w-100" style={{ maxWidth: "400px" }}>          
          <input
            type="email"
            placeholder="E-mail"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="position-relative">
            <input
              type={visible ? "text" : "password"}
              className="form-control pe-5 mb-3"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`bi ${visible ? "bi-eye" : "bi-eye-slash"} position-absolute eye-style`}
              onClick={() => setVisible(!visible)}
            ></i>
          </div>
        </form>
        <button
          onClick={HandleLogin}
          className="btn btn-primary w-100 button-login p-2"
          type="button"
        >
          Login
        </button>
      </div>
    </div>
  )
}
