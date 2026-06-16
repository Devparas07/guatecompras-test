const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const response = await axios.get(
      "https://ocds.guatecompras.gt/file/csv/2026/6",
      {
        maxRedirects: 10,
        timeout: 60000
      }
    );

    res.status(200).json({
      success: true,
      status: response.status
    });

  } catch (err) {

    res.status(200).json({
      success: false,
      error: err.response?.status || err.message
    });
  }
};