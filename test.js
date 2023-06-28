const axios = require('axios');
const fs = require('fs');

(async function run() {
    await axios.post('http://localhost:4000/image', {
        imgType: "realistic", 
        adjective: "golden", 
        noun: "cat"
    });

    const response = await axios({
        url: 'http://localhost:4000/image/0',
        method: 'GET',
        responseType: 'stream',
    })

    console.log(response);

    response.data
        .pipe(fs.createWriteStream('new.png'))
        .on('error', reject)
        .once('close', () => resolve('new.png'))
}());