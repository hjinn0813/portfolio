// 전체 프로젝트 확인 영역

import React from 'react';
import Projects from './Projects.json';
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
            <p className="pj-date">기간 및 인원: {project.date}</p>
            <p className="pj-skills">사용기술: {project.skills}</p>
            <p className="pj-response">담당파트: {toBrTag(project.response)}</p>
            <div className="pj-link">
              <button className="openlink">
                Website {project.links.website}
              </button>
              <button className="openlink">
                README {project.links.README}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
