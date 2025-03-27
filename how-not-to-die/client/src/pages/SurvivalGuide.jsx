// file path: how-not-to-die/src/pages/SurvivalGuide.jsx
// View/edit user’s own logs

import React from 'react';
import styles from '../assets/css/SurvivalGuide.module.css';

const SurvivalGuide = () => {
  return (
    <div className={styles.container}>
      <h2>Survival Guide</h2>
      <p>Everything you need to stay alive on this alien rock...</p>

      {/* Placeholder content */}
      <ul className={styles.guideList}>
      <ul className={styles.guideList}>
  <li>
    <strong>Planet Zephyria</strong><br />
    <strong>[flora]</strong> The “Screamleaf” is a large, sentient plant that shrieks when touched. Do not brush past it while sneaking.<br />
    <strong>[fauna]</strong> Hoverjackals can smell fear and sarcasm. Stay humble.<br />
    <strong>[weather]</strong> Jetstream winds reach 400mph. Walking outside without gravity boots is considered a casual form of flight.
  </li>

  <li>
    <strong>Planet Floraxis</strong><br />
    <strong>[flora]</strong> Sleepblossoms emit a potent lullaby scent. Exposure longer than 30 seconds may induce hibernation.<br />
    <strong>[fauna]</strong> Chirpbeasts mimic your voice — and your deepest secrets. Whisper wisely.<br />
    <strong>[weather]</strong> Sunlight pulses in rhythmic waves. Day and night are suggestions at best.
  </li>

  <li>
    <strong>Planet Skarn</strong><br />
    <strong>[flora]</strong> The Clingvine looks like a vine, hugs like a bear, and never lets go. Bring scissors.<br />
    <strong>[fauna]</strong> Glowtail lizards are attracted to electronic signals and prone to stealing batteries.<br />
    <strong>[weather]</strong> Temperature fluctuates 80 degrees hourly. Layering is not optional — it's survival
  </li>

  <li>
    <strong>Planet Drizzle-9</strong><br />
    <strong>[flora]</strong> Mushmire moss grows on everything, including your boots, face, and optimism.<br />
    <strong>[fauna]</strong> Drenchfoxes are invisible when wet. Which is always. Trust nothing.<br />
    <strong>[weather]</strong> Constant acid rain. Umbrellas are critical, but fashionably judged by the locals.
  </li>

  <li>
    <strong>Planet Cerebella</strong><br />
    <strong>[flora]</strong> Mindwillows attempt to finish your thoughts mid-sentence. Argumentative.<br />
    <strong>[fauna]</strong> Synapse-rats navigate mazes faster than humans. Do not challenge them publicly.<br />
    <strong>[weather]</strong> Electromagnetic storms cause vivid hallucinations. Or do they?
  </li>

  <li>
    <strong>Planet Blorbo</strong><br />
    <strong>[flora]</strong> Gelroots pulse gently and taste like fruit gummies. Unfortunately, they’re mildly explosive.<br />
    <strong>[fauna]</strong> Tentacles. Just tentacles. They’re everywhere. The planet may be alive. Avoid eye contact.<br />
    <strong>[weather]</strong> Fog rolls in with a wet whisper. Sounds follow you. Try not to turn around.
  </li>
</ul>

      </ul>
    </div>
  );
};

export default SurvivalGuide;
