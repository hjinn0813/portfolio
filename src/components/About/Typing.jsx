// 타이핑 애니메이션 컴포넌트

import React, { useState, useEffect } from 'react';
import '../../styles/About/Typing.scss';

const Typing = () => {
  const content = '안녕하세요! \n주니어 프론트엔드 개발자, \n조혜진입니다. :)';
  const [showText, setShowText] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isAdding) {
        if (index < content.length) {
          setDisplayText(content.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setIsAdding(false);
        }
      } else {
        if (index > 0) {
          setDisplayText(content.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setIsAdding(true);
          setIndex(0);
        }
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [index, isAdding]);

  useEffect(() => {
    setShowText(displayText);
  }, [displayText]);

  return <div className="greeting">{showText}</div>;
};

export default Typing;
