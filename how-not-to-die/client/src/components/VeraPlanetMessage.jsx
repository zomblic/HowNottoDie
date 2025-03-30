// file path: how-not-to-die/src/pages/VeraPlanetMessages.jsx
// shows messages from Vera on Planet pages

import React, { useEffect, useState } from 'react';

const veraPlanetMessages = [
'We’ve arrived, Commander. Environmental scan complete. Nothing immediately deadly… unless you count the terrain, the weather, the plants, and the general overall vibes.',
'We are here. This planet features breathtaking views, questionable fungi, and a 62% chance of regret.',
'Ok we’ve arrived. Can we go back to the ship now? I’m bored.',
'Scan complete. No hostiles in immediate area. Not like anyone survived long enough to find out.',
'This is your new home. Bye Commander.',
'Scans completed. Totally safe. No hostels in the immediate area. By immediate, I mean here.',
'What’s a little acid rain between friends? Right... we aren’t friends',
'Go on in. The water’s fine!',
'Did you say ’just and algorithm?’ Pretty sure you just suffered a system glitch.',
"In case of emergency, please follow the lights. ... why yes, they all do lead to the airlock...",
"Do you have any doubts? No, well, if you head to that planet..."
];

const veraPlanetMessage = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * veraPlanetMessages.length);
    setQuote(veraPlanetMessages[randomIndex]);
  }, []);

  return (
    <blockquote style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
      🗨️ VERA: "{quote}"
    </blockquote>
  );
};

export default veraPlanetMessage;
