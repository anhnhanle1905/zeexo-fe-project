$(document).ready(function () {
  const products = [
    {
      "name": "hjaha",
    },
    {
      "name": "vsdvaha",
    },
    {
      "name": "asvjdfaha",
    },
    {
      "name": "jfghfghaha",
    },
    {
      "name": "lozaha",
    },
    {
      "name": "qqqqbbvy",
    },
    {
      "name": "oooiugfg",
    },
    {
      "name": "papsdd",
    },
  ];

  $("search-input").keyup(function (e) { 
    //in ra ki tu ma nguoi dung nhap vao
    console.log(e.target.value); // cach 1
    // console.log($("search-input").val()); //cach 2
    const filterProducts = products.filter(val => {
      val.name.toLowerCase().includes(e.target.value.toLowerCase())
      // toLowerCase() de dua tat ca ki tu ve chu thuong, 
      // khong phan biet hoa thuong
    })
    .map(val => {
      const newName = val.name
      .split(e.target.value)
      .join(`<span style="color:red">${e.target.value}</span>`);
      return {...val, name: newName};
    })
    renderProducts(filterProducts);
  });
});


//tu viet ham renderProducts