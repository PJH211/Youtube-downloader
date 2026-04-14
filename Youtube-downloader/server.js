const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/download", (req, res) => {
    res.send("Server ทำงานแล้ว แต่ยังไม่เชื่อม yt-dlp");
});

app.listen(3000, () => {
    console.log("Server running...");
});