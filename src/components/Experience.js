import ExperienceStyling from "./css/Experience.module.css";
import SaveEditBtn from "./SaveEditBtn";

function Experience(props) {
  return (
    <div className={ExperienceStyling.experienceContainer}>
      <div>Work History</div>
      <form onSubmit={props.handleExperienceArray}>
        <div id="inputContainer" className={ExperienceStyling.inputContainer}>
          <input
            name="previousJob"
            type="text"
            defaultValue=""
            placeholder="Previous Job"
            className={ExperienceStyling.inputStyling}
          />
          <input
            name="previousJobFrom"
            type="text"
            defaultValue=""
            placeholder="From"
            className={ExperienceStyling.inputStyling}
          />
          <input
            name="previousJobTo"
            type="text"
            defaultValue=""
            placeholder="To"
            className={ExperienceStyling.inputStyling}
          />
          <SaveEditBtn />
        </div>
      </form>
    </div>
  );
}

export default Experience;
