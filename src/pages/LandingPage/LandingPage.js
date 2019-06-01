import React from 'react';
import SocialIcons from '@components/SocialIcons';
import BrowserNotes from '@components/BrowserNotes';
import Resume from '@components/Resume';
import PrintButton from '@components/PrintButton';

import './style.scss';

const LandingPage = (props, context) => {
  const colorPrimary = '#FFFFFF';
  const bgPrimary = '#485564';

  return (
    <div>
      <PrintButton id={'JuhiSingh-Resume'} label={'Download'} />
      <div className="landing-page-large for-large-screens">
        <div className="landing-page-wrapper">
          <Resume id={'JuhiSingh-Resume'} />
        </div>
      </div>
      <div
        style={{ backgroundColor: bgPrimary }}
        className="landing-page for-mobile"
      >
        <main style={{ color: colorPrimary }}>
          <BrowserNotes />
          <div className="intro-wrapper ">
            <div className="intro-name">Hello, I'm Juhi Singh!</div>
            <div className="tagline">Full Stack Developer</div>
            <SocialIcons />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
