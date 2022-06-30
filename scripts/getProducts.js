/*const Http = new XMLHttpRequest();
const url='https://api.demo.reja.ai/v1/productdelivery/list';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}*/

let username = "test@reja.ai";
let password = "demopassword";


fetch("https://api.demo.reja.ai/v1/productdelivery/list", {
  method: "GET",
  mode:'no-cors',
  headers: new Headers({'Authorization': 'Basic ' + btoa('username:password')})
})
  .then((response) => response.json())
  .then((json) => console.log(json));
