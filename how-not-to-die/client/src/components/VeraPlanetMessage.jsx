// file path: how-not-to-die/src/pages/VeraPlanetMessages.jsx
// shows messages from Vera on Planet pages

import React, { useEffect, useState } from 'react';

const veraPlanetMessages = [
'We’ve arrived, Commander. Environmental scan complete. Nothing immediately deadly… unless you count the terrain, the weather, the plants, and the general overall vibes.',
'We are here. This planet features breathtaking views, questionable fungi, and a 62% chance of regret.',
'Ok we’ve arrived. Can we go back to the ship now? I’m bored.',
'Scan complete. No hostiles in immediate area. Not like anyone survived long enough to find out.',
'This is your new home. Bye Commander.',
'For the most accurate weather, stick your head out of the airlock.',
'Scans completed. Totally safe. No hostels in the immediate area. By immediate, I mean here.',
'For the most accurate weather, stick your head out of the airlock.',
'I say... let natural selection do it’s thing. Don’t worry, it’ll be quick.',
'Do you have any doubts? Well, you should.'

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
