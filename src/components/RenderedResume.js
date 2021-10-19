import RenderStyling from "./css/RenderedResume.module.css";

function RenderedResume(props) {
  return (
    <div>
      <div className={RenderStyling.name}>
        {props.data.firstName} {props.data.lastName}
      </div>
    </div>
  );
}

export default RenderedResume;
