import React from "react";

function Noticia(props) {
  return (
    <>
      <article>
        <picture>
          <img src={props.img} alt="imagen" srcset="" />
        </picture>
        <h6>{props.date}</h6>
        <p>{props.text}</p>
      </article>
    </>
  );
}

export default Noticia;
