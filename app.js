const express = require("express")
const morgan = require("morgan")
const giftExchangeRouter = require("./routes/gift-exchange")

const app = express();

app.use(morgan("tiny"))
app.use(express.json())
app.use("/gift-exchange", giftExchangeRouter)

app.get("/", async (req, res, next) => {
    res.status(200).json({ping: "pong"})
})

module.exports = app