// --------- scroll --------- 
$(function () {
  $(window).scroll(function () { 
    const position = $(window).scrollTop();
    if (position > 250) {
      $(".top-header").addClass("fixed-top-header");
    }
    else {
      $(".top-header").removeClass("fixed-top-header");
    }
    if (position > 280) {
      $(".btn-gotop").addClass("show-btn");
    }
    else {
      $(".btn-gotop").removeClass("show-btn");
    }
  });
});

// --------- scroll ---------

// --------- search ---------

// --------- search ---------

//==================main-banner==================
$(function () {
  $("#main-banner").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
    docs: true,
  });
});
//==================main-banner==================
//==================latest-products==================
//---------- products Object ---------
$(function () {
  $("#latest-product").owlCarousel({
  items: 4,
  margin: 20,
  loop: false,
  nav: true,
  navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
  docs: true,
  });

  const latestProducts = [
    {
      "id": 1,
      "srcimg": "dist/img/project-latest-product-1.png",
      "name": "Black Fashion Zapda",
      "propNew": "new",
      "propHot": "hot",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 20.00,
      "salePrice": 10.00,
      "notsalePrice": 0,
      "starNumber": 5,
    },
    {
      "id": 2,
      "srcimg": "dist/img/project-latest-product-2.png",
      "name": "Coneco Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 20.00,
      "starNumber": 0,
    },
    {
      "id": 3,
      "srcimg": "dist/img/project-latest-product-3.png",
      "name": "Daltex Product Example",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 25.00,
      "salePrice": 20.00,
      "notsalePrice": 0,
      "starNumber": 5,
    },
    {
      "id": 4,
      "srcimg": "dist/img/project-latest-product-4.png",
      "name": "Dentoex Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 49.00,
      "salePrice": 40.00,
      "notsalePrice": 0,
      "starNumber": 0,
    },
    {
      "id": 5,
      "srcimg": "dist/img/project-latest-product-5.png",
      "name": "Dentotam Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 20.00,
      "starNumber": 0,
    },
    {
      "id": 6,
      "srcimg": "dist/img/project-latest-product-6.png",
      "name": "Donkix Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 80.00,
      "salePrice": 60.00,
      "notsalePrice": 0,
      "starNumber": 0,
    },
    {
      "id": 7,
      "srcimg": "dist/img/project-latest-product-7.png",
      "name": "Faxtex Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 99.00,
      "salePrice": 90.00,
      "notsalePrice": 0,
      "starNumber": 0,
    },
    {
      "id": 8,
      "srcimg": "dist/img/project-latest-product-8.png",
      "name": "Hotex Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 69.00,
      "starNumber": 0,
    },
  ]
  renderOwl(latestProducts, ".latest-products .container .owl-carousel");

});
//---------- products Object ---------

// function removeOwl(products) {
//   for (let i = 0; i < products.length; i++) {
//     $(".products-owl .owl-carousel")
//       .trigger("remove.owl.carousel", [i])
//       .trigger("refresh.owl.carousel");
//   }
// }
//================== Render ==================
function renderStars(num) { 
  const star = '<i class="fas fa-star"></i>';
  let res = '';
  for(let i=0; i<num; i++){
    res += star;
  }
  return res;
}

function renderOriginalPrice(list, bool, id) {
  let price = "";
  list.map((val) => {
    if (val.id === id) {
      if (bool) {
        price = `$${val.originalPrice}.00`;
      } 
    }
  })
  return price;
};
function renderSalePrice(list, bool, id) {
  let price = "";
  list.map((val) => {
    if (val.id === id) {  
      if (bool) {
        price = `$${val.salePrice}.00`;
      } 
    }
  })
  return price;
};
function renderNotsalePrice(list, bool, id) {
  let price = "";
  list.map((val) => {
    if (val.id === id) {    
      if (!bool) {
        price = `$${val.notsalePrice}.00`;
      } 
    }
  })
  return price;
};
function renderProperties(properties) {
  const allProp = $(".item .properties span");
  const propNew = $(allProp[i]).data("new");
  if ($(properties).includes(propNew)) {
    $(".item .properties span").removeClass("not-active");
  }
  
}
//================== Render ==================
function renderOwl(list, selector) {

  list.reverse().map((val, index) => {
    // $(".rate").empty();
    $(selector) 
    .trigger("add.owl.carousel", [
    `<div class="item">
      <div class="item-img">
        <img src="${val.srcimg}" alt="" />
        <div class="item-select">
          <a href="">SELECT OPTIONS</a>    
        </div>
      </div> 
      <div class="item-content">
        <div class="item-name-product">
          <a href="">${val.name}</a>
        </div> 
        <div class="item-price">
          <span class="original-price">${renderOriginalPrice(list, val.sale, val.id)}</span>
          <span class="sale-price">${renderSalePrice(list, val.sale, val.id)}</span>
          <span class="not-sale-price">${renderNotsalePrice(list, val.sale, val.id)}</span>
        </div>
        <div class="item-rate">
          ${renderStars(val.starNumber)}
        </div>
      </div>
      <div class="item-properties">
        <span class="${val.propNew || "notActive"}">NEW</span>
        <span class="${val.propHot || "notActive"}">HOT</span>
        <span class="${val.propSale || "notActive"}">SALE</span>
      </div>
      <div class="item-button">
        <span>
          <a href=""><i class="fas fa-exchange-alt"></i></a>
        </span>
        <span>
          <a href=""><i class="fas fa-heart"></i></a>
        </span>
        <span>
          <a href=""><i class="fas fa-search"></i></a>
        </span>
      </div>
      
    </div>`
    , index,])
    .trigger("refresh.owl.carousel");
  })
}
//==================latest-products==================

//====================bestsellers====================

$(function () {
  $("#best-sellers").owlCarousel({
  items: 4,
  margin: 20,
  loop: false,
  nav: true,
  navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
  docs: true,
  });

  const bestSellers = [
    {
      "id": 9,
      "srcimg": "dist/img/project-bestsellers-1.png",
      "name": "Irene Royal Product",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 60,
      "starNumber": 0,
    },
    {
      "id": 10,
      "srcimg": "dist/img/project-bestsellers-2.png",
      "name": "Product Example",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 20.00,
      "starNumber": 0,
    },
    {
      "id": 11,
      "srcimg": "dist/img/project-bestsellers-3.png",
      "name": "Newity Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 80.00,
      "starNumber": 0,
    },
    {
      "id": 12,
      "srcimg": "dist/img/project-bestsellers-4.png",
      "name": "Lexizimin Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 89.00,
      "starNumber": 0,
    },
    {
      "id": 13,
      "srcimg": "dist/img/project-bestsellers-5.png",
      "name": "Lexiwarm Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 35.00,
      "starNumber": 0,
    },
    {
      "id": 14,
      "srcimg": "dist/img/project-bestsellers-6.png",
      "name": "Fixair Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 120.00,
      "salePrice": 110.00,
      "notsalePrice": 0,
      "starNumber": 0,
    },
    {
      "id": 15,
      "srcimg": "dist/img/project-bestsellers-7.png",
      "name": "Dentoex Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 49.00,
      "salePrice": 40.00,
      "notsalePrice": 0,
      "starNumber": 0,
    },
    {
      "id": 16,
      "srcimg": "dist/img/project-bestsellers-8.png",
      "name": "Black Fashion Zapda",
      "propNew": "new",
      "propHot": "hot",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 20.00,
      "salePrice": 10.00,
      "notsalePrice": 0,
      "starNumber": 3,
    },
  ]
  renderOwl(bestSellers, ".best-sellers .container .owl-carousel");

});
//====================bestsellers====================

//====================showProducts====================
$(function () {
  const showProducts = [
    {
      "id": 1,
      "srcimg": "dist/img/project-bestsellers-6.png",
      "name": "Fixair Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 120.00,
      "salePrice": 110.00,
      "notsalePrice": 0,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 2,
      "srcimg": "dist/img/project-products-tab-2.png",
      "name": "Hot Com Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 150.00,
      "salePrice": 125.00,
      "notsalePrice": 0,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 3,
      "srcimg": "dist/img/project-latest-product-8.png",
      "name": "Hotex Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 69.00,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 4,
      "srcimg": "dist/img/project-products-tab-4.png",
      "name": "Gold Diamond Chain",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 69.00,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 5,
      "srcimg": "dist/img/project-bestsellers-5.png",
      "name": "Lexiwarm Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 35.00,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 6,
      "srcimg": "dist/img/project-products-tab-6.png",
      "name": "Keydex Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 55.00,
      "salePrice": 49.00,
      "notsalePrice": 0,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 7,
      "srcimg": "dist/img/project-latest-product-5.png",
      "name": "Dentotam Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 20.00,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 8,
      "srcimg": "dist/img/project-bestsellers-4.png",
      "name": "Lexizimin Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 89.00,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 9,
      "srcimg": "dist/img/project-latest-product-1.png",
      "name": "Black Fashion Zapda",
      "propNew": "new",
      "propHot": "hot",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 20.00,
      "salePrice": 10.00,
      "notsalePrice": 0,
      "starNumber": 3,
      "category": ["featured"],
    },
    {
      "id": 10,
      "srcimg": "dist/img/project-latest-product-2.png",
      "name": "Coneco Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 20.00,
      "starNumber": 0,
      "category": ["featured"],
    },
    {
      "id": 11,
      "srcimg": "dist/img/project-latest-product-3.png",
      "name": "Daltex Product Example",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 25.00,
      "salePrice": 20.00,
      "notsalePrice": 0,
      "starNumber": 5,
      "category": ["featured"],
    },
    {
      "id": 12,
      "srcimg": "dist/img/project-latest-product-4.png",
      "name": "Dentoex Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 49.00,
      "salePrice": 40.00,
      "notsalePrice": 0,
      "starNumber": 0,
      "category": ["featured"],
    },
    {
      "id": 13,
      "srcimg": "dist/img/project-latest-product-5.png",
      "name": "Dentotam Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 20.00,
      "starNumber": 0,
      "category": ["featured"],
    },
    // {
    //   "id": 13,
    //   "srcimg": "dist/img/project-latest-product-5.png",
    //   "name": "Dentotam Product Sample",
    //   "propNew": "",
    //   "propHot": "",
    //   "propSale": "",
    //   "sale": false,
    //   "originalPrice": 0,
    //   "salePrice": 0,
    //   "notsalePrice": 20.00,
    //   "starNumber": 0,
    //   "category": ["p-tabs","featured"],
    // },
    {
      "id": 14,
      "srcimg": "dist/img/project-latest-product-6.png",
      "name": "Donkix Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 80.00,
      "salePrice": 60.00,
      "notsalePrice": 0,
      "starNumber": 0,
      "category": ["featured"],
    },
    {
      "id": 15,
      "srcimg": "dist/img/project-latest-product-7.png",
      "name": "Faxtex Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 99.00,
      "salePrice": 90.00,
      "notsalePrice": 0,
      "starNumber": 0,
      "category": ["featured"],
    },
    {
      "id": 16,
      "srcimg": "dist/img/project-latest-product-8.png",
      "name": "Hotex Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 69.00,
      "starNumber": 0,
      "category": ["featured"],
    },
    {
      "id": 17,
      "srcimg": "dist/img/project-bestsellers-1.png",
      "name": "Irene Royal Product",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 60,
      "starNumber": 0,
      "category": ["newest"],
    },
    {
      "id": 18,
      "srcimg": "dist/img/project-bestsellers-2.png",
      "name": "Product Example",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 20.00,
      "starNumber": 0,
      "category": ["newest"],
    },
    {
      "id": 19,
      "srcimg": "dist/img/project-bestsellers-3.png",
      "name": "Newity Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 80.00,
      "starNumber": 0,
      "category": ["newest"],
    },
    {
      "id": 20,
      "srcimg": "dist/img/project-bestsellers-4.png",
      "name": "Lexizimin Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 89.00,
      "starNumber": 0,
      "category": ["newest"],
    },
    // {
    //   "id": 20,
    //   "srcimg": "dist/img/project-bestsellers-4.png",
    //   "name": "Lexizimin Product Sample",
    //   "propNew": "",
    //   "propHot": "",
    //   "propSale": "",
    //   "sale": false,
    //   "originalPrice": 0,
    //   "salePrice": 0,
    //   "notsalePrice": 89.00,
    //   "starNumber": 0,
    //   "category": ["p-tabs","newest"],
    // },
    {
      "id": 21,
      "srcimg": "dist/img/project-bestsellers-5.png",
      "name": "Lexiwarm Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 35.00,
      "starNumber": 0,
      "category": ["newest"],
    },
    {
      "id": 22,
      "srcimg": "dist/img/project-bestsellers-6.png",
      "name": "Fixair Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 120.00,
      "salePrice": 110.00,
      "notsalePrice": 0,
      "starNumber": 0,
      "category": ["newest"],
    },
    {
      "id": 23,
      "srcimg": "dist/img/project-bestsellers-7.png",
      "name": "Dentoex Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 49.00,
      "salePrice": 40.00,
      "notsalePrice": 0,
      "starNumber": 0,
      "category": ["newest"],
    },
    {
      "id": 24,
      "srcimg": "dist/img/project-bestsellers-8.png",
      "name": "Black Fashion Zapda",
      "propNew": "new",
      "propHot": "hot",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 20.00,
      "salePrice": 10.00,
      "notsalePrice": 0,
      "starNumber": 3,
      "category": ["newest"],
    },
  ];
  
  //kiem tra thang nao dang active
  const allCategory = $(".show-products .category a");
  for (let i = 0; i < allCategory.length; i++) {
    if ($(allCategory[i]).hasClass("active")) {
      const category = $(allCategory[i]).data("category");
      const activeProducts = showProducts.filter(val => 
        val.category.includes(category)
      );
      renderShowProducts(activeProducts, ".show-products .container .row-showProducts");
    }
  } 

  // tạo ra 3 ô lựa chọn, click vào thì add class active vào để chữ có css của class active
  $(".show-products .category a").click(function (e) { 
    e.preventDefault();  //loai bo su kien mac dinh
    $(".show-products .category a").removeClass("active");
    $(this).addClass("active"); 

    //lay category
    const category = $(this).data("category");
    const filterProducts = showProducts.filter(val => 
      val.category.includes(category)
    );
    
    removeShowProducts(showProducts);
    
    renderShowProducts(filterProducts);
  });
});

function removeShowProducts(list) {
  list.map((val, index) => {
    $(".item").remove();
  })
}

function renderShowProducts(list) {
  list.map((val, index) => {
    $(
    `<div class="item col-pj20-md-5">
      <div class="item-img">
        <img src="${val.srcimg}" alt="" />
        <div class="item-select">
          <a href="">SELECT OPTIONS</a>    
        </div>
      </div> 
      <div class="item-content">
        <div class="item-name-product">
          <a href="">${val.name}</a>
        </div> 
        <div class="item-price">
          <span class="original-price">${renderOriginalPrice(list, val.sale, val.id)}</span>
          <span class="sale-price">${renderSalePrice(list, val.sale, val.id)}</span>
          <span class="not-sale-price">${renderNotsalePrice(list, val.sale, val.id)}</span>
        </div>
        <div class="item-rate">
          ${renderStars(val.starNumber)}
        </div>
      </div>
      <div class="item-properties">
        <span class="${val.propNew || "notActive"}">NEW</span>
        <span class="${val.propHot || "notActive"}">HOT</span>
        <span class="${val.propSale || "notActive"}">SALE</span>
      </div>
      <div class="item-button">
        <span>
          <a href=""><i class="fas fa-exchange-alt"></i></a>
        </span>
        <span>
          <a href=""><i class="fas fa-heart"></i></a>
        </span>
        <span>
          <a href=""><i class="fas fa-search"></i></a>
        </span>
      </div>
     
    </div>`
    ).appendTo(".row-showProducts");
  })
}
//====================showProducts====================

//====================theBlog====================
$(function () {
  const theBlog = [
    {
      "id": 1,
      "srcimg": "dist/img/project-theBlog-1.png",
      "mainName": "MID SEASON SALE! UP TO -50%",
      "subName": "Arena Zeexo Fashion New Admin. on Jun 05 2019",
      "propArt": "art",
      "propClassic": "classic",
      "propDesign": "design",
      "propPhotography": "Photography",
    },
    {
      "id": 2,
      "srcimg": "dist/img/project-theBlog-2.png",
      "mainName": "COFFEE TIME IN OFFICE",
      "subName": "Arena Zeexo Fashion New Admin. on May 29 2019",
      "propArt": "art",
      "propClassic": "",
      "propDesign": "design",
      "propPhotography": "photography",
    },
    {
      "id": 3,
      "srcimg": "dist/img/project-theBlog-3.png",
      "mainName": "THE BEST SHOPIFY SUPPORT 24/7",
      "subName": "Arena Zeexo Fashion New Admin. on May 29 2019",
      "propArt": "",
      "propClassic": "classic",
      "propDesign": "design",
      "propPhotography": "",
    },
  ];
  renderTheBlog(theBlog);
});

function renderTheBlog(list) {
  list.map((val, index) => {
    $(
    `<div class="item col-pj15-md-5">
      <div class="item-img">
        <img src="${val.srcimg}" alt="" />
      </div> 
      <div class="item-content">
        <div class="item-mainName">
          <a href="">${val.mainName}</a>
        </div> 
        <div class="item-subName">
          <p>${val.subName}</p>
        </div> 
      </div>
      <div class="item-properties">
        <span class="${val.propArt || "notActive"}">ART</span>
        <span class="${val.propClassic || "notActive"}">CLASSIC</span>
        <span class="${val.propDesign || "notActive"}">DESIGN</span>
        <span class="${val.propPhotography || "notActive"}">PHOTOGRAPHY</span>
      </div>
    </div>`
    ).appendTo(".row-theBlog");
  })
}
//====================theBlog====================

//====================customers-saying====================
$(function () {
  $("#customers-saying").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autopalyTimeout: 2000,
  });

});
//====================customers-saying====================



//search products

$(document).ready(function () {
  const products = [
    {
      "id": 1,
      "srcimg": "dist/img/project-bestsellers-6.png",
      "name": "Fixair Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 120.00,
      "salePrice": 110.00,
      "notsalePrice": 0,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 2,
      "srcimg": "dist/img/project-products-tab-2.png",
      "name": "Hot Com Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 150.00,
      "salePrice": 125.00,
      "notsalePrice": 0,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 3,
      "srcimg": "dist/img/project-latest-product-8.png",
      "name": "Hotex Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 69.00,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 4,
      "srcimg": "dist/img/project-products-tab-4.png",
      "name": "Gold Diamond Chain",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 69.00,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 5,
      "srcimg": "dist/img/project-bestsellers-5.png",
      "name": "Lexiwarm Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 35.00,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 6,
      "srcimg": "dist/img/project-products-tab-6.png",
      "name": "Keydex Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 55.00,
      "salePrice": 49.00,
      "notsalePrice": 0,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 7,
      "srcimg": "dist/img/project-latest-product-5.png",
      "name": "Dentotam Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 20.00,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 8,
      "srcimg": "dist/img/project-bestsellers-4.png",
      "name": "Lexizimin Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 89.00,
      "starNumber": 0,
      "category": ["p-tabs"],
    },
    {
      "id": 9,
      "srcimg": "dist/img/project-latest-product-1.png",
      "name": "Black Fashion Zapda",
      "propNew": "new",
      "propHot": "hot",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 20.00,
      "salePrice": 10.00,
      "notsalePrice": 0,
      "starNumber": 3,
      "category": ["featured"],
    },
    {
      "id": 10,
      "srcimg": "dist/img/project-latest-product-2.png",
      "name": "Coneco Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 20.00,
      "starNumber": 0,
      "category": ["featured"],
    },
    {
      "id": 11,
      "srcimg": "dist/img/project-latest-product-3.png",
      "name": "Daltex Product Example",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 25.00,
      "salePrice": 20.00,
      "notsalePrice": 0,
      "starNumber": 5,
      "category": ["featured"],
    },
    {
      "id": 12,
      "srcimg": "dist/img/project-latest-product-4.png",
      "name": "Dentoex Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 49.00,
      "salePrice": 40.00,
      "notsalePrice": 0,
      "starNumber": 0,
      "category": ["featured"],
    },
    {
      "id": 13,
      "srcimg": "dist/img/project-latest-product-6.png",
      "name": "Donkix Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 80.00,
      "salePrice": 60.00,
      "notsalePrice": 0,
      "starNumber": 0,
      "category": ["featured"],
    },
    {
      "id": 14,
      "srcimg": "dist/img/project-latest-product-7.png",
      "name": "Faxtex Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 99.00,
      "salePrice": 90.00,
      "notsalePrice": 0,
      "starNumber": 0,
      "category": ["featured"],
    },
    {
      "id": 15,
      "srcimg": "dist/img/project-bestsellers-1.png",
      "name": "Irene Royal Product",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 60,
      "starNumber": 0,
      "category": ["newest"],
    },
    {
      "id": 16,
      "srcimg": "dist/img/project-bestsellers-2.png",
      "name": "Product Example",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 20.00,
      "starNumber": 0,
      "category": ["newest"],
    },
    {
      "id": 17,
      "srcimg": "dist/img/project-bestsellers-3.png",
      "name": "Newity Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 80.00,
      "starNumber": 0,
      "category": ["newest"],
    },
    {
      "id": 18,
      "srcimg": "dist/img/project-bestsellers-5.png",
      "name": "Lexiwarm Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "",
      "sale": false,
      "originalPrice": 0,
      "salePrice": 0,
      "notsalePrice": 35.00,
      "starNumber": 0,
      "category": ["newest"],
    },
    {
      "id": 19,
      "srcimg": "dist/img/project-bestsellers-7.png",
      "name": "Dentoex Product Sample",
      "propNew": "",
      "propHot": "",
      "propSale": "sale",
      "sale": true,
      "originalPrice": 49.00,
      "salePrice": 40.00,
      "notsalePrice": 0,
      "starNumber": 0,
      "category": ["newest"],
    },
  ];
  
  //------- search products -------
  $(".search-products").keyup(function (e) { 
    //in ra ki tu ma nguoi dung nhap vao
    console.log(e.target.value); // cach 1
    
    // console.log($("search-input").val()); //cach 2
    const filterProducts = products.filter((val) => {
      return val.name.toLowerCase().includes(e.target.value.toLowerCase())
      // toLowerCase() de dua tat ca ki tu ve chu thuong, 
      // khong phan biet hoa thuong
    })
    .map(val => {
      const newName = val.name
      .split(e.target.value)
      .join(`<span style="color: #06bec7">${e.target.value}</span>`);
      return {...val, name: newName};
    })
    
    renderSearchProducts(filterProducts);
    if (e.target.value === "") {
      $(".dropdown-search").empty();
    }
    
  });
  //------- search products -------
});
function removeSearchProducts(list) {
  $(".dropdown-search").empty();

  list.map(val => {
    $(`
    <ul>
      <li>${val.name}</li>
    </ul>
    `).appendTo(".dropdown-search");
  })

}

function renderSearchProducts(list) {
  $(".dropdown-search").empty();
  
  
  list.map(val => {
    $(`
    <ul>
      <li class="flex">
        <div class="search-img">
            <img src="${val.srcimg}" alt="" />
        </div> 
        <div class="search-content">
          <div class="search-name-product">
            <a href="">${val.name}</a>
          </div> 
          <div class="search-price">
            <span class="original-price">${renderOriginalPrice(list, val.sale, val.id)}</span>
            <span class="sale-price">${renderSalePrice(list, val.sale, val.id)}</span>
            <span class="not-sale-price">${renderNotsalePrice(list, val.sale, val.id)}</span>
          </div>
        </div>
      </li>
    </ul>
    `).appendTo(".dropdown-search");
  })

}
// $(window).click(function (e) { 
//   e.preventDefault();
//   $(".dropdown-search").empty();
// })
// $(".dropdown-search").click(function (e) { 
//   e.preventDefault();
//   e.stopPropagation();
//   console.log("hejkajd");
// })
