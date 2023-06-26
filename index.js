require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function run() {
    const response = await openai.createImage({
    prompt: "realistic dystopian robot couple",
    n: 1,
    size: "1024x1024",
    });

    console.log(response.data.data[0].url)
}

run();

