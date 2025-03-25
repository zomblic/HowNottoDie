// file path: how-not-to-die/src/pages/PlanetOne.jsx
// Planet 1 details + logs

import React from 'react';
import styles from "../assets/css/PlanetOne.module.css";

// below is an example of how to set your jsx page up
// so that it grabs whatever component you need for this page /Alexis

import PlanetOne from '../components/ExampleComponent'; 

const PlanetOne = () => {
  return (
    <div>
      <ExampleComponent />
    </div>
  );
};

export default PlanetOne;

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