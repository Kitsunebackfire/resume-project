import RenderStyling from "./css/RenderedResume.module.css";

function RenderedResume(props) {
  return (
    <div>
      <header className={RenderStyling.nameContainer}>
        <h1 className={RenderStyling.name}>
          {props.data.firstName} {props.data.lastName}
        </h1>
        <p>{RenderStyling.occupation}</p>
      </header>
      <div className={RenderStyling.description}>fdf</div>
    </div>
  );
}

export default RenderedResume;
