// file path: how-not-to-die/src/pages/SubmitLog.jsx
// New log submission page (accessed only when on planet)

import React from 'react';
import styles from "../assets/css/SubmitLog.module.css";

// below is an example of how to set your jsx page up
// so that it grabs whatever component you need for this page /Alexis

import SubmitLog from '../components/ExampleComponent'; 

const SubmitLog = () => {
  return (
    <div>
      <ExampleComponent />
    </div>
  );
};

export default SubmitLog;

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