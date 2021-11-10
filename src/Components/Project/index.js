import "./style.scss";

function Project(props) {
  const { img, name, desc, link } = props.data;
  return (
    <div className="project-container">
      <h1>{name}</h1>
      <div className="img-container">
        <img src={img} />
      </div>
      <p>{desc}</p>
      <a className="boton-visitar" href={link}>
        Visitar Proyecto
      </a>
    </div>
  );
}

export default Project;
