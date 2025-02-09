Babel Module 기본 세팅 파일

기본적으로 src/module를 Babel하도록 설정이 되어 있음

webpack 명령어는 터미널에 "npm run babel" 이렇게 치면 됨
그럼 루트 위치에 dist폴터에 index.js 라는 파일이 생김

이제 GitHub에 push를 하고 다른 곳에서 불러와서 사용하면 됨

!!주의 사항!!
만약 React(JSX) 문법을 사용시 사용하는 모든 상단에
import React from "react"; 를 입력할 것