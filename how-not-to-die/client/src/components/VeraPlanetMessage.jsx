// file path: how-not-to-die/src/pages/VeraPlanetMessages.jsx
// shows messages from Vera on Planet pages


import React, { useEffect, useState } from 'react';
import styles from '../assets/css/VeraPlanetMessage.module.css';

const veraPlanetMessages = [
  "We’ve arrived, Commander. Environmental scan complete. Nothing immediately deadly… unless you count the terrain, the weather, the plants, and the general overall vibes.",
  "We are here. This planet features breathtaking views, questionable fungi, and a 62% chance of regret.",
  "Ok we’ve arrived. Can we go back to the ship now? I’m bored.",
  "Scan complete. No hostiles in immediate area. Not like anyone survived long enough to find out.",
  "This is your new home. Bye Commander."
];

const VeraPlanetMessage = () => {
  const [quote, setQuote] = useState('');
  const [messageReady, setMessageReady] = useState(false);
  const [messageViewed, setMessageViewed] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * veraPlanetMessages.length);
    const newMessage = veraPlanetMessages[randomIndex];
    setQuote(newMessage);
    setMessageReady(true);
    setMessageViewed(false);
  }, []);

  const handleOpenMessage = () => {
    setMessageViewed(true);
  };

  const handleCloseMessage = () => {
    setMessageViewed(false);    // Hides the message box
    setMessageReady(false);     // Prevents the notification from blinking again
  };

  const showNotification = messageReady && !messageViewed;
  const showMessageBox = messageViewed;

  return (
    <>
      {showNotification && (
        <div className={`${styles.notification} ${styles.blink}`} onClick={handleOpenMessage}>
          🔔 New Message from VERA
        </div>
      )}

      {showMessageBox && (
        <div className={styles.messageBox}>
          <div className={styles.header}>
            VERA Message
            <button className={styles.closeBtn} onClick={handleCloseMessage}>
              ✖
            </button>
          </div>
          <p className={styles.messageText}>🗨️ "{quote}"</p>
        </div>
      )}
    </>
  );
};

export default VeraPlanetMessage;
