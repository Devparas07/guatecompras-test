const axios = require("axios");

async function run() {
  try {
    console.log("Testing...");

    const response = await axios.get(
      "https://ocds.guatecompras.gt/file/csv/2026/6",
      {
        timeout: 60000,
        maxRedirects: 10
      }
    );

    console.log("SUCCESS");
    console.log(response.status);

  } catch (err) {

    console.log("ERROR");

    if (err.response) {
      console.log(err.response.status);
    } else {
      console.log(err.message);
    }
  }
}

run();