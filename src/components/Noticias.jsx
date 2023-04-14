import React from "react";
import Noticia from "./Noticia";
import NoticiasStyle from "../css/Noticias.module.css";
function Noticias() {
  return (
    <>
      <section className={NoticiasStyle.container}>
        <h2>Mario en la noticias</h2>
        <article className={NoticiasStyle.noticias}>
          <Noticia
            img="https://media.vandal.net/i/1280x720/4-2023/20234119282560_1.jpg.webp"
            date="04.07.2023"
            text="lorem20 asdasdasdasdasdasd"
          ></Noticia>
          <Noticia
            img="https://media.vandal.net/i/1280x720/4-2023/20234119282560_1.jpg.webp"
            date="04.07.2023"
            text="lorem20 asdasdasdasdasdasd"
          ></Noticia>
          <Noticia
            img="https://media.vandal.net/i/1280x720/4-2023/20234119282560_1.jpg.webp"
            date="04.07.2023"
            text="lorem20 asdasdasdasdasdasd"
          ></Noticia>
        </article>
        <span>
          <a href=""> Ver mas noticias</a>
        </span>
      </section>
    </>
  );
}

export default Noticias;
