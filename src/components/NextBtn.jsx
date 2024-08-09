// 다음 페이지 이동 버튼

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NextBtn.scss';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NextBtn({ to, text }) {
  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 이동 시 최상단으로
  }, []);

  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      scrollTriggerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: 'top 90%',
          end: 'bottom 0%',
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <div className="move-btn" ref={scrollTriggerRef}>
      <Link to={to} className="move-link">
        {text}
      </Link>
    </div>
  );
}
