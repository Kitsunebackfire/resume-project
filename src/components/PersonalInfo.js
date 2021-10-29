import PersonalInfoStyling from "./css/PersonalInfo.module.css";
import SaveEditBtn from "./SaveEditBtn.js";

function PersonalInfo(props) {
  return (
    <div className={PersonalInfoStyling.container}>
      <div className={PersonalInfoStyling.sectionTitle}>
        Personal Information
      </div>
      <form onSubmit={props.handleSubmit}>
        <div className={PersonalInfoStyling.inputContainer}>
          <input
            name="firstName"
            type="text"
            defaultValue=""
            placeholder="First Name"
            className={[
              PersonalInfoStyling.inputStyling,
              PersonalInfoStyling.firstName,
            ].join(" ")}
          />
          <input
            name="lastName"
            type="text"
            defaultValue=""
            placeholder="Last Name"
            className={[
              PersonalInfoStyling.inputStyling,
              PersonalInfoStyling.lastName,
            ].join(" ")}
          />
          <input
            name="title"
            type="text"
            defaultValue=""
            placeholder="Title"
            className={[
              PersonalInfoStyling.inputStyling,
              PersonalInfoStyling.title,
            ].join(" ")}
          />

          <input
            name="address"
            type="text"
            defaultValue=""
            placeholder="Address"
            className={[
              PersonalInfoStyling.inputStyling,
              PersonalInfoStyling.address,
            ].join(" ")}
          />
          <input
            name="phoneNumber"
            type="text"
            defaultValue=""
            placeholder="Phone Number"
            className={[
              PersonalInfoStyling.inputStyling,
              PersonalInfoStyling.phoneNumber,
            ].join(" ")}
          />
          <input
            name="email"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            defaultValue=""
            placeholder="Email"
            required
            className={[
              PersonalInfoStyling.inputStyling,
              PersonalInfoStyling.email,
            ].join(" ")}
          />
          <SaveEditBtn />
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
