import React, { useState } from 'react';
import Input from '../../components/Input';
import rocketseat from '../../assets/img/rocketseat.svg';
import { api } from '../../api/api';

import register from '../../assets/img/registrar.svg';
import './styles.scss';
import { useHistory } from 'react-router';

function Register() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const history = useHistory();

  async function registerUser(event) {
    event.preventDefault();
    await api.post('/register', {
      name: name,
      email: email,
      password: password,
    });

    if ((name, email, password)) {
      history.push('/login');
    }
  }

  return (
    <>
      <nav className="register-navbar">
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
              <Input
                type="text"
                name="name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <label htmlFor="name">
                <span className="register-name-placeholder">Nome</span>
              </label>
            </div>

            <div className="register-email-input">
              <Input
                type="email"
                name="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <label htmlFor="email">
                <span className="register-email-placeholder">E-mail</span>
              </label>
            </div>

            <div className="register-password-input">
              <Input
                type="password"
                name="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <label htmlFor="password">
                <span className="register-password-placeholder">Senha</span>
              </label>
            </div>

            <Input
              type="submit"
              value="Entrar"
              className="register-btn"
              onClick={registerUser}
            />

            <span>
              Já tem uma conta? <a href="/login">Entre aqui</a>
            </span>
          </form>
        </section>
      </main>
    </>
  );
}

export default Register;
