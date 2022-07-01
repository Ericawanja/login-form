/************Data summary*********************** */

const getSummary = async () => {
  // get token from localstorage
  const token = window.localStorage.getItem("token");
  const summary_container = document.getElementById("data_summary");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await fetch(
    "https://cors.eu.org/https://api.demo.reja.ai/v1/data/summary/?business_id=253fc2e6-f4e3-454b-a7a5-d7144ce2758c",
    options
  )
    .then((response) => response.json())

    .then((response) => JSON.parse(JSON.stringify(response)))
    .then((data) => {
      summary_container.innerHTML = `
      <div class="data_customer_details">
        <span><i class="bi bi-people"></i></span>
        <div id='value' class="value">${
          data.all_time.customers == null ? 0 : data.all_time.customers
        }</div>
        <div class="title">Customers</div>
    </div>
    <div class="data_transaction_details">
        <span><i class="bi bi-activity"></i></span>
        <div id='value' class="value">${
          data.all_time.transactions > 1000
            ? data.all_time.transactions / 1000 + "k"
            : data.all_time.transactions
        }</div>
        <div class="title">Transactions</div>
    </div>
    <div class="data_sales_details">
        <span><i class="bi bi-receipt"></i></span>
        <div id='value' class="value">${
          data.all_time.sales > 1000
            ? data.all_time.sales / 1000 + "k"
            : data.all_time.sales
        }</div>
        <div class="title">Sales</div>
    </div>
      `;
    })
    .catch((err) => console.error(err));
};

getSummary();


//****************Products List**************** */

const getProducts = async () => {
  // get token from localstorage
  const token = window.localStorage.getItem("token");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await fetch(
    "https://cors.eu.org/https://api.demo.reja.ai/v1/product/list?business_id=253fc2e6-f4e3-454b-a7a5-d7144ce2758c",
    options
  )
    .then((response) => response.json())
    .then((response) => JSON.parse(JSON.stringify(response)))
    .then((data) => {
      showData(data);
    })

    .catch((err) => console.error(err));
};

/*const some_data = (data) => {
  const products_table = document.getElementsByTagName("tbody")[0];
  const show_all = document.getElementById("showAll");
  const data_list = [];
  if (show_all.style.display == "block") {
    console.log(show_all.style.display)
    for (let i = 0; i < 10; i++) {
      data_list.push(data[i]);
    }
    products_table.innerHTML = data_list
      .map((item) => {
        return `
            <tr>
             <td>${item.name}</td>
             <td>${item.price}</td>
              <td>${item.units_available}</td>
         </tr>`
    })
      .join("");
      show_all.style.display= 'block'
  } else {
    console.log(show_all.style.display + 'd')
    alert('ss')
    products_table.innerHTML = data
      .map((item) => {
        return `
    <tr>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.units_available}</td>
    </tr>
    
    `
      })
      .join("");
  }
  console.log(data_list);
};*/
const showData = (products) => {
  const products_table = document.getElementsByTagName("tbody")[0];
  products_table.innerHTML = products
    .map((item) => {
      return `
    <tr>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.units_available}</td>
    </tr>
    
    `;
    })
    .join("");
};

getProducts();




