import EducationStyling from "./css/Education.module.css";

function Education(props) {
  return (
    <div className={EducationStyling.container}>
      <div className={EducationStyling.sectionTitle}>Education</div>
      <form onSubmit={props.handleAddEducation}>
        <div id="inputContainer" className={EducationStyling.inputContainer}>
          <input
            name="university"
            type="text"
            defaultValue=""
            placeholder="University"
            className={[
              EducationStyling.inputStyling,
              EducationStyling.university,
            ].join(" ")}
          />
          <input
            name="degree"
            type="text"
            defaultValue=""
            placeholder="Degree Type"
            className={[
              EducationStyling.inputStyling,
              EducationStyling.degree,
            ].join(" ")}
          />
          <input
            name="subject"
            type="text"
            defaultValue=""
            placeholder="Subject"
            className={[
              EducationStyling.inputStyling,
              EducationStyling.subject,
            ].join(" ")}
          />
          <input
            name="degreeState"
            type="text"
            defaultValue=""
            placeholder="State"
            className={[
              EducationStyling.inputStyling,
              EducationStyling.degreeState,
            ].join(" ")}
          />
          <div className={EducationStyling.from}>From:</div>
          <input
            name="degreeDateFrom"
            type="date"
            defaultValue=""
            className={[
              EducationStyling.inputStyling,
              EducationStyling.degreeDateFrom,
            ].join(" ")}
          />
          <div className={EducationStyling.to}>To: </div>
          <input
            name="degreeDateTo"
            type="date"
            defaultValue=""
            className={[
              EducationStyling.inputStyling,
              EducationStyling.degreeDateTo,
            ].join(" ")}
          />

          <button className={EducationStyling.addButton}>Add</button>
        </div>
      </form>
      <button
        className={EducationStyling.deleteBtn}
        onClick={props.handleDeleteEducation}
      >
        Delete Last Entry
      </button>
    </div>
  );
}

export default Education;
