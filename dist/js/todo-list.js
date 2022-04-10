$(function () {

  //kiem tra duoi localStorage co "todos" chua
  
  //CRUD Application -   Create - Read - Update - Delete

  const todos = JSON.parse(localStorage.getItem("todos")) || [
    {
      id: null,
      content: "",  
      isDone: false,
    },
  ];
  //update variable
  let selectedTodo = null;

  //appendTo: load contend bên trong selector

  renderTodos(todos);

  //sự kiện thêm
  $(".add-todo").click(function (e) { 
    e.preventDefault();
    //khi click vào icon +, thi add nội dung vào mảng
    let inputValue = $("input.todo").val();
    if (inputValue) {
      if (selectedTodo){  // tức là selectedTodo khác null
        selectedTodo.content = inputValue;
        let index = todos.findIndex((val) => val.id === selectedTodo.id);
        todos.splice(index, 1, selectedTodo);
        localStorage.setItem("todos", JSON.stringify(todos));
        selectedTodo = null;
      } else {
        todos.unshift({
          id: +Math.random().toFixed(2), //làm tròn 2 chữ số thập phân
          content: inputValue,
          isDone: false,
        });
      }
      renderTodos(todos);
    } else {
      alert("Input is empty");
    }
    //reset cho ô input trống khi user add một thông tin vào
    $("input.todo").val("");

    //luu vao localStorage
    //JSON.stringify -> chuyen object sang string
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  //sự kiện xoá
  $(".todo-list").on("click", ".btn-delete", function(e) {
    e.preventDefault();
    let id = $(this).data("todoid");
    //tìm vị trí xuất hiện đầu tiên của thằng có id muốn delete
    let index = todos.findIndex((val) => val.id === id);
    todos.splice(index, 1);
    //luu vao localStorage
    //JSON.stringify -> chuyen object sang string
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos(todos);
  })

  $(".todo-list").on("click", ".btn-update", function(e) {
    e.preventDefault();
    let id = $(this).data("todoid");
    //tìm vị trí xuất hiện đầu tiên của thằng có id muốn delete
    // let index = todos.findIndex((val) => val.id === id);
    selectedTodo = todos.find((val) => val.id === id);
    $("input.todo").val(selectedTodo.content);
    localStorage.setItem("todos", JSON.stringify(todos));
  })

  $(".todo-list").on("click", "#check", function(e) {
    e.preventDefault();
    let id = $(this).data("todoid");
    //tìm vị trí xuất hiện đầu tiên của thằng có id muốn delete
    let index = todos.findIndex((val) => val.id === id);
    todos[index].isDone = !todos[index].isDone;
    renderTodos(todos);
  });
});

function renderTodos(todos) {
  //clear tất cả các element con
  $(".todo-list ul").empty();
  //load lại
  todos.map((val) => {
    if (val.id !== null) {
      $(`
      <li>
        <input data-todoid=${val.id} id="check" type="checkbox" 
        ${val.isDone && "checked"}/>
        <p>${val.content}</p><span data-todoid=${val.id} class="btn-delete">Delete</span><span data-todoid=${val.id} class="btn-update">Update</span>
      </li>
      `).appendTo(".todo-list ul");
    }
  });
}



//phân biệt indexOf, findIndex, find

// ========================== HTML ========================== 
// <div class="todos">
//     <div class="todo-header">
//       <h1>Todo List</h1>
//     </div>
//     <div class="todo-input">
//       <input placeholder="To do" type="text" class="todo">
//       <span class="add-todo">+</span>
//     </div>
//     <div class="todo-list">
//       <ul></ul>
//     </div>
// </div>
// ========================== HTML ========================== 

// ========================== CSS ========================== 
// body {
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: #333;
// }

// .todos {
//   background: white;
//   width: 500px;
//   border-radius: 4px;
//   box-shadow: 0px 0px 4px -2px white;
//   .todo-header {
//     padding: 30px;
//     text-align: center;
//     background: #333;
//     color: white;
//   }
//   .todo-input {
//     display: flex;
//     input {
//       padding: 8px 16px;
//       border: 1px solid #333;
//       width: 100%;
//       // custom placeholder
//       &::-webkit-input-placeholder {
//         font-style: italic;
//         color: rgba(green, 0.5);
//       }
//     }
//     span {
//       padding: 10px;
//       background: green;
//       color: white;
//       cursor: pointer;
//       transition: all 0.3s;
//           &:hover {
//             background-color: rgb(1, 101, 1);
//             transition: all 0.3s;
//           }
//     }
//   }
//   .todo-list {
//     ul {
//       li {
//         padding: 10px;
//         border-bottom: 1px solid rgba(#333, 0.3);
//         display: flex;
//         align-items: center;
//         &:last-child {
//           border-bottom: none;
//         }
//         input {
//           &:checked {
//             ~p {
//               text-decoration: line-through;
//               color: rgb(120, 120, 120);
//             }
//           }
//           &#check {
//             margin-right: 10px;
//           }
//         }
//         p {
//           display: flex;
//           align-items: center;
//         }
//         span {
//           display: inline-block;
//           padding: 8px 14px;
//           color: white;
//           background: green;
//           cursor: pointer;
//           border-radius: 3px;
//           transition: all 0.3s;
//           &:hover {
//             background-color: rgb(1, 116, 1);
//             transition: all 0.3s;
//           }
//           &.btn-delete {
//             margin-left: auto;
//             margin-right: 10px;
//             background-color: red;
//             transition: all 0.3s;
//             &:hover {
//               background-color: rgb(213, 4, 4);
//               transition: all 0.3s;
//             }
//           }
//         }
        
//       }
//     }
//   }
// }
// ========================== CSS ========================== 