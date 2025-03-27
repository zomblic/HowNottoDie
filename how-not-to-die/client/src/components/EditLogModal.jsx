// file path: how-not-to-die/src/components/EditLogModal.jsx
// edit personal logs

import React from 'react';

const EditLogModal = ({ log, onClose }) => {
  if (!log) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'black',
      color: 'white',
      padding: '2rem',
      border: '1px solid #444',
      zIndex: 9999,
    }}>
      <h3>Edit Log: {log.title}</h3>
      <p>(Modal editing UI coming soon)</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EditLogModal;