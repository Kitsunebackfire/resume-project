import AppStyling from "./components/css/App.module.css";
import PersonalInfo from "./components/PersonalInfo.js";
import Education from "./components/Education.js";
import React from "react";
import RenderedResume from "./components/RenderedResume.js";
import Experience from "./components/Experience.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "First",
      lastName: "Last",
      email: "email",
      university: "university",
      degree: "degree",
      degreeCity: "city",
      experience: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExperienceArray = this.handleExperienceArray.bind(this);
  }

  handleChange(event) {
    const { name, value } = event;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  /*renderExperience() {
    let renderedExperience = this.state.experience;
    for (let i = 0; i < renderedExperience.length; i++) {
      return (
        <div>
          {renderedExperience[i][0]} + {renderedExperience[i][1]}
        </div>
      );
    }
  }
  */

  handleExperienceArray(event) {
    event.preventDefault();

    const experienceArray = this.state.experience;

    let injectedArray = [];

    const targetContainer = event.target.children[0].children;
    for (let i = 0; i < targetContainer.length - 1; i++) {
      injectedArray.push(targetContainer[i].value);
      targetContainer[i].value = "";
    }

    experienceArray.push(injectedArray);
    this.setState({ experience: experienceArray });
    console.log(this.state.experience);

    //const experienceArray = this.state.experience;
    //let injectedArray = [event.company, event.from, event.to];
    //experienceArray.push(injectedArray);
    //this.setState({ experience: experienceArray });
  }

  handleSubmit(event) {
    event.preventDefault();
    const targetContainer = event.target.children[0].children;
    for (let i = 0; i < targetContainer.length; i++) {
      if (
        targetContainer[i].type === "text" ||
        targetContainer[i].type === "email"
      ) {
        this.handleChange(targetContainer[i]);
      }
    }
  }

  render() {
    return (
      <div className={AppStyling.mainContainer}>
        <div className={AppStyling.projectTitleBackground}>
          <header className={AppStyling.projectTitle}>Resume</header>
        </div>
        <div className={AppStyling.entryContainer}>
          <PersonalInfo handleSubmit={this.handleSubmit} />
          <Education handleSubmit={this.handleSubmit} />
          <Experience handleExperienceArray={this.handleExperienceArray} />
        </div>
        <div className={AppStyling.renderContainer}>
          <RenderedResume
            renderExperience={this.renderExperience}
            data={this.state}
          />
        </div>
      </div>
    );
  }
}

export default App;
