// about, intro

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typing from './Typing';
import '../../styles/About/About.scss';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const descriptRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    const descriptEl = descriptRef.current;

    gsap.utils.toArray(descriptEl.children).forEach((paragraph, index) => {
      gsap.fromTo(
        paragraph,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: paragraph,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    gsap.fromTo(
      scrollTriggerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="intro-inner">
      <div className="intro">
        <Typing />
      </div>
      <div className="descript" ref={descriptRef}>
        <p className="paragraph">
          직장보다 직업을 가져야한다고 생각하게 되어 배우기 시작한 코딩에 흥미가
          생겼고, <br />
          다양한 프로젝트를 경험해보며 개발자를 꿈꾸게 되었습니다.
        </p>
        <p className="paragraph">
          배움을 즐기는 성향으로, 어려운 문제도 '배움의 기회'로 생각하여
          즐기면서 해결합니다.
          <br />
          개인과 팀이 함께 성장할 수 있도록 팀 단합을 돕는 역할을 선호합니다.
          <br />
          좋은 결과물은 팀워크에서 나온다고 믿기에
          <br />
          팀원들과 적극적으로 커뮤니케이션하며 협업했습니다.
        </p>
        <p className="paragraph">
          비효율적인 작업을 개선하는 일을 좋아합니다.
          <br />
          함께 만드는 결과물의 퀄리티를 향상시키고 팀원들이 효율적으로 작업할 수
          있도록,
          <br />
          꾸준한 기록을 통해 팀의 작업 상황을 정리했습니다.
          <br />
          덕분에 저희 팀은 항상 빠르고 효율적으로 작업을 진행했습니다.
        </p>
        <p className="paragraph">
          저는 늘 인간의 삶에 이로운 서비스를 만드는 것에
          <br />
          스스로의 능력이 쓰일 수 있으면 좋겠다고 생각했습니다.
          <br />
          다양한 경험을 통해 지속적으로 성장하며,
          <br />
          사용자를 먼저 생각하여 적재적소에 맞는 UX를 제공하는 개발자가 되고
          싶습니다.
        </p>
      </div>
      <Link to="/skill" className="move-link">
        <div className="move-btn" ref={scrollTriggerRef}>
          NEXT PAGE
        </div>
      </Link>
    </div>
  );
}
