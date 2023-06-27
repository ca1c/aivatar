const axios = require('axios');

(async function run() {
    await axios.post('http://localhost:4000/image', {
        imgType: "realistic", 
        adjective: "lamp", 
        noun: "monster"
    });
}());