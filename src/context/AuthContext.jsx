import { createContext, useEffect, useState } from 'react';
import { api } from '../api/api';
import { useHistory } from 'react-router';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const isAuthenticated = !!user;

  useEffect(() => {
    const token = localStorage.getItem('valoriza.token');

    if (token) {
      api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`;
    }

    setLoading(false);
  }, []);

  async function signIn({ email, password }) {
    const response = await api.post('/login', {
      email,
      password,
    });

    const { admin, token } = response.data;

    setUser({
      email,
      admin,
    });

    localStorage.setItem('valoriza.token', JSON.stringify(token));
    api.defaults.headers.authorization = `Bearer ${token}`;

    history.push('/home');
  }

  async function logOut() {
    localStorage.removeItem('valoriza.token');
    api.defaults.headers.authorization = undefined;
    history.push('/login');
  }

  if (loading) {
    return <h1>Carregando</h1>;
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
