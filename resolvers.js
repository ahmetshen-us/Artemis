const axios = require('axios');

const resolvers = {
Query: {
        getAnActivity: () => {
        return new Promise((resolve, object) => {
        axios.get('https://www.boredapi.com/api/activity?type=recreational')
          .then(response => {
            console.log(response.data)

            resolve(response.data)

          })
          .catch(error => {
            console.log(error);
          });
        	
        })


        }
}
}


module.exports = {
resolvers
}