const express = require("express")
const morgan = require("morgan")
const giftExchangeRouter = require("./routes/gift-exchange")
const { NotFoundError } = require("./utils/errors")

const app = express();

app.use(morgan("tiny"))
app.use(express.json())
app.use("/gift-exchange", giftExchangeRouter)

app.get("/", async (req, res, next) => {
    res.status(200).json({ping: "pong"})
})

app.use( (req, res, next) => {
    return next(new NotFoundError())
})

/* Generic error handler - anything that is unhandled wil be handled here*/
app.use( (error, req, res, next) => {
    const status = error.status || 500
    const message = error.message
    return res.status(status).json({
        error: {message, status}
    })
})

module.exports = app