import axios from 'axios'


    const apiBaseUrl =  "http://localhost:5000"
    function getProducts() {
        return axios
          .get(
              `${apiBaseUrl}/products`,
              {
                  headers:{
                      'Accept': 'application/json'
                  }
              }
          )
          .then((response) => response.data);
      }
export {
    getProducts
}