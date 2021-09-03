import React from 'react';
import rocketseat from '../../assets/img/rocketseat.svg';
import login from '../../assets/img/login.svg';
import Input from '../../components/Input';
import './styles.scss';

function Login() {
  return (
    <>
      <nav>
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
              <Input type="email" name="email" />
              <label htmlFor="email">
                <span className="email-placeholder">E-mail</span>
              </label>
            </div>

            <div className="password-input">
              <Input type="password" name="password" />
              <label htmlFor="password">
                <span className="password-placeholder">Senha</span>
              </label>
            </div>

            <Input type="button" value="Entrar" className="login-btn" />

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
