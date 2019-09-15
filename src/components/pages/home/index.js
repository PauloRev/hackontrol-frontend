import React from 'react';
import { Link } from 'react-router-dom';

import {
  Banner, FormEvent, NextEvents, Newsletter,
} from './style';

import Cards from '../cards';

function Home() {
  const InputEnv = (e) => {
    e.preventDefault();
    alert('Ops! Função indisponivel :(');
  };

  return (
    <div>
      <Banner className="banner">
        <div className="overlay">
          <article className="content">
            <h1>
              Todos os
              {' '}
              <br />
              Hackathons em um
              {' '}
              <br />
              só lugar
            </h1>
            <p>Centenas de hackathons e eventos online para você ou para sua empresa</p>
          </article>
          <FormEvent>
            <p>Encontre o evento mais perto de você</p>
            <input type="text" placeholder="Digite Cidade, Estado ou Região" />
            <p>Ou procure por um evento online</p>
            <input type="text" placeholder="Digite o nome ou tipo do evento" />
            <button onClick={InputEnv}>Buscar</button>
          </FormEvent>
        </div>
      </Banner>
      <NextEvents>
        <h2>Próximos eventos</h2>
        <div>
          <Cards />
        </div>
        <Link to="/">Ver mais</Link>
      </NextEvents>
      <Newsletter>
        <div className="overlay">
          <article>
            <p>
              Assine nossa newsletter e não
              {' '}
              <br />
              {' '}
              perca mais nenhum evento!
            </p>
            <form>
              <input type="email" placeholder="Seu melhor e-mail..." />
              <button onClick={InputEnv}>Assinar</button>
            </form>
          </article>
        </div>
      </Newsletter>
    </div>
  );
}

export default Home;