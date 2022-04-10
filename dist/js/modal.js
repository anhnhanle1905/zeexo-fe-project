$(function () {
  //click vao cai nut
  $(".show-modal").click(function (e) { 
    e.preventDefault();
    // $(".modal").show();  // tuong duong display: block
    $(".modal").fadeIn();  //display: block + opacity
  });

  $(".modal").click(function (e) { 
    e.preventDefault();
    $(".modal").fadeOut();
    // $(".modal").hide();
  });

  $(".modal-content").click(function (e) { 
    e.preventDefault();
      e.stopPropagation(); //khong nhan su kien ben ngoai class .modal-content
  });
});

// ========================== CSS ========================== 
// .modal {
//   display: none;
//   position: fixed;
//   height: 100vh;
//   width: 100%;
//   top: 0;
//   left: 0;
//   background: rgba(#333, 0.3);
//   .modal-wrapper {
//     position: relative;
//     .modal-content {
//       position: absolute;
//       left: 50%;
//       transform: translateX(-50%);
//       top: 10%;
//       width: 500px;
//       padding: 20px;
//       background: white;;
//       border-radius: 3px;
//     }
//   }
// }
// ========================== CSS ========================== 