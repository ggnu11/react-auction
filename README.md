# 개발환경 세팅

1. React-Query 세팅

- yarn add react, yarn add @types/react-query 명령어로 react-query를 설치.
- index.tsx에서 queryClient의 defaultOption 값을 설정해주고 APP 컴포넌트를 감싸는 <QueryClientProvider client={queryClient}>를 추가해준다.
