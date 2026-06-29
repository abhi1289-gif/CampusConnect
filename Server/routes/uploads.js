const express = require("express");
const multer = require("multer");
const db = require("../config/db");
const router = express.Router();

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }

});

const upload = multer({

    storage,
    fileFilter: (req, file, cb) => {
        if(file.mimetype === "application/pdf"){
            cb(null, true);
        }
        else{
            cb(new Error("Only PDF files are allowed"));
        }

    }

});

router.post("/", upload.single("assignment"), (req, res) => {

    const { branch, year, subject, uploadedBy } = req.body;
    const sql = `
        INSERT INTO assignments
        (branch, year, subject, file_name, original_file_name, uploaded_by)
        VALUES (?, ?, ?, ?, ?, ?)
        `;

    db.query(
        sql,
        [
            branch,
            year,
            subject,
            req.file.filename,
            req.file.originalname,
            uploadedBy
        ],
        (err, result) => {

            if(err){
                console.log(err);
                return res.status(500).json({
                    message: "Database Error"
                });
            }

            res.json({
                message: "File Uploaded Successfully"
            });
        }
    );
});

module.exports = router;