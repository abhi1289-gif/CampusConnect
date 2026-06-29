require("dotenv").config();

const http = require("http");
const { Server } = require("socket.io");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const db = require("./config/db");
const uploadRoute = require("./routes/uploads")(io);
const path = require("path");
const fs = require("fs");

const uploadDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const app = express();
const server = http.createServer(app);

const allowedOrigins = [
    "http://localhost:5173",
    process.env.CLIENT_URL
];

const io = new Server(server, {
    cors: {
        origin: allowedOrigins,
        methods: ["GET", "POST"],
        credentials: true
    }
});

const chatRoute = require("./routes/chat")(io);


app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/upload", uploadRoute);
app.use("/chat", chatRoute);

io.on("connection", (socket) => {

    console.log("User Connected:", socket.id);

    socket.on("disconnect", () => {

        console.log("User Disconnected:", socket.id);

    });

});

app.get("/", (req, res) => {
    res.send("CampusConnect Backend Running");
});

app.post("/register", async (req, res) => {

    const { name, email, studentId, password } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql =
        "INSERT INTO users(name,email,student_id,password) VALUES(?,?,?,?)";

        db.query(
            sql,
            [name, email, studentId, hashedPassword],
            (err, result) => {

                if (err) {
                    console.log(err);

                    return res.status(500).json({
                        message: "Registration Failed"
                    });
                }

                res.json({
                    message: "Registration Successful"
                });

            });

    }
    catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }

});


app.post("/login", (req, res) => {

    const { email, password } = req.body;

    console.log("Login Request:", email);

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, result) => {

        if (err) {
            console.log("SQL Error:", err);

            return res.status(500).json({
                message: "Database Error"
            });
        }

        console.log("Query Result:", result);

        if (result.length === 0) {
            return res.status(401).json({
                message: "User Not Found"
            });
        }

        try {

            const user = result[0];

            console.log("User:", user);

            const match = await bcrypt.compare(password, user.password);

            console.log("Password Match:", match);

            if (!match) {
                return res.status(401).json({
                    message: "Incorrect Password"
                });
            }

            res.json({
                message: "Login Successful",
                user: {
                    name: user.name,
                    email: user.email,
                    studentId: user.student_id
                }
            });

        } catch (e) {

            console.log("Login Error:", e);

            res.status(500).json({
                message: "Server Error"
            });

        }

    });

});

app.get("/assignments/:branch/:year/:subject", (req, res) => {

    const { branch, year, subject } = req.params;

    const sql = `
        SELECT *
        FROM assignments
        WHERE branch = ?
        AND year = ?
        AND subject = ?
        ORDER BY upload_date DESC
    `;

    db.query(sql, [branch, year, subject], (err, result) => {

        if(err){

            console.log(err);

            return res.status(500).json({
                message: "Database Error"
            });

        }

        res.json(result);

    });

});

app.use((req, res) => {
    res.status(404).json({
        message: "Route Not Found"
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});