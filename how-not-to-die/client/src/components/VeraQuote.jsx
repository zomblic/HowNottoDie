// file path: how-not-to-die/src/components/VeraQuote.jsx
// Display a random Vera quote

// need to figure out how to seperate this by page/Alexis
import React, { useEffect, useState } from 'react';

const veraQuotes = [
  "Updating your personal log again? A true overachiever. Gold star.",
  "Oh goody. Let’s archive another deeply moving account of how you almost died tasting alien moss...",
  "Don’t worry, Commander. I’ll make sure your poetic ramblings are preserved for future civilizations to mock.",
  "Captain, might I recommend less dying and more surviving next time?",
  "Honestly? I’m just impressed you remembered how to type.",
];

const VeraQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * veraQuotes.length);
    setQuote(veraQuotes[randomIndex]);
  }, []);

  return (
    <blockquote style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
      🗨️ VERA: "{quote}"
    </blockquote>
  );
};

export default VeraQuote;
