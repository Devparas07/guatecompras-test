const axios = require("axios");
const fs = require("fs");

async function downloadFile() {
  try {
    console.log("Downloading...");

    const response = await axios({
      method: "GET",
      url: "https://ocds.guatecompras.gt/file/csv/2026/6",
      responseType: "stream",
      timeout: 120000
    });

    const writer = fs.createWriteStream("guatecompras.zip");

    response.data.pipe(writer);

    writer.on("finish", () => {
      console.log("Download Complete");
    });

    writer.on("error", (err) => {
      console.log(err);
    });

  } catch (err) {
    console.log("ERROR");
    console.log(err.message);
  }
}

downloadFile();