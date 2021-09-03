import React from 'react';
import Input from '../../components/Input';
import rocketseat from '../../assets/img/rocketseat.svg';

import register from '../../assets/img/registrar.svg';
import './styles.scss';

function Register() {
  return (
    <>
      <nav>
        <img src={rocketseat} alt="Logo da Rocketseat" />
      </nav>
      <main className="register-main">
        <section className="register-illustration">
          <img src={register} alt="Planets" />
        </section>

        <section className="register-form">
          <form>
            <div className="info">
              <h1>Crie sua conta</h1>
              <span>Valorize um amigo</span>
            </div>

            <div className="register-name-input">
              <Input type="text" name="name" />
              <label htmlFor="name">
                <span className="register-name-placeholder">Nome</span>
              </label>
            </div>

            <div className="register-email-input">
              <Input type="email" name="email" />
              <label htmlFor="email">
                <span className="register-email-placeholder">E-mail</span>
              </label>
            </div>

            <div className="register-password-input">
              <Input type="password" name="password" />
              <label htmlFor="password">
                <span className="register-password-placeholder">Senha</span>
              </label>
            </div>

            <Input type="button" value="Entrar" className="register-btn" />

            <span>
              Não tem uma conta? <a href="/login">Entre aqui</a>
            </span>
          </form>
        </section>
      </main>
    </>
  );
}

export default Register;
