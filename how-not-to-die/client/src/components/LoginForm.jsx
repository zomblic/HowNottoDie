// file path: how-not-to-die/client/src/components/LoginForm.jsx

import React from 'react';
import styles from '../assets/css/Home.module.css';
import Modal from '../components/RegisterForm.jsx'


const LoginForm = () => {
  return (
    <>
      <form className={styles.loginForm}>
        <label>
          Username:
          <input type="text" name="username" placeholder="Please Enter Your Shuttle Identifier" />
        </label>
        <label>
          Password:
          <input type="password" name="password" placeholder="Please Enter Your Verification ID" />
        </label>
        <button type="submit">Access Console</button>
      </form>

      <div className={styles.registerPrompt}>
        <p>Don’t have an account?</p>
        <button className={styles.registerButton} onClick={toggleModal}>
          Register Here
          <Modal/>
          </button>

      </div>
    </>
  );
};


export default LoginForm;
