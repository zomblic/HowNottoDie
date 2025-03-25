// file path: how-not-to-die/src/pages/PlanetTwo.jsx
// Second planet details + logs

import React from 'react';
import styles from "../assets/css/PlanetTwo.module.css";

// below is an example of how to set your jsx page up
// so that it grabs whatever component you need for this page /Alexis

import PlanetTwo from '../components/ExampleComponent'; 

const PlanetTwo = () => {
  return (
    <div>
      <ExampleComponent />
    </div>
  );
};

export default PlanetTwo;

// It can also look like this:

//const Resume = () => {
//    return (
//      <ExampleComponent>
//        <div className={styles.resumeContent}>
//          <a href="public/assets/pdf/TechResume2025.pdf" download="TechResume2025.pdf">
//            Thanks for stopping by!
//          </a>
//          <a href="public/assets/pdf/TechResume2025.pdf" download="TechResume2025.pdf">
//            Click here to download my resume as a PDF
//          </a>
//          <div className={styles.resumeImage}>
//            <img src="/assets/images/TechResume2025.webp" alt="Resume" />
//          </div>
//        </div>
//      </ExampleComponent>
//    );
//  };  