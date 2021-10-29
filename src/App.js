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
      firstName: "",
      lastName: "",
      email: "",
      title: "",
      address: "",
      phoneNumber: "",
      education: [],
      experience: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExperienceArray = this.handleExperienceArray.bind(this);
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
    this.handleEducationArray = this.handleEducationArray.bind(this);
  }

  handleChange(event) {
    const { name, value } = event;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  handleDeleteExperience(event) {
    event.preventDefault();
    const experienceArray = this.state.experience;
    experienceArray.pop();

    this.setState({ experience: experienceArray });
    console.log(this.state.experience);
  }

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
  }

  handleEducationArray(event) {
    event.preventDefault();
    const educationArray = this.state.education;
    let injectedArray = [];

    const targetContainer = event.target.children[0].children;
    for (let i = 0; i < targetContainer.length - 1; i++) {
      injectedArray.push(targetContainer[i].value);
      targetContainer[i].value = "";
    }

    educationArray.push(injectedArray);
    this.setState({ education: educationArray });
    console.log(this.state.education);
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
          <Education handleEducationArray={this.handleEducationArray} />
          <Experience
            handleDeleteExperience={this.handleDeleteExperience}
            handleExperienceArray={this.handleExperienceArray}
          />
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
