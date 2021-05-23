# 단국대학교 크롬 익스텐션

## 프로젝트 소개

2021년 1학기 '오픈소스SW기여' 수업에서 진행한 프로젝트입니다.

학생분들의 편리함을 위해 제작되었으며, 강의나 과제 혹은 프로젝트 등의 '할 일 목록'을 관리하기 편리하도록 만든 'Google 크롬 확장 프로그램'입니다.

`주요모듈 내용`

- TodoList
  <br>
  -> 크롬 브라우저에서 익스텐션 아이콘을 클릭하면 화면 오른쪽에 TodoList목록이 보여집니다.<br>
  -> 리스트에 추가할 할 일 목록을 입력하고 '+' 버튼을 클릭하여 새로운 할 일을 추가할 수 있습니다.<br>
  -> 버튼을 통해서 할 일 목록의 제목 및 이름을 수정하고 삭제할 수 있습니다.<br>

- HomeView
  <br>
  -> 크롬 브라우저에서 새 탭을 추가하면 사용자의 북마크를 볼 수 있습니다.<br>
  -> 버튼을 이용하여 Homeview에 대한 '다크모드'와 '라이트모드'전환 기능을 제공합니다.<br>
  -> 사용자 편의에 맞춰 소식을 빠르고 쉽게 접할 수 있도록 합니다.

---

## Getting Started

[익스텐션 다운로드 하러 가기]()

---

## 프로젝트 목표

- 지속적인 업데이트 및 기능 개선
- 지속적인 Bug fix 및 user와의 커뮤니케이션
- 개발자들이 기여하고 싶고, 관심을 가질 수 있는 프로젝트로 나아가기
- React를 활용한 크롬 익스텐션 제작 및 스토어 등록
- React 학습 및 활용
- 오픈소스에 기여하기
- Git을 이용한 협업 능력 기르기
- 오픈 소스 라이브러리를 직접 만들어 봄으로 써 코딩 컨벤션, 깃 플로우, 코드 리뷰 통한 안정적인 협업을 경험

---

## 프로젝트 효과

1. 과제나 수업 등에 대한 To-do List 작성을 더 편리하고 new Tab을 통한 학교 홈페이지, 이러닝 페이지(온라인 강의)로의 전환이 쉬워짐으로써 사용자에게 긍정적인 사용 경험을 제공한다.
2. 스토어에서 간편하게 무료로 다운로드 받을 수 있기 때문에, 누구든지 쉽게 접근 및 사용할 수 있다.
3. UI를 최대한 간편하고 사용자 경험에 기대어 제작함으로써 사용자 입장에서 복잡한 과정없이 직관적으로 우리의 Application을 이용하여 필요한 내용을 To-do List에 기입할 수 있다.
4. new Tab을 사용자의 요구에 맞게 커스터마이징할 수 있도록하여 각자의 요구에 맞게끔 수정할 수 있다.

---

## 프로젝트에 기여하는 방법

- 우리 프로젝트에 관심이 있는 모든 분들이 프로젝트에 기여해주실 수 있으십니다.
- 부담을 가지지 않고 간단한 오타 수정 및 문서화 작업에 기여해주셔도 됩니다.
- 자세한 사항은 다음 문서들을 참고해주세요.<br>
  -> [CONTRIBUTING.md](CONTRIBUTING.md)<br>
  -> [좋은 커밋 메시지 작성 방법](https://meetup.toast.com/posts/106)

---

## 파일 및 폴더 구조

    .
    ├── config
    ├── node_modules
    ├── public
    ├── scripts
    ├── src
        ├── common
        ├── components
            ├── App.jsx
            ├── NewTab.jsx
            ├── SubjectForm.jsx
            ├── Todo.jsx
            ├── TodoContainer.js
            ├── TodoItems.js
            ├── TodoList.jsx
            ├── Toggler.jsx
        ├── provider
            ├── globalStyles.js
            ├── theme.js
        ├── content.js
        ├── index.js
        ├── registerServiceWorker.js
    ├── .eslintignore
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md
    └── CONTRIBUTING.md
