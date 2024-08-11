// 전체 프로젝트 확인 영역

import React from 'react';
import Projects from './Projects.json';
import NextBtn from '../NextBtn';
import '../../styles/Project/Project.scss';

export default function Project() {
  const getImage = (imageName) => {
    try {
      return require(`../../assets/projects/${imageName}`);
    } catch (error) {
      console.error('Image not found:', error);
      return null; // 이미지가 없을 경우 null 반환
    }
  };

  const toBrTag = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="pj-container">
      <div className="pj-title">Projects</div>
      {Projects.map((project) => (
        <div key={project.id} className="pj-card">
          {project.image && (
            <img
              src={getImage(project.image)}
              alt={project.title}
              className="pj-image"
            />
          )}
          <div className="pj-info">
            <p className="pj-item-title">{project.title}</p>
            <div className="pj-descript">{project.descript}</div>
            <div className="pj-date">
              <div className="pj-info-title">기간 및 인원</div>
              <div className="pj-info-value">{project.date}</div>
            </div>
            <div className="pj-skills">
              <div className="pj-info-title">사용 기술</div>
              <div className="pj-info-value">{project.skills}</div>
            </div>
            <div className="pj-response">
              <div className="pj-info-title">담당 파트/주요 기능</div>
              <div className="pj-info-value">{toBrTag(project.response)}</div>
            </div>
            <div className="pj-link">
              <button
                className="openlink"
                onClick={() => window.open(project.links[0].website, '_blank')}
              >
                Website
              </button>
              <button
                className="openlink"
                onClick={() => window.open(project.links[0].README, '_blank')}
              >
                README
              </button>
            </div>
          </div>
        </div>
      ))}
      <NextBtn to="/contact" text="Contact Me!📧" />
    </div>
  );
}
