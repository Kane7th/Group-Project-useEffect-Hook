import React, { useEffect, useState } from 'react';

function Bio() {
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    bio: ''
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('Autosaving form...', formData);
    }, 5000); // 5 second delay for autosave

    return () => clearTimeout(timeout); // Cleanup to debounce autosave
  }, [formData]);
























  
  return (
    <form>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="status"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        placeholder="Status"
      />
      <textarea
        value={formData.bio}
        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        placeholder="Bio"
      />
    </form>
  );
}

export default Bio;
