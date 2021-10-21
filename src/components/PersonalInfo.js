import PersonalInfoStyling from "./css/PersonalInfo.module.css";
import SaveEditBtn from "./SaveEditBtn.js";

function PersonalInfo(props) {
  return (
    <div className={PersonalInfoStyling.container}>
      <div className={PersonalInfoStyling.sectionTitle}>
        Personal Information
      </div>
      <form onSubmit={props.handleSubmit}>
        <div id="inputContainer" className={PersonalInfoStyling.inputContainer}>
          <input
            name="firstName"
            type="text"
            defaultValue=""
            placeholder="First Name"
            className={PersonalInfoStyling.inputStyling}
          />
          <input
            name="lastName"
            type="text"
            defaultValue=""
            placeholder="Last Name"
            className={PersonalInfoStyling.inputStyling}
          />
          <input
            name="email"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            defaultValue=""
            placeholder="Email"
            required
            className={PersonalInfoStyling.inputStyling}
          />
          <SaveEditBtn />
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
