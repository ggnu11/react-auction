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
- tailwind.config.js 에 다음 코드 추가

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

- `postcss.config.js`파일에 다음 코드 추가

```
plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
  ],
```

- index.css파일을 삭제하고 `src\assets\css\tailwind.css`파일을 생성 후 `tailwind.css` 상단에 `@tailwind base`, `@tailwind components`, `@tailwind utilities` 추가
- Extensions에서 `Tailwind CSS IntelliSense` 설치
- `index.tsx`에 `import './assets/css/tailwind.css';` 추가

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

<br/>

## 7. GlobalStyle + font.css 적용

- `yarn add styled-reset`로 `styled-reset` 라이브러리를 설치
- 구글에서 `NotoSansKR`을 다운받고 `font.css` 파일을 생성한 후 `@font-face`를 적용한다.
- `GlobalStyle.ts`파일을 생성하고 스타일을 설정한 후 `App.tsx`에 `import`하여 불러온다.

<br/>

## 8. Router 설정

- `yarn add react-router`, `react-router-dom`, `yarn add --dev @types/react-router @types/react-router-dom` 명령어로 라이브러리 설치
- `routes` 폴더 안에 `MenuRoute.tsx` 생성 후 다음 코드 추가

```
const router = createBrowserRouter([{ path: '/', element: <Login /> }]);

const MenuRoute = () => {
  return <RouterProvider router={router} />;
};

export default MenuRoute;
```

<br/>

## 9. antd(Ant-Design) 설치

- `yarn add antd @types/antd`, `yarn add @ant-design/icons` 명령어로 antd, antd(타입), antd에서 제공하는 아이콘을 사용할때에 필요한 라이브러리를 설치한다.
- https://ant.design/components/layout 사이트에 들어가서 원하는 레이아웃을 선택한 후 화면에 적용한다.

<br/>

## 10. lodash vs lodash-es

- lodash : CommonJS 모듈 시스템을 기반으로 하며, Node.js 환경에서 주로 사용. 전체 라이브러리를 한 번에 가져오는 방식.

- lodash-es : ES 모듈 시스템을 사용하여, 모듈을 개별적으로 가져오는 방식(번들 최적화)

- lodash 설치 : `yarn add lodash`, `yarn add @types/lodash`
- lodash-es 설치 :`yarn add lodash-es`, `yarn add @types/lodash-es`

<br/>

## 11. Craco 설치

- `yarn add @craco/craco` 명령어로 craco 설치
- `package.json`파일의 `scripts` 부분을 `craco`로 수정
- root 폴더에 `craco.config.ts` 파일 생성
- `craco.config.ts`에 모듈 추가
- `tsconfig.paths.json`에 `baseUrl`, `paths` 추가
- `tsconfig.json`에 `"include": ["src"], "extends": "./tsconfig.paths.json"` 추가
  > 주의사항 : 파일명이 `recoil`일 경우, `src/recoil`로 인식하는 것이 아닌 `typescript`의 `recoil` 모듈로 인식하여 에러가 발생하였다. 이를 방지하기 위해 모든 폴더 경로 별칭을 추가해야 한다(예: `@/`)

<br/>

## 기술 스택

> 1. react - https://github.com/facebook/react - 자바스크립트 프레임워크
> 2. react-query - https://github.com/tanstack/query - 네트워크 요청한 데이터 캐싱 및 컨트롤
> 3. react-router - https://github.com/remix-run/react-router - 브라우저 네비게이팅 처리
> 4. React Helmet Async - https://www.npmjs.com/package/react-helmet-async - 메타데이터 관리를 돕는 라이브러리
> 5. axios - https://github.com/axios/axios - 네트워크 요청
> 6. recoil - https://github.com/facebookexperimental/Recoil - 상태 관리
> 7. recoil-persist - https://github.com/polemius/recoil-persist - 상태 관리 localstorage 저장
> 8. typescript - https://github.com/microsoft/TypeScript - 타입
> 9. i18next - https://github.com/i18next/i18next - 다국어
> 10. Ant Design (antd) - https://ant.design/ - UI 템플릿
> 11. @ant-design/icons - https://ant.design/components/icon - Ant Design의 아이콘 패키지
> 12. TailwindCSS - https://tailwindcss.com/ - CSS 프레임워크
> 13. lodash-es - https://github.com/lodash/lodash - 데이터 조작 및 유틸리티 기능 라이브러리
> 14. ESLint - https://eslint.org/ - JavaScript 린팅 도구
> 15. Prettier - https://prettier.io/ - 코드 포맷팅 자동화 도구
