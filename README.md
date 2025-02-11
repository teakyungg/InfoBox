<h1> Module 기본 세팅 파일 </h1>

<h2>Babel로 모듈을 만드는 방법</h2>
src/module에 있는 .js파일을 Babel을 사용해서 변환하도록 되어 있습니다.
즉 모듈을 만들꺼면 module 파일안에서 만들어야 합니다.

babel 명령어는 터미널에 "npm run babel" 이렇게 치면 됩니다.
그럼 루트 위치에 dist폴터에 index.js 라는 파일이 생기면 성공한 겁니다.
(css도 같이 복사되게 만들었습니다. )


<h2>WebPack로 모듈을 만드는 방법</h2>
src/module에 있는 index.js파일을 webpack을 하도록 설정되어 있습니다.
즉 모듈을 만들꺼면 module안에 index.js라는 파일에 내용이 모두 들어가야 합니다.

(꼭 모든 내용을 index.js에 쓰라는 소리는 아닙니다. 
내용이 많다면 module폴터 안에 다른 파일을 만들고 index.js에 import해서 연결해도 됩니다.)

webpack 명령어는 "npm run webpack" 이렇게 치면 됩니다.
그럼 루트 위치에 dist폴터에 index.js 라는 파일이 생기면 성공한 겁니다.

!!주의 사항!!
webpack으로 매개변수(props)를 넣어야 하는 형태로 모듈을 만들게 된다면 
어떤 매개변수(props) 넣어야 하는지 알 수가 없습니다.



(공용)
이 모듈을 저장할 GitHub 레파지토리에 push를 하고
이 모듈을 사용하고자 하는 프로젝트에서 "npm i (GitHub 레파지토리 주소)"를 입력하면 됩니다.

!! 처음 만들어서 올릴 때!!
package.json에서 name 변경해서 올려야 합니다.
불러올때 package.json에 있는 name에 따른 폴터가 생기기 때문입니다.

!!주의 사항!!
만약 React(JSX) 문법을 사용시 사용하는 모든 상단에
import React from "react"; 를 입력해주셔야 합니다.
