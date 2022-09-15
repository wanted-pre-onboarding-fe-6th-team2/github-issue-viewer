# 원티드 프리온보딩 4차 과제

> ## 2팀 소개

<table>
  <tr>
    <td height="50px" align="center"><a href="https://github.com/Taak-e">김주탁<br>(팀장)</a></td>
    <td height="50px" align="center"><a href="https://github.com/hasunghwa">하성화</a></td>
    <td height="50px" align="center"><a href="https://github.com/HaJunRyu">류하준</a></td>
    <td height="50px" align="center"><a href="https://github.com/
wldbszpflrxj">변지윤</a></td>
    <td height="50px" align="center"><a href="https://github.com/
hyoungqu23">이형민</a></td>
  </tr>
  <tr>
    <td align="center">이슈 목록 페이지</td>
    <td align="center">Github API 연동</td>
    <td align="center">Context API Provider 생성</td>
    <td align="center">이슈 상세 페이지</td>
    <td align="center">공통 컴포넌트, Infinite Scroll</td>
  </tr>
</table>

> ## 데모

[🌎 데모 페이지](https://github-issue-viewer-team2.netlify.app/)

> ## 실행 방법

```
yarn install

yarn dev
```

> ## 목차

- [과제 내용](#과제-내용)
- [폴더 구조](#폴더-구조)
- [과제 요구사항 및 해결 방법](#과제-요구사항-및-해결-방법)
- [기술 스택](#기술-스택)

> ## 과제 내용

원티드 프리온보딩 프론트엔드 기업 협업 과제

- ### 주제
  - [특정 깃헙 레파지토리](https://github.com/angular/angular-cli)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축
- ### 기간
  - 2022년 9월 13일 ~ 9월 15일
- ### 페이지 구성

  1. 이슈 목록 페이지
  2. 이슈 상세 페이지

- ### 와이어 프레임

  ![와이어프레임](https://younuk.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4dce1f3c-8939-4dbd-8568-e899d0ae91fc%2FUntitled.png?table=block&id=75f3bc48-33d4-4f64-a4a4-99be4a970b62&spaceId=72b256b1-ae08-4e70-bb6c-f9c3cad5a793&width=1900&userId=&cache=v2)

<br/>

> ## 폴더 구조

```

📦
src
├─ App.jsx
├─ main.jsx
├─ api
│  ├─ core.js
│  └─ issue.js
├─ assets
│  └─ react.svg
├─ components
│  └─ common
│     ├─ Header
│     ├─ Layout
│     └─ Loading
├─ constants
│  └─ route.js
├─ context
│  ├─ IssueDetailsProvider.jsx
│  └─ IssuesProvider.jsx
├─ hooks
│  ├─ useInfiniteScroll.js
│  ├─ useIssueDetailActions.js
│  ├─ useIssueDetailStore.js
│  ├─ useIssuesActions.js
│  └─ useIssuesStore.js
├─ pages
│  ├─ IssueDetail
│  └─ IssueList
└─ styles
   └─ reset.js

```

<br/>

> ## 과제 요구사항 및 해결 방법

### Github API 연동

- 요구사항 작성

**해결방법**

- 해결 방안 작성

### Context API Provider 생성

- 요구사항 작성

**해결방법**

- 해결 방안 작성

### 공통 컴포넌트, Infinite Scroll

- 공통 Header 컴포넌트
- Infinite scroll
- 데이터 요청 중 로딩 표시를 위한 Loading 컴포넌트

**해결방법**

- `DOM`의 `Scroll Event`를 활용하면 상대적으로 익숙하여 구현하기는 쉬우나, 최적화를 따로 해주어야 하고, 추후 `TopButton` 등의 기능을 추가할 때 reflow를 일으킬 가능성이 있으므로, 성능적으로 좋지 않을 수 있다. 따라서 `IntersectionObserver`를 활용하여 `Infinite Scroll`을 구현했다.
- 페이지 하단에 임시 요소를 생성하고, 해당 요소가 뷰포트에 감지되는 순간 다음 데이터를 가져오는 방식으로 구현했다.
- 공통 Header와 Layout 컴포넌트을 통해 통일성 있는 UI를 구현했다.
- Loading 컴포넌트를 통해 데이터 요청 중 Skeleton Loading을 구현했다.

### 이슈 목록 페이지

- 요구사항 작성

**해결방법**

- 해결 방안 작성

### 이슈 상세 페이지

- 요구사항 작성

**해결방법**

- 해결 방안 작성

> ## 기술 스택

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![emotion](https://img.shields.io/badge/Emotion-D26AC2?style=for-the-badge&logo=emotion&logoColor=white)
![mui](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![ContextAPI](https://img.shields.io/badge/Context--API-61dafb?style=for-the-badge&logo=Context-API&logoColor=white)
