import React from 'react';
import CalloutButton from './CalloutButton';
import CalloutContainer from './CalloutContainer';

function CalloutMenu({ isVisible, onClose, buttons }) {
  return (
    <CalloutContainer isVisible={isVisible} onClose={onClose}>
      {buttons.map((button, index) => (
        <CalloutButton
          key={index}
          label={button.label}
          onClick={button.onClick}
        />
      ))}
    </CalloutContainer>
  );
}

export default CalloutMenu;
