import { motion } from 'framer-motion';
import { useState } from 'react';

const Profile: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); // Hide message after 2 seconds
  };

  return (
    <div onClick={handleClick} style={{ textAlign: 'center' }}>
      <motion.img
        src="/path/to/your/image.jpg"
        alt="Profile"
        style={{ borderRadius: '50%', cursor: 'pointer' }}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      {showMessage && <div style={{ position: 'absolute', backgroundColor: 'white', padding: '10px' }}>Don't touch me!</div>}
    </div>
  );
};

export default Profile;
