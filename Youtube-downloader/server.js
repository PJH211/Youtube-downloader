const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/download", (req, res) => {
    const url = req.body.url;

    if (!url) return res.send("No URL");

    const file = "video.mp4";

    const command = `yt-dlp -f mp4 -o "${file}" "${url}"`;

    exec(command, (err) => {
        if (err) {
            console.log(err);
            return res.send("Download error");
        }

        res.download(file);
    });
});

app.listen(3000, () => {
    console.log("Server running...");
});