# 개발환경 세팅

1. React-Query 세팅

- `yarn add react`, `yarn add @types/react-query` 명령어로 react-query를 설치.
- index.tsx에서 queryClient의 defaultOption 값을 설정해주고 APP 컴포넌트를 감싸는 `<QueryClientProvider client={queryClient}>`를 추가해준다.

2. Recoil 세팅

- yarn add recoil로 recoil를 설치
- index.tsx에서 APP 컴포넌트를 `<RecoilRoot>`로 감산다

3. 다국어 처리 세팅

- `yarn add i18next @types/i18next react-i18next @types/react-i18next`로 라이브러리 설치
- i18n.ts, en.ts, kr.ts 작성
- index.ts에 import `'./Locales/i18n';` 추가

4. styled-components 설치

- `yarn add styled-components`, `yarn add --dev @types/styled-components` 명령어로 라이브러리 설치
