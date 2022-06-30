
  const getProducts = ()=>{
    // get token from localstorage
    const token = window.localStorage.getItem("token")
    
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    
    fetch('https://cors.eu.org/https://api.demo.reja.ai/v1/product/list?business_id=253fc2e6-f4e3-454b-a7a5-d7144ce2758c', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .then(data => {
        data.map(item=> console.log(item))
      })
      .catch(err => console.error(err));
    }
    getProducts()

    const getSummary =()=>{
      // get token from localstorage
      const token = window.localStorage.getItem("token")

      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      fetch('https://cors.eu.org/https://api.demo.reja.ai/v1/data/summary/?business_id=253fc2e6-f4e3-454b-a7a5-d7144ce2758c', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    }
    getSummary()

    const mapData = (data)=>{
      console.log(data)
    }