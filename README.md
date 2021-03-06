# VUE JS

## 핵심

### 1. SPA

Single Page Application

- 페이지 전환 없이(새로운 요청 응답 없이) UI 변화
- 왜?
  1. 사용자 편의
  2. 서버 리소스 절약

### 2. MVVM

Model-ViewModel-View

- MVC(Model(db)-Control(router)-View(render)) :

### 3. Declarative Programming

<b>선언적 프로그래밍</b> <-> 명령형 프로그래밍(Imperative Programing)

- 명령형(절차적) : 변화를 단계적으로 명령
  - Vanilla Javascript DOM 조작
- 선언형 : 변화를 선언(그림 그리기)
  - 프레임워크를 통한 조작

## Vue JS의 요소

### 1. Directive(지시자)

- `v-for` : 배열과 같은 데이터를 순회
- `v-if` : 조건부 렌더린
- `v-else` : 조건부 렌더린
- `v-on` : 이벤트 바인딩(`addEventListener()`)
- `v-model` : 양방향 바인딩
