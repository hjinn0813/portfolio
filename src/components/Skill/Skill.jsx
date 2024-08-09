// tech stacks

import React from 'react';
import NextBtn from '../NextBtn';
import Frontend from './Frontend.json';
import Library from './Library.json';
import Control from './Control.json';
import Develop from './Develop.json';
import Others from './Others.json';
import '../../styles/Skill/Skill.scss';

export default function Skill() {
  const getBadge = (name) => {
    try {
      return require(`../../assets/badges/${name}`);
    } catch (error) {
      console.error('Image not found:', error);
      return null; // 이미지가 없을 경우 null 반환
    }
  };

  return (
    <div className="skill-inner">
      <div className="skill-title">Skills</div>
      <div className="skill-content">
        <div className="sk-item FE-badge">
          <div className="sk-item-title">Frontend</div>
          <div className="sk-item-value">
            {Frontend.map((badge, index) => (
              <img
                key={index}
                src={getBadge(badge.path)}
                alt={badge.name}
                className="badge"
              />
            ))}
          </div>
        </div>
        <div className="sk-item library-badge">
          <div className="sk-item-title">Framework & Library</div>
          <div className="sk-item-value">
            {Library.map((badge, index) => (
              <img
                key={index}
                src={getBadge(badge.path)}
                alt={badge.name}
                className="badge"
              />
            ))}
          </div>
        </div>
        <div className="sk-item git-badge">
          <div className="sk-item-title">Version Control</div>
          <div className="sk-item-value">
            {Control.map((badge, index) => (
              <img
                key={index}
                src={getBadge(badge.path)}
                alt={badge.name}
                className="badge"
              />
            ))}
          </div>
        </div>
        <div className="sk-item develop-badge">
          <div className="sk-item-title">Development & Deploy Tool</div>
          <div className="sk-item-value">
            {Develop.map((badge, index) => (
              <img
                key={index}
                src={getBadge(badge.path)}
                alt={badge.name}
                className="badge"
              />
            ))}
          </div>
        </div>
        <div className="sk-item other-badges">
          <div className="sk-item-title">Others</div>
          <div className="sk-item-value">
            {Others.map((badge, index) => (
              <img
                key={index}
                src={getBadge(badge.path)}
                alt={badge.name}
                className="badge"
              />
            ))}
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
