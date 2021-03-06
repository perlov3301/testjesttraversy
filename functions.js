const axios = require('axios');
const functions = {
    add: (num1, num2) => {return num1 + num2 },
    isNull: () => null,
    isUndefined: () => undefined,
    checkValue: (x) => x,
    createUser: () => {
        const user = { first: "Alex" };
        user['last'] = "Perlov";
        return user;
    },
    fetchUser: () => {
        return axios
          .get("https://raw.githubusercontent.com/perlov3301/getxmljson/master/wikijson.json")
          .then((response) => { return response.data; })
          .catch((error) => { return "error";  })
    },
};

module.exports = functions;