$(function () {
  // your code here
  
//click vao .hello
$("button").click(function (e) { 
  e.preventDefault();
  alert(Number($(".numberA").val())+Number($(".numberB").val()));
});
  
//TODO JQUERY
//load dữ liệu từ JQuery ra HTML

const users = [
  {
    name: "user1",
  },
  {
    name: "user2",
  }
];

  console.log($(".user1").text());
  $(".user2").text(users[1].name);

});
