import { useState } from 'react';
import { ContainerLogin } from './styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/foodexplorer.svg";

function FormLogin({ goRegister }) {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const navigate = useNavigate();
  const [loginValidate, setLoginValidate] = useState(false);
  const [messageLogin, setMessageLogin] = useState('')

  const handleChangeEmail = (e) => {
    setEmailLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPasswordLogin(e.target.value);
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const obj = {
      email: emailLogin,
      password: passwordLogin,
    };

    try {
      const response = await axios.post('https://backend-9jof.onrender.com/sessions', obj);
      const { data } = response;
      
      const token = data.token;

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      await axios.post('https://backend-9jof.onrender.com/sessions/login', obj);

      if (data.user.isAdmin === 'true') {
        navigate('/add-dishes');
      } else {
        navigate('/home');
      }
    } catch (error) {
      console.log(error);
      setLoginValidate(true);
      setMessageLogin("Email ou senha incorretos");
    }
  };


  return (
    <ContainerLogin>
      <div className="logincontainer">
        <div className="title">
         
          <h1> <img src={logo} /> food explorer</h1>
        </div>

        <div className="login">
          <h1>Faça seu Login</h1>

          <form>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              onChange={handleChangeEmail}
              placeholder="Exemplo: exemplo@exemplo.com"
            />
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="No mínimo 6 caracteres"
              onChange={handleChangePassword}
            />
            
              <button className="botaoentrar" type="submit" onClick={loginUser}>
                Entrar
              </button>

            
              <button className="botaoconta" type="submit" onClick={goRegister}>
                Criar uma Conta
              </button>

              {loginValidate ? <p>{messageLogin}</p>:''} 
            
          </form>
        </div>
      </div>
    </ContainerLogin>
  );
}

export default FormLogin;
