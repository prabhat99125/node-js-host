const dotenv = require("dotenv");
dotenv.config()
const express = require("express")
const app =express();
const os = require("os")

const port =  process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("hey hoy are deploy you coed in rendar")
});
console.log(os.homedir())
app.listen(port, () => console.log(`your sarve start in port no ${port}`))


