import axios from 'axios'


    const apiBaseUrl =  "http://localhost:5000"
    function getBanners() {
        return axios
          .get(
              `${apiBaseUrl}/banners`,
              {
                  headers:{
                      'Accept': 'application/json'
                  }
              }
          )
          .then((response) => response.data);
      }
      function getCategories() {
        return axios
          .get(
              `${apiBaseUrl}/categories`,
              {
                  headers:{
                      'Accept': 'application/json'
                  }
              }
          )
          .then((response) => response.data);
      }

export {
    getBanners,
    getCategories
}