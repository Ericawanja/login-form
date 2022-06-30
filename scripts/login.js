
/*const submit = document.querySelector("#submit");
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
    
  });
});*/


const submit = document.querySelector("#submit");
const login_form = document.querySelector("#login_form");

// username field
const username = document.querySelector("#name")

// password field
const password = document.querySelector("#password")

submit.addEventListener("click", (e) => {
  e.preventDefault();

	const options = {
  method: 'POST',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  body: new URLSearchParams({
  					grant_type: 'password', 
            username: username.value, 
            password: password.value})
};


fetch('https://cors.eu.org/https://api.demo.reja.ai/auth', options)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    
    // save token on local storage
    localStorage.setItem('token', data.access_token)
    
    // move to dashboard 
    window.location.replace("./pages/dashboard.html")
    
    
})
  //.catch(err => console.error(err));


  
/*   .then((response) => {
    console.log(response.text);
    window.location.replace("./pages/dashboard.html")
    
  }); */
});



