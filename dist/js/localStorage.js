

//1 đoạn code JS trong bài Todo List có sử dụng localStorage

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