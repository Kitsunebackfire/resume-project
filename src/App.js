import AppStyling from "./components/css/App.module.css";
import PersonalInfo from "./components/PersonalInfo.js";
import Education from "./components/Education.js";
import React, { useState } from "react";
import RenderedResume from "./components/RenderedResume.js";
import Experience from "./components/Experience.js";

export default function App() {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    address: "",
    phoneNumber: "",
    education: [],
    experience: [],
  });

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
    console.log(value);
  };

  const handleDeleteEducation = (e) => {
    e.preventDefault();
    const educationArray = value.education;
    educationArray.pop();
    setValue((prevValue) => ({ ...prevValue, experience: educationArray }));
    console.log(value.education);
  };

  const handleDeleteExperience = (e) => {
    e.preventDefault();
    const experienceArray = value.experience;
    experienceArray.pop();
    setValue((prevValue) => ({ ...prevValue, experience: experienceArray }));
    console.log(value.experience);
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    const experienceArray = value.experience;
    let valuesToBeInjectedArray = [];
    const targetContainer = e.target.children[0].children;
    //multiple values present in experience, so used for loop to grab them all
    //will have to render each value individually so pushed them into an array
    for (let i = 0; i < targetContainer.length - 1; i++) {
      valuesToBeInjectedArray.push(targetContainer[i].value);
      targetContainer[i].value = "";
    }

    experienceArray.push(valuesToBeInjectedArray);
    setValue((prevValue) => ({ ...prevValue, experience: experienceArray }));
    console.log(value.experience);
  };

  const handleAddEducation = (e) => {
    e.preventDefault();
    const educationArray = value.education;
    let injectedArray = [];

    const targetContainer = e.target.children[0].children;
    for (let i = 0; i < targetContainer.length - 1; i++) {
      injectedArray.push(targetContainer[i].value);
      targetContainer[i].value = "";
    }

    educationArray.push(injectedArray);
    console.log(educationArray);
    setValue((prevValue) => ({ ...prevValue, education: educationArray }));
    console.log(value.education);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetContainer = e.target.children[0].children;
    for (let i = 0; i < targetContainer.length; i++) {
      if (
        targetContainer[i].type === "text" ||
        targetContainer[i].type === "email"
      ) {
        handleChange(targetContainer[i]);
      }
    }
  };

  return (
    <div className={AppStyling.mainContainer}>
      <div className={AppStyling.projectTitleBackground}>
        <header className={AppStyling.projectTitle}>Resume</header>
      </div>
      <div className={AppStyling.entryContainer}>
        <PersonalInfo handleSubmit={handleSubmit} />
        <Education
          handleAddEducation={handleAddEducation}
          handleDeleteEducation={handleDeleteEducation}
        />
        <Experience
          handleDeleteExperience={handleDeleteExperience}
          handleAddExperience={handleAddExperience}
        />
      </div>
      <div className={AppStyling.renderContainer}>
        <RenderedResume
          //renderExperience={this.renderExperience}
          data={value}
        />
      </div>
    </div>
  );
}
