import AppStyling from "./components/css/App.module.css";
import PersonalInfo from "./components/PersonalInfo.js";
import Education from "./components/Education.js";
import React from "react";
import RenderedResume from "./components/RenderedResume.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      university: "",
      degree: "",
      degreeCity: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event;
    this.setState({ [name]: value });
    console.log(this.state);
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
        </div>
        <div className={AppStyling.renderContainer}>
          <RenderedResume data={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
