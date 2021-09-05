import React, { useContext, useState } from 'react';
import rocketseat from '../../assets/img/rocketseat.svg';
import login from '../../assets/img/login.svg';
import Input from '../../components/Input';
import './styles.scss';

import { AuthContext } from '../../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleLogin(event) {
    event.preventDefault();

    await signIn({ email, password });
  }

  return (
    <>
      <nav className="login-navbar">
        <img src={rocketseat} alt="Logo da Rocketseat" />
      </nav>
      <main className="login-main">
        <section className="login-illustration">
          <img src={login} alt="Planets" />
        </section>

        <section className="login-form">
          <form>
            <h1>Login</h1>

            <div className="email-input">
              <Input
                type="email"
                name="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <label htmlFor="email">
                <span className="email-placeholder">E-mail</span>
              </label>
            </div>

            <div className="password-input">
              <Input
                type="password"
                name="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <label htmlFor="password">
                <span className="password-placeholder">Senha</span>
              </label>
            </div>

            <Input
              type="submit"
              value="Entrar"
              className="login-btn"
              onClick={handleLogin}
            />

            <span>
              Não tem uma conta? <a href="/">Registre aqui</a>
            </span>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
