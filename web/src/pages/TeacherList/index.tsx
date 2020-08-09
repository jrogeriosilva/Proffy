import React from "react";
import PageHeader from "../../components/PageHeader";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esse são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars2.githubusercontent.com/u/15113099?s=460&u=fcc4665021410c71d8d43e883109c585f3e7fd21&v=4"
              alt="Rogério"
            />
            <div>
              <strong>José Rogério</strong>
              <span>Informática</span>
            </div>
          </header>
          <p>
            I love learn about Technology, and I'm currently working hard on
            learn Typescript, Javascript ES6+,NodeJs, ReactJs and React Native.
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>R$ 60,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
