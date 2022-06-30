
const submit = document.querySelector("#submit");
const login_form = document.querySelector("#login_form");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const formData = new FormData(login_form);
  const values = [...formData.entries()];

  console.log(values);

  fetch("https://api.demo.reja.ai/auth", {
    method: "POST",
    mode: "no-cors",
    body: formData,
  }).then((response) => {
    console.log(response.text);
    window.location.replace("./pages/dashboard.html")
    getProducts();
  });
});
function getProducts(){
  
}
