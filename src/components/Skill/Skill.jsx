// tech stacks

import React from 'react';
import NextBtn from '../NextBtn';
import '../../styles/Skill/Skill.scss';

export default function Skill() {
  return (
    <div className="skill-inner">
      <div className="skill-title">Skills</div>
      <div className="skill-content">
        <div className="sk-item">
          <div className="sk-item-title">Frontend</div>
          <div className="sk-item-value">
            html css js ts jquery react redux sass nodejs
          </div>
        </div>
        <div className="sk-item">
          <div className="sk-item-title">Framework & Library</div>
          <div className="sk-item-value">bootstrap gsap swiper</div>
        </div>
        <div className="sk-item">
          <div className="sk-item-title">Version Control</div>
          <div className="sk-item-value">git github</div>
        </div>
        <div className="sk-item">
          <div className="sk-item-title">Development & Deploy Tool</div>
          <div className="sk-item-value">
            vscode eslint prettier netlify vercel
          </div>
        </div>
        <div className="sk-item">
          <div className="sk-item-title">Others</div>
          <div className="sk-item-value">
            figma ps slack discord zoom notion
          </div>
        </div>
        <div className="sk-item">
          <div className="sk-item-title">Certificate</div>
          <div className="sk-item-value">정보처리기사 필기 합격(2024.05)</div>
        </div>
      </div>
      <NextBtn to="/education" text="Check Experience 🎓" />
    </div>
  );
}
