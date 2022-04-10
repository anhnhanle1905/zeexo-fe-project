$(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    margin: 20,
    loop: true,
    nav: true,
    navText: ["truoc", "sau"],
    dots: true,
    autoplay: true,
    autopalyTimeout: 3000,  // 3s
  });
});

/*
loop: keo het thi quay lai tu dau
nav: hien dau mui ten cho click
navText:
dots: hiện dấu chấm
autoplay: tự động chạy
*/


//gắn thẻ script vào html:
//  <script src="dist/js/owl.carousel.min.js"></script>




//========================== CSS ========================== 
// .owl-dot.active span {
//   background: red !important;
//   }
  
//   .owl-dot:hover span {
//     background: green !important;
//   }
  
//   .owl-dot button:hover {
//     background: none !important;
//     color: inherit !important;
//   }
  
//   .owl-item.active {
//     .item {
//       position: relative;
//       .item-content {
//         position: absolute;
//         top: 10px;
//         left: 10px;
//         h2 {
//           animation: floatY 0.4s 3s forwards;
//           color: white;
//           opacity: 0;
//         }
//         button {
//           animation: floatY 0.4s 5s forwards;
//           color: white;
//           opacity: 0;
//         }
//       }
//     }
//   }
  
//   @keyframes floatY {
//     from {
//       transform: translateY(20px);
//       // opacity: 1;
//     }
//     to {
//       transform: translateY(0);
//       opacity: 1;
//     }
//   }
//========================== CSS ==========================   
  
  