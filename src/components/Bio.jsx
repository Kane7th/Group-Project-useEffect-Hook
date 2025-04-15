import React, { useEffect, useState } from 'react';
import '../index.css';

function Bio() {
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    bio: ''
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('Autosaving form...', formData);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [formData]);

  return (
    <form className="bio-form">
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Name"
        className="bio-input"
      />
      <input
        type="text"
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        placeholder="Status"
        className="bio-input"
      />
      <textarea
        value={formData.bio}
        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        placeholder="Bio"
        className="bio-textarea"
      />
    </form>
  );
}

export default Bio;
