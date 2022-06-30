const getProducts = () => {
  // get token from localstorage
  const token = window.localStorage.getItem("token");
  const products_table = document.getElementsByTagName("table")[0];
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  fetch(
    "https://cors.eu.org/https://api.demo.reja.ai/v1/product/list?business_id=253fc2e6-f4e3-454b-a7a5-d7144ce2758c",
    options
  )
    .then((response) => response.json())
    .then((response) => JSON.parse(JSON.stringify(response)))
    .then((data) => {
      products_table.innerHTML = data.map((item) => {
        return`
        <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.units_available}</td>
        </tr>
        
        `
      }).join("");
    })

    .catch((err) => console.error(err));
};
getProducts();

const getSummary = () => {
  // get token from localstorage
  const token = window.localStorage.getItem("token");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  fetch(
    "https://cors.eu.org/https://api.demo.reja.ai/v1/data/summary/?business_id=253fc2e6-f4e3-454b-a7a5-d7144ce2758c",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
getSummary();

const mapData = (data) => {
  console.log(data);
};
