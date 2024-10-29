# 개발환경 세팅

## 1. React-Query 세팅

- `yarn add react`, `yarn add @types/react-query` 명령어로 react-query를 설치.
- index.tsx에서 queryClient의 defaultOption 값을 설정해주고 APP 컴포넌트를 감싸는 `<QueryClientProvider client={queryClient}>`를 추가해준다.

  <br/>

## 2. Recoil 세팅

- yarn add recoil로 recoil를 설치
- index.tsx에서 APP 컴포넌트를 `<RecoilRoot>`로 감산다

  <br/>

## 3. 다국어 처리 세팅

- `yarn add i18next @types/i18next react-i18next @types/react-i18next`로 라이브러리 설치
- i18n.ts, en.ts, kr.ts 작성
- index.ts에 import `'./Locales/i18n';` 추가

  <br/>

## 4. styled-components 설치

- `yarn add styled-components`, `yarn add --dev @types/styled-components` 명령어로 라이브러리 설치

<br/>

## 5. tailwindcss 설치

- `yarn add -D tailwindcss postcss autoprefixer` 명령어로 라이브러리, 패키지 설치
- `yarn tailwind init -p` 명령어로 tailwindcss config 파일 생성 / 초기화
- tailwind.config.js 파일 설정
- index.css 상단에 `@tailwind base`, `@tailwind components`, `@tailwind utilities` 추가
- Extensions에서 `Tailwind CSS IntelliSense` 설치

<br/>

## 6. Helmet + .env 환경변수 설정 및 설치(브라우저 사이트명 설정)

- `yarn add react-helmet-async sass react-router-dom` 명령어로 라이브러리 설치
- `index.tsx`에서 App 컴포넌트를 `HelmetProvider`로 감싼다.
- 최상위 위치에서 `.env` 파일을 생성한다.
- `.gitignore`에서 `.env`를 추가한다.
- `.env`에서 사용할 변수를 `REACT_APP_(사용할 변수명)`을 사용해서 만든다.
- `App.tsx`에서 `process.env.REACT_APP_(변수명)`을 사용하여 환경 변수에 저장되어있는 값을 가져온다.

<br/>

| ※ `yarn start`로 실행하고 환경변수를 추가하면 `undefined`가 표시되기 때문에 서버를 종료했다 다시 실행해야한다. |
| -------------------------------------------------------------------------------------------------------------- |
