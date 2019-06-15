const axios = require('axios');


const resolvers = {

Query: {
        getAnActivity: (root, args) => {
        
        return new Promise((resolve, object) => {
var query ="";

for (var property in args) {
query+=property+"="+args[property]+"&"
}



        axios.get('https://www.boredapi.com/api/activity?'+query)
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