import '../Style.scss';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';function Login({ setUser }) {

  const [dd, setName] = useState('');
  const [pwd, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(dd==="muslim" && pwd==="admin"){ navigate('/bl');}
    else{
      const response = await axios.post('http//localhost:80/login.php', { dd, pwd });
      if (response.data.user_id) {
        setUser(response.data.user_id);
        navigate('/');
      } else {
        alert(response.data.error);
      }}
    } catch (error) {
      console.error(error);
    }
  };
  return (
      <div className="Login">
        <h1>S'identifier</h1>
      <form name="f1" onSubmit={handleSubmit}>
        
          <p>Login:</p><input type="text" name="dd" onChange={(e)=>{setName(e.target.value)}}></input>
          <p>Password:</p><input type="password" name="pwd" onChange={(e)=>{setPassword(e.target.value)}} ></input>
          <p>La partie backend ne marche pas j'ai inclus des coordonées statiques:</p>
          <p>User:muslim Password:admin</p>
          <input type="submit" value="Connexion"></input>
        </form>
        <span>Vous n'avez pas de compte ?<Link to="/Inscription" >Inscrivez-vous</Link></span>
        </div>
    );
  }
  export default Login;
  