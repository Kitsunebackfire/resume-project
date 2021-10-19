import EducationStyling from "./css/Education.module.css";
import SaveEditBtn from "./SaveEditBtn.js";

function Education(props) {
  return (
    <div className={EducationStyling.container}>
      <div className={EducationStyling.sectionTitle}>Education</div>
      <form onSubmit={props.handleSubmit}>
        <div id="inputContainer" className={EducationStyling.inputContainer}>
          <input
            name="university"
            type="text"
            defaultValue=""
            placeholder="University"
            //onChange={props.handleChange}
            className={EducationStyling.inputStyling}
          />
          <input
            name="degree"
            type="text"
            defaultValue=""
            placeholder="Degree"
            //onChange={props.handleChange}
            className={EducationStyling.inputStyling}
          />
          <input
            name="degreeCity"
            type="text"
            defaultValue=""
            placeholder="City"
            //onChange={props.handleChange}
            className={EducationStyling.inputStyling}
          />
          <SaveEditBtn />
        </div>
      </form>
    </div>
  );
}

export default Education;
