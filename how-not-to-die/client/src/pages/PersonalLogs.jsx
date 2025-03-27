// file path: how-not-to-die/src/pages/PersonalLogs.jsx
// View/edit user’s own logs

import React, { useState } from 'react';
import VeraQuote from '../components/VeraQuote';
import styles from '../assets/css/PersonalLogs.module.css';

const EditLogModal = ({ log, onClose, onSave }) => {
  const [title, setTitle] = useState(log.title || '');
  const [content, setContent] = useState(log.content || '');

  const handleSave = () => {
    onSave({ ...log, title, content });
  };

  return (
    <div className="modal">
      <h2>{log.id ? 'Edit Log' : 'New Log'}</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Content:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

const PersonalLogs = () => {
  const [logs, setLogs] = useState([
    { id: 1, title: 'Log 1', content: 'Content for log 1' },
    { id: 2, title: 'Log 2', content: 'Content for log 2' },
  ]);
  const [selectedLog, setSelectedLog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (log) => {
    setSelectedLog(log);
    setShowModal(true);
  };

  const handleSave = (updatedLog) => {
    if (updatedLog.id) {
      // Update existing log
      setLogs((prevLogs) =>
        prevLogs.map((log) => (log.id === updatedLog.id ? updatedLog : log))
      );
    } else {
      // Add new log
      setLogs((prevLogs) => [
        ...prevLogs,
        { ...updatedLog, id: Date.now() }, // Assign a unique ID
      ]);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setLogs((prevLogs) => prevLogs.filter((log) => log.id !== id));
  };

  const handleAdd = () => {
    setSelectedLog({ title: '', content: '' }); // Empty log for new entry
    setShowModal(true);
  };

  return (
    <div className={styles.container}>
      <h2>Welcome, Commander</h2>
      <VeraQuote />
      <p>Your personal logs are archived below:</p>

      <button onClick={handleAdd}>Add New Log</button>
      <div className={styles.logList}>
        {logs.map((log) => (
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
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default PersonalLogs;
