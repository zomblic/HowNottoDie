// file path: how-not-to-die/client/src/components/RegisterForm.jsx

import React from 'react';

export default function Modal () {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
    <button
    onClick={toggleModal}
    classname="">
    </button>

    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
          <form className={styles.LoginForm}>
                <label>
                  Username:
                  <input type="text" name="username" placeholder="Please Comfirm Your Shuttle Identifier" />
                </label>
                <label>
                  Password:
                  <input type="password" name="password" placeholder="Please Confirm Your Verification ID" />
                </label>
                <label>
                  Reconfirm Password:
                  <input type="password" name="password" placeholder="Please Reconfirm Your Verification Id"/>
                  </label>
                <button type="submit">Register</button>
              </form>
              <button
              className="close-modal"
              onClick={toggleModal}>
                Cancel
              </button>
      </div>
    </div>
    </>
  )
}
  
