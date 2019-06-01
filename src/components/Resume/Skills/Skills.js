import React from 'react';
import './style.scss';
import nodejs from '../../../assets/nodejs.png';
import html5 from '../../../assets/html5.png';
import js from '../../../assets/js.png';
import java from '../../../assets/java.png';
import angular from '../../../assets/angular.png';
import sql from '../../../assets/sql.png';
import react from '../../../assets/react.png';
import spring from '../../../assets/spring.png';

const Skills = () => (
  <div>
    <div className="skills-section">
      <div className="content">
        <img className="skill-logo" src={java} alt="Java8" /> JAVA 8
      </div>
      <div className="progress-wrapper">
        <div className="progress" style={{ width: '90%' }} />
      </div>
    </div>

    <div className="skills-section">
      <div className="content">
        <img className="skill-logo" src={js} alt="Javascript" />
        JAVASCRIPT
      </div>
      <div className="progress-wrapper">
        <div className="progress" style={{ width: '70%' }} />
      </div>
    </div>

    <div className="skills-section">
      <div className="content">
        <img className="skill-logo" src={nodejs} alt="Node.Js" />
        NODE.JS
      </div>
      <div className="progress-wrapper">
        <div className="progress" style={{ width: '50%' }} />
      </div>
    </div>

    <div className="skills-section">
      <div className="content">
        {' '}
        <img className="skill-logo" src={angular} alt="Angular" />
        ANGULAR 2/4/6
      </div>
      <div className="progress-wrapper">
        <div className="progress" style={{ width: '80%' }} />
      </div>
    </div>

    <div className="skills-section">
      <div className="content">
        <img className="skill-logo" src={spring} alt="Spring" /> SPRING
        FRAMEWORK
      </div>
      <div className="progress-wrapper">
        <div className="progress" style={{ width: '80%' }} />
      </div>
    </div>

    <div className="skills-section">
      <div className="content">
        <img className="skill-logo" src={html5} alt="Node.Js" />
        HTML 5 AND CSS
      </div>
      <div className="progress-wrapper">
        <div className="progress" style={{ width: '95%' }} />
      </div>
    </div>

    <div className="skills-section">
      <div className="content">
        <img className="skill-logo" src={sql} alt="sql" />
        SQL DATABASE
      </div>
      <div className="progress-wrapper">
        <div className="progress" style={{ width: '80%' }} />
      </div>
    </div>

    <div className="skills-section">
      <div className="content">
        <img className="skill-logo" src={react} alt="React" /> REACT FRAMEWORK
      </div>
      <div className="progress-wrapper">
        <div className="progress" style={{ width: '30%' }} />
      </div>
    </div>
  </div>
);

export default Skills;
