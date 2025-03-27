// file path: how-not-to-die/src/pages/PersonalLogs.jsx
// View/edit user’s own logs

import React, { useState } from 'react';
import VeraQuote from '../components/VeraQuote';
import EditLogModal from '../components/EditLogModal';
import styles from '../assets/css/PersonalLogs.module.css';

const PersonalLogs = () => {
  const [logs, setLogs] = useState([
    { id: 1, title: 'Alien Fungus Discovery', content: 'Glowing spores may have healing properties.' },
    { id: 2, title: 'First Encounter', content: 'It blinked. I blinked back.' },
  ]);
  const [selectedLog, setSelectedLog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (log) => {
    setSelectedLog(log);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setLogs(logs.filter(log => log.id !== id));
  };

  return (
    <div className={styles.container}>
      <h2>Welcome, Commander</h2>
      <VeraQuote />
      <p>Your personal logs are archived below:</p>

      <div className={styles.logList}>
        {logs.map(log => (
          <div key={log.id} className={styles.logCard}>
            <h3>{log.title}</h3>
            <p>{log.content}</p>
            <button onClick={() => handleEdit(log)}>Edit</button>
            <button onClick={() => handleDelete(log.id)}>Delete</button>
          </div>
        ))}
      </div>

      {showModal && (
        <EditLogModal
          log={selectedLog}
          onClose={() => setShowModal(false)}
          // Later: onSave={handleSave}
        />
      )}
    </div>
  );
};

export default PersonalLogs;
