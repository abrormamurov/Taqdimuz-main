const express = require("express");
const path = require("path");
const app = express();

// Statik fayllarni yetkazib berish
app.use(express.static(path.join(__dirname, "build")));

// Barcha yo'llarni index.html ga yo'naltirish
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Server porti
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server ${port}-portda ishlamoqda...`);
});
console.log("Server started...");
console.log(__dirname);
