module.exports = (io) => {

    const express = require("express");
    const db = require("../config/db");

    const router = express.Router();

    router.post("/send", (req, res) => {

        const { branch, year, subject, sender, message } = req.body;

        const sql = `
            INSERT INTO messages
            (branch, year, subject, sender, message)
            VALUES (?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [branch, year, subject, sender, message],
            (err, result) => {

                if (err) {
                    console.log(err);

                    return res.status(500).json({
                        message: "Database Error"
                    });
                }

                io.emit("receive_message", {
                    branch,
                    year,
                    subject,
                    sender,
                    message
                });

                res.json({
                    message: "Message Sent"
                });

            }
        );

    });

    router.get("/:branch/:year/:subject", (req, res) => {

        const { branch, year, subject } = req.params;

        const sql = `
            SELECT *
            FROM messages
            WHERE branch = ?
            AND year = ?
            AND subject = ?
            ORDER BY sent_at ASC
        `;

        db.query(sql, [branch, year, subject], (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    message: "Database Error"
                });
            }

            res.json(result);

        });

    });

    return router;

};
