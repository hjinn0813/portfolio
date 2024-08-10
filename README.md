# Upgrade web portfolio by React

개인의 기술 스택과 작업 내역 정리를 위해 기획 및 제작한 포트폴리오 사이트입니다. 코딩 공부 초기에 순수 JS로 만들었던 웹 포트폴리오를 React로 리뉴얼 했습니다.

<br/>

## 💻 배포주소

https://github.com/hjinn0813/portfolio

<br/>

## 👨‍🏫 프로젝트 소개

- **개발기간** : 2024.08.06 ~ 08.10

- **참여인원** : 1명

<br/>

## 🛠 사용 기술

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=Sass&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=GreenSock&logoColor=white)

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

![VScode](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![eslint](https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

<br/>

## 💻 주요 기능

- About 페이지 : 타이핑 애니메이션, GSAP Scroll Trigger

- Header 호버 언더라인 이벤트, MUI 아이콘, 페이지 라우팅

- 모든 페이지 최하단에서 다음 페이지 이동 가능

- 반응형 미디어쿼리 적용

### [**작업일지 확인하기**](https://hjinn0813.tistory.com/101)

<br/>

## 📁 프로젝트 구조

```bash
📦portfolio
 ┣ 📂public
 ┃ ┣ 📂favicon
 ┃ ┃ ┣ 📜apple-touch-icon.png
 ┃ ┃ ┣ 📜favicon-32x32.png
 ┃ ┃ ┗ 📜favicon.ico
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂About
 ┃ ┃ ┃ ┣ 📜About.jsx
 ┃ ┃ ┃ ┗ 📜Typing.jsx
 ┃ ┃ ┣ 📂Contact
 ┃ ┃ ┃ ┗ 📜Contact.jsx
 ┃ ┃ ┣ 📂Education
 ┃ ┃ ┃ ┗ 📜Education.jsx
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┗ 📜Header.jsx
 ┃ ┃ ┣ 📂Project
 ┃ ┃ ┃ ┣ 📜Project.jsx
 ┃ ┃ ┃ ┗ 📜Projects.json
 ┃ ┃ ┣ 📂Skill
 ┃ ┃ ┃ ┣ 📜Control.json
 ┃ ┃ ┃ ┣ 📜Develop.json
 ┃ ┃ ┃ ┣ 📜Frontend.json
 ┃ ┃ ┃ ┣ 📜Library.json
 ┃ ┃ ┃ ┣ 📜Others.json
 ┃ ┃ ┃ ┗ 📜Skill.jsx
 ┃ ┃ ┗ 📜NextBtn.jsx
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂About
 ┃ ┃ ┃ ┣ 📜About.scss
 ┃ ┃ ┃ ┗ 📜Typing.scss
 ┃ ┃ ┣ 📂Contact
 ┃ ┃ ┃ ┗ 📜Contact.scss
 ┃ ┃ ┣ 📂Education
 ┃ ┃ ┃ ┗ 📜Education.scss
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┗ 📜Footer.scss
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┗ 📜Header.scss
 ┃ ┃ ┣ 📂Project
 ┃ ┃ ┃ ┗ 📜Project.scss
 ┃ ┃ ┣ 📂Skill
 ┃ ┃ ┃ ┗ 📜Skill.scss
 ┃ ┃ ┣ 📜NextBtn.scss
 ┃ ┃ ┗ 📜root.scss
 ┃ ┣ 📜App.js
 ┃ ┣ 📜App.scss
 ┃ ┗ 📜index.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
```
