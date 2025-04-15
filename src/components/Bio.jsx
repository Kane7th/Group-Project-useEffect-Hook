import React, { useEffect, useState } from 'react';

function Bio() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: ''
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('Autosaving form...', formData);
    }, 1000);

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
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
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
