require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

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

  const imageData = await downloadImage(response.data.data[0].url, "images/img.png");

  res.sendStatus(200);
})

app.listen(4000, (err) => {
  if (err) console.log(err);

  console.log("Listening on port 4000");
})


