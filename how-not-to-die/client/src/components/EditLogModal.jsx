// file path: how-not-to-die/client/src/components/EditLogModal.jsx
// edit personal logs

import React, { useState } from 'react';
import styles from '../assets/css/PersonalLogs.module.css';

const EditLogModal = ({ log, onClose, onSave }) => {
  const [title, setTitle] = useState(log.title || '');
  const [content, setContent] = useState(log.content || '');

  const handleSave = () => {
    onSave({ ...log, title, content });
  };

  return (
    <div className={styles.modal}>
      <h3>{log.id ? 'Edit Log' : 'New Log'}</h3>
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

export default EditLogModal;
