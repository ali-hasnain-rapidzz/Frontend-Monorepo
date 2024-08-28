import React from 'react';

import { FaAngleLeft } from 'react-icons/fa';

const BackIcon: React.FC = () => {
  return (
    <div className="back-icon back-icon--hover back-icon--active">
      <FaAngleLeft className="back-icon__icon" />
    </div>
  );
};

export default BackIcon;
