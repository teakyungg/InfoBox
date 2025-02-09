Babel Module 기본 세팅 파일

기본적으로 src/module를 Babel하도록 설정이 되어 있음
즉 모듈을 만들꺼면 module 파일안에 모두 만들어야 함

webpack 명령어는 터미널에 "npm run babel" 이렇게 치면 됨
그럼 루트 위치에 dist폴터에 index.js 라는 파일이 생김 (css도 같이 복사되게 만듬)

이 모듈을 저장할 GitHub 레파지토리에 push를 하고
이 모듈을 사용하고자 하는 프로젝트에서 "npm i (GitHub 레파지토리 주소)"를 입력하면 됨

!!주의 사항!!
만약 React(JSX) 문법을 사용시 사용하는 모든 상단에
import React from "react"; 를 입력할 것
