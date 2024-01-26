# 📝 To-do list 만들기

![2024-01-264 42 00-ezgif com-speed](https://github.com/hyun0zin/to-do-list-project/assets/154870548/331f7c97-9e64-4155-a07f-1cf11d7b79a3)

<br>

<div><h1>💻 STACKS</h1></div>
<div><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"></div>

<br>

## **페이지와 기능**

#### 1. 제목과 내용을 입력하고 Add 버튼을 누르면 To-do가 추가된다.

#### 2. 완료되면 `Done` 버튼을 누르면 아래로 내려가고, `Cancel`을 누르면 다시 위로 올라온다.

#### 3. `Delete`를 누르면 해당 To-Do가 삭제된다.

<br>

## **컴포넌트 구조**

### **`component`**

- Layout
  - Header : Header를 작성하는 컴포넌트
- todo
  - TodoController : TodoForm과 TodoList를 하위 컴포넌트로 가지고 있는 컴포넌트
  - TodoForm : input tag가 들어 있는 컴포넌트
  - TodoList : TodoCards를 하위 컴포넌트로 가지고 있는 컴포넌트
  - TodoCards : Cards의 기본 html 틀을 작성하는 컴포넌트
    <br>

## **어려웠던 점 🧐**

- 처음에는 `App.js`에서 모든 코드를 작성하고 마지막에 컴포넌트를 분리 하였는데,컴포넌트를 분리하다보니 props를 넘겨주고 받는 과정에서 오류가 계속해서 생겼다.

  ▶️ 해당 props를 `부모` > `자식` > `그 자식` 까지 넘겨주려면 모든 컴포넌트에 props를 할당해주어야 전달이 가능하다.
