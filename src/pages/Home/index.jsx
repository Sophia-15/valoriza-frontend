import React, { useEffect, useState } from 'react';
import { api } from '../../api/api';
import LoggedNavbar from '../../components/LoggedNavbar';
import Input from '../../components/Input/index';
import './styles.scss';
import Compliments from '../../components/Compliments';

function Home() {
  const [compliments, setCompliments] = useState([]);

  useEffect(() => {
    api.get('/compliments').then((response) => {
      console.log(response.data);
      setCompliments(response.data);
    });
  }, [compliments]);

  return (
    <>
      <LoggedNavbar />
      <div className="compliment-input-container">
        <input
          type="text"
          className="compliment-input"
          placeholder="Elogie seu amigo..."
        />

        <Input value="Enviar" type="submit" className="send-compliment" />
      </div>
      {compliments.map((compliment) => {
        return (
          <Compliments
            nameCustom={compliment.tag.name}
            message={compliment.message}
            receiver={compliment.userReceiver.name}
            sender={compliment.userSender.name}
          />
        );
      })}
    </>
  );
}

export default Home;
