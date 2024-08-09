// 다음 페이지 이동 버튼

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NextBtn.scss';

export default function NextBtn({ to, text }) {
  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 이동 시 최상단으로
  }, []);

  return (
    <div className="move-btn">
      <Link to={to} className="move-link">
        {text}
      </Link>
    </div>
  );
}
