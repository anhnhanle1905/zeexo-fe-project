//tuong tac voi CSS, dung .style.thuoc tinh css
//them class: .classList.add("ten class")
//them class: .classList.remove("ten class")
//bat su kien 


// document.getElementsByClassName("baby")[0].style.color = "red"
// document.getElementsByClassName("baby")[1].classList.add("format-text")
// document.getElementsByClassName("baby")[1].classList.remove("cute")

// document.getElementsByClassName("clickme")[0].addEventListener("click", () => {
//   console.log("hello")
// })

//lay chieu cao tu o input



// document.getElementsByClassName("clickme")[0].addEventListener("click" , () => {
//   //lay chieu dai
//   let width = document.getElementById("yourwidth").value
  
//   //ghi chieu dai
//   // document.querySelectorAll(".hello h2")[0].textContent = `Chieu dai cua ban la: ${width}cm`
//   document.querySelectorAll(".hello h2")[0].innerHTML = `<p style="color: red">Chieu dai cua ban la: ${width}cm</p>`

  
// })

document.querySelectorAll("button")[0].addEventListener("click",() =>{
  let pass = document.querySelectorAll("input")[0].value
  document.getElementsByClassName("password")[0].textContent = `Password cua ban la: ${pass}`
})



//bt 
/*

document.querySelectorAll("button")[0].addEventListener("click", () => {
  let name = document.querySelectorAll("#username")[0].value
  let pass = document.querySelectorAll("#password")[0].value
  
  if (name.length === 0 && pass.length === 0) 
    return document.querySelectorAll(".error")[0].textContent = `User name và Password không được để trống`
  if(name.length === 0) 
    return document.querySelectorAll(".error")[0].textContent = `User name không được để trống`
  if(pass.length === 0)
    return document.querySelectorAll(".error")[0].textContent = `Password không được để trống`
  if (name.length <= 6) 
    return document.querySelectorAll(".error")[0].textContent = `User name phải nhiều hơn 6 kí tự`
  if (pass.length < 6 || pass.length > 15)
    return document.querySelectorAll(".error")[0].textContent = `Password phải có độ dài từ 6 kí tự đến 15 kí tự`

  let regex = /[0-9a-zA-Z]/g
  let str = pass.match(regex)
  if (str.length !== pass.length) {
    return document.querySelectorAll(".error")[0].textContent = `Password không được chứa kí tự đặc biệt`
  } 
  document.querySelectorAll(".error")[0].textContent = ``
  return alert("Sign in success!")
})
*/

