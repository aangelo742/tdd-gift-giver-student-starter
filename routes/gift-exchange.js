const express = require("express")
const router = express.Router()
const GiftExchange = require("../models/gift-exchange")

router.get("/", async (req, res, next) => {
    res.status(200).json()
})

router.post("/pairs", async (req, res, next) => {
    try {
        const pairs = await GiftExchange.pairs(req.body.names)
        res.status(200).json(pairs)
    } catch (err) {
        next(err)
    }
    
})

router.post("/traditional", async (req, res, next) => {
    try {
        const traditional = await GiftExchange.traditional(req.body.names)
        res.status(200).json(traditional)
    } catch (err) {
        next(err)
    }
})

module.exports = router