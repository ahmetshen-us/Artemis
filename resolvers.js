const axios = require('axios');


const resolvers = {

Query: {
        getAnActivity: () => {
        
        return new Promise((resolve, object) => {
console.log("resolvers")

        axios.get('https://www.boredapi.com/api/activity?type=music')
          .then(response => {
            console.log(response.data)

            resolve(response.data)

          })
          .catch(error => {
            console.log(error);
          });

        })


        },
	getByType: (root, { t }) => {
        
        return new Promise((resolve, object) => {
console.log("resolvers")

        axios.get('https://www.boredapi.com/api/activity?type='+t)
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