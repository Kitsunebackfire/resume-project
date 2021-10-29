import RenderStyling from "./css/RenderedResume.module.css";
import { v4 as uuid_v4 } from "uuid";

function RenderedResume(props) {
  return (
    <div className={RenderStyling.mainContainer}>
      <header className={RenderStyling.personalInfoContainer}>
        <div className={RenderStyling.name}>
          {props.data.firstName} {props.data.lastName}
        </div>
        <div>{props.data.title}</div>
        <div className={RenderStyling.personalInfoParagraph}>
          <div>{props.data.address}</div>
          <div>{props.data.phoneNumber}</div>
          <div>{props.data.email}</div>
        </div>
        <h4>{RenderStyling.occupation}</h4>
      </header>
      <div className={RenderStyling.education}>
        <h3>Education:</h3>
        <div>
          {props.data.education.map((item) => (
            <div className={RenderStyling.educationContainer} key={uuid_v4()}>
              <div className={RenderStyling.educationDateFromAndTo}>
                {item[5]} to {item[7]}
              </div>

              <div className={RenderStyling.educationUniversityAndState}>
                <strong>
                  {item[0]}, {item[3]}
                </strong>
              </div>
              <div className={RenderStyling.educationDegreeType}>
                Degree: {item[1]}
              </div>
              <div className={RenderStyling.educationSubject}>
                Subject: {item[2]}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={RenderStyling.experience}>
        <h3>Work History:</h3>
        <div>
          {props.data.experience.map((item) => (
            <div
              className={RenderStyling.experienceContainer}
              ul
              key={uuid_v4()}
            >
              <div className={RenderStyling.experienceFromAndTo}>
                {item[2]} to {item[4]}
              </div>
              <div className={RenderStyling.experiencePreviousJob}>
                {item[0]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RenderedResume;
