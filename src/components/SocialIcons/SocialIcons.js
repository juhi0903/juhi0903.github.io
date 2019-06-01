import React from 'react';

import './style.scss';

const SocialIcons = (props, context) => {
  const colorPrimary = '#FFFFFF';
  return (
    <div className="social-icons animate-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/ijuhi"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-github" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/s_juhi_"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/juhi-singh-1863aa135/"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-linkedin" />
      </a>
    </div>
  );
};

export default SocialIcons;
