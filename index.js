require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');

const downloadImage = require('./downloadImg.js');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send("HELLO");
});

app.post('/image', async (req, res) => {
  const data = req.body;
  const {imgType, adjective, noun} = data;

  console.log(data);
  console.log(`${imgType} ${adjective} ${noun}`);

  const response = await openai.createImage({
    prompt: `${imgType} ${adjective} ${noun}`,
    n: 1,
    size: "256x256",
  });

  const fileName = new Date();

  await downloadImage(response.data.data[0].url, `images/0.png`);

  res.sendStatus(200);
});

app.get('/image/:imgId', async (req, res) => {
  const imgId = req.params.imgId;

  const fileData = await fs.readFile(`images/${imgId}.png`);

  res.send(fileData);
});

app.post('/user', (req, res) => {

});

app.listen(4000, (err) => {
  if (err) console.log(err);

  console.log("Listening on port 4000");
})


