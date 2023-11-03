const express = require("express");
const app = express();
const port = process.env.PORT || 8000; // Port server

app.use(express.static("src"));

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
