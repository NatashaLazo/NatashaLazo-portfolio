import "./style.scss";

function AboutMe() {
  return (
    <div className="descripcion">
      <p>
        ¡Hola! Mi nombre es Natasha y soy una desarrolladora Frontend en
        busqueda de mi primera experiencia laboral en IT.Mi stack tecnologico es
        HTML5, CSS3, Javascript y React, actualmente me encuentro capacitandome
        en desarrollo backend con NodeJS, Express y MongoDB.
      </p>
      <ul className="skilss">
        <li className="skill">HTML5</li>
        <li className="skill">CSS3</li>
        <li className="skill">SASS</li>
        <li className="skill">JAVASCRIPT</li>
        <li className="skill">REACTJS</li>
        <li className="skill">GIT</li>
        <li className="skill">GITHUB</li>
      </ul>
    </div>
  );
}

export default AboutMe;
