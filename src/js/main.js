$(function () {
  $(".products-owl .owl-carousel").owlCarousel();
  //jquery in .products
  const products = [
    {
      id: 1,
      name: "tu lanh",
      category: ["electronic", "furniture"],
    },
    {
      id: 2,
      name: "quan jean",
      category: ["cloth"],
    },
    {
      id: 3,
      name: "may bom",
      category: ["electronic", ],
    },
    {
      id: 4,
      name: "may giat",
      category: ["electronic", "cloth"],
    },
    {
      id: 5,
      name: "co may thoi gian",
      category: ["furniture"],
    },
    {
      id: 6,
      name: "ao thun",
      category: ["cloth"],
    },
    {
      id: 7,
      name: "ao am",
      category: ["cloth"],
    },
    {
      id: 8,
      name: "tivi",
      category: ["electronic", ],
    },
  ];

  //load san pham ra owl carousel
  // renderOwl(products, ".products-owl .owl-carousel");
  //kiem tra thang nao dang active
  const allCategory = $(".products .category a");
  for (let i = 0; i < allCategory.length; i++) {
    if ($(allCategory[i]).hasClass("active")) {
      const category = $(allCategory[i]).data("category");
      const activeProducts = products.filter(val => 
        val.category.includes(category)
      );
      renderOwl(activeProducts, ".products-owl .owl-carousel");
    }
  } 

  // tạo ra 3 ô lựa chọn, click vào thì add class active vào để chữ có css của class active
  $(".products .category a").click(function (e) { 
    e.preventDefault();  //loai bo su kien mac dinh
    $(".products .category a").removeClass("active");
    $(this).addClass("active"); // this o day la .products .category a 

    //lay category
    const category = $(this).data("category");
    const filterProducts = products.filter(val => 
      val.category.includes(category)
    );
    //removeOwl
    removeOwl(products);
    //renderOwl
    renderOwl(filterProducts, ".products-owl .owl-carousel");
  });
});

function removeOwl(products) {
  for (let i = 0; i < products.length; i++) {
    $(".products-owl .owl-carousel")
    .trigger("remove.owl.carousel", [i])
    .trigger("refresh.owl.carousel");
  }
}

function renderOwl(list, selector) {
  //them .reveser() để đảo ngược sản phẩm khi add vào
  //vì add.owl.carousel nó add vào đầu nên sp vào bị lộn ngược
  list.reverse().map((val, index) => {
    // add list san pham vao owl
    $(selector)
    .trigger("add.owl.carousel", [`<div class="item">${val.name}</div>`,index,])
    .trigger("refresh.owl.carousel");
  })
}