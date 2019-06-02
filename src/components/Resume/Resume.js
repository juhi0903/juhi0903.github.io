import React from 'react';
import Page from '../Page';
import Contact from './Contact';
import Education from './Education';

import './style.scss';
import ProfExperience from './ProfExperience';
import Projects from './Projects';
import Skills from './Skills';

const Resume = ({ id }) => {
  return (
    <Page singleMode={false} id={id}>
      <div className="resume-wrapper">
        {/* <div className="resume-header" /> */}
        <div className="resume-title">
          JUHI SINGH
          <div className="resume-subtitle">SOFTWARE ENGINEER</div>
        </div>
        <div className="resume-content">
          <div className="left-content">
            <div className="resume-section">
              <div className="resume-section-title">Contact</div>
              <div className="horizontal-line" />
              <div className="resume-section-content">
                <Contact />
              </div>
            </div>
            <div className="resume-section">
              <div className="resume-section-title">Skills</div>
              <div className="horizontal-line" />
              <div className="resume-section-content">
                <Skills />
              </div>
            </div>
            <div className="resume-section">
              <div className="resume-section-title">Education</div>
              <div className="horizontal-line" />
              <div className="resume-section-content">
                <Education />
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="resume-section">
              <div className="resume-section-title">
                Professional Experience
              </div>
              <div className="horizontal-line" />
              <div className="resume-section-content">
                <ProfExperience />
              </div>
            </div>
            <div className="resume-section">
              <div className="resume-section-title">Projects</div>
              <div className="horizontal-line" />
              <div className="resume-section-content">
                <Projects />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Resume;
