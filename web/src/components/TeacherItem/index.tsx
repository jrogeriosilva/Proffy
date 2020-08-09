import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
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
        I love learn about Technology, and I'm currently working hard on learn
        Typescript, Javascript ES6+,NodeJs, ReactJs and React Native.
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
  );
}

export default TeacherItem;
