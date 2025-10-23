const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Project = require("./models/project.js");
const Nproject = require("./models/Nproject.js");

// --- Configuration for Cloud Deployment ---
// 1. Use the port provided by the hosting environment or default to 8080 locally
const PORT = process.env.PORT || 8080;
// 2. Use the MongoDB URI from environment variables (MANDATORY for deployment)
const DB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/project";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
    .then(() => {
        console.log("connection successful to MongoDB Atlas");
    })
    .catch((err) => console.log("MongoDB connection error:", err));

async function main() {
    // Connects using the environment variable URI
    await mongoose.connect(DB_URI);
}

// ------------------------------------------------------------------
// --- EJS VIEW ROUTES (For viewing in browser) ---
// ------------------------------------------------------------------

app.get("/projects", async (req, res) => {
    let projects = await Project.find();
    res.render("projects", { projects });
});

app.get("/nprojects", async (req, res) => {
    let nprojects = await Nproject.find();
    res.render("nprojects", { nprojects });
});

// ------------------------------------------------------------------
// --- API ENDPOINTS (For use by other websites) ---
// ------------------------------------------------------------------

// API for Indian Projects
app.get("/api/projects", async (req, res) => {
    try {
        const projects = await Project.find().sort({ SN: 1 });
        // Use res.json() to return pure JSON data
        res.json(projects);
    } catch (e) {
        console.error("Error fetching Indian Projects:", e);
        res.status(500).json({ error: "Failed to fetch Indian projects" });
    }
});

// API for International Projects
app.get("/api/nprojects", async (req, res) => {
    try {
        const nprojects = await Nproject.find().sort({ SN: 1 });
        // Use res.json() to return pure JSON data
        res.json(nprojects);
    } catch (e) {
        console.error("Error fetching International Projects:", e);
        res.status(500).json({ error: "Failed to fetch international projects" });
    }
});

app.get("/", (req, res) => {
    res.send("Project API Root is operational. Visit /api/projects or /api/nprojects");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
