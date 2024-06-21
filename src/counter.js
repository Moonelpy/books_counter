const express = require("express");
const router = express.Router();
const redis = require('redis');

const REDIS_URL = process.env.REDIS_URL || "localhost"
const client = redis.createClient({
    url: REDIS_URL
  });

    (async () => {
        await client.connect();
    })();

// Получение счётчика книги
router.get("/:bookId", async (req, res) => {
    const bookId = req.params.bookId;
    try {
        const count = await client.get(bookId);
        res.json({ count: count });
    } catch (error) {
        if (error)
            res.json({ error: error });
    }
});

// Увеличение счётчика книги
router.post("/:bookId/incr", async (req, res) => {
    const bookId = req.params.bookId;
    try {
        const count = await client.incr(bookId);
        res.json({ success: true, count: count });
    } catch (error) {
        if (error)
            res.json({ success: false, error: error });
    }
});

module.exports = router;
