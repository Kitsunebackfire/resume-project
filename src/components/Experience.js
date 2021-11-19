import ExperienceStyling from "./css/Experience.module.css";

function Experience(props) {
  return (
    <div className={ExperienceStyling.container}>
      <div className={ExperienceStyling.sectionTitle}>Work History</div>
      <form onSubmit={props.handleAddExperience}>
        <div id="inputContainer" className={ExperienceStyling.inputContainer}>
          <input
            name="previousJob"
            type="text"
            defaultValue=""
            placeholder="Previous Job"
            className={[
              ExperienceStyling.inputStyling,
              ExperienceStyling.prevJob,
            ].join(" ")}
            required
          />
          <div className={ExperienceStyling.from}>From:</div>
          <input
            name="previousJobFrom"
            type="date"
            defaultValue=""
            className={[
              ExperienceStyling.inputStyling,
              ExperienceStyling.prevJobFrom,
            ].join(" ")}
            required
          />
          <div className={ExperienceStyling.to}>To:</div>
          <input
            name="previousJobTo"
            type="date"
            defaultValue=""
            className={[
              ExperienceStyling.inputStyling,
              ExperienceStyling.prevJobTo,
            ].join(" ")}
            required
          />
          <button className={ExperienceStyling.addButton}>Add</button>
        </div>
      </form>
      <button
        className={ExperienceStyling.deleteBtn}
        onClick={props.handleDeleteExperience}
      >
        Delete Last Entry
      </button>
    </div>
  );
}

export default Experience;
