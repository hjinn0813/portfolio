// 다음 페이지 이동 버튼

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NextBtn.scss';

export default function NextBtn({ to, text }) {
  const scrollToTop = () => {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="move-btn">
      <Link to={to} className="move-link" onClick={scrollToTop}>
        {text}
      </Link>
    </div>
  );
}
