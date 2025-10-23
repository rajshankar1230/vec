const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// 💡 REQUIRED FOR API ACCESS: Middleware to allow cross-origin requests
const cors = require("cors"); 
const Project = require("./models/project.js");
const Nproject = require("./models/Nproject.js");

// --- Configuration for Cloud Deployment ---
const PORT = process.env.PORT || 8080;
// Use the MongoDB URI from environment variables (MANDATORY for deployment)
const DB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/project";

const app = express();

// --- Middleware ---
// 1. CORS Configuration: Allows all origins (*) to access the API endpoints
// For production, replace '*' with your specific front-end domain (e.g., 'https://myfrontend.com')
app.use(cors()); 
// 2. JSON Body Parser: Required to handle incoming JSON payloads 
app.use(express.json());

// 3. EJS Setup (for your /projects and /nprojects views)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// --- MongoDB Connection ---
async function main() {
    try {
        await mongoose.connect(DB_URI);
        console.log("Connection successful to MongoDB Atlas");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        // Exit process if DB connection fails critically on startup
        process.exit(1); 
    }
}

// Execute connection and start server
main();

// ------------------------------------------------------------------
// --- EJS VIEW ROUTES (For viewing in browser - unchanged logic) ---
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
// --- API ENDPOINTS (The core of the data API) ---
// ------------------------------------------------------------------

/**
 * API for Indian Projects: Retrieves all projects and returns JSON.
 * URL: /api/projects
 */
app.get("/api/projects", async (req, res) => {
    try {
        const projects = await Project.find().sort({ SN: 1 });
        // Set Cache-Control header for external clients
        res.set('Cache-Control', 'public, max-age=300'); 
        res.json(projects);
    } catch (e) {
        console.error("Error fetching Indian Projects:", e);
        res.status(500).json({ error: "Failed to fetch Indian projects" });
    }
});

/**
 * API for International Projects: Retrieves all Nprojects and returns JSON.
 * URL: /api/nprojects
 */
app.get("/api/nprojects", async (req, res) => {
    try {
        const nprojects = await Nproject.find().sort({ SN: 1 });
        // Set Cache-Control header for external clients
        res.set('Cache-Control', 'public, max-age=300'); 
        res.json(nprojects);
    } catch (e) {
        console.error("Error fetching International Projects:", e);
        res.status(500).json({ error: "Failed to fetch international projects" });
    }
});

// ------------------------------------------------------------------
// --- Server Start ---
// ------------------------------------------------------------------

app.get("/", (req, res) => {
    res.send("Project API Root is operational. Please visit **<a href='/api/projects'>/api/projects</a>** or **<a href='/api/nprojects'>/api/nprojects</a>** for JSON data.");
});

// Generic 404 handler for unknown routes
app.use((req, res) => {
    res.status(404).send("Error 404: API endpoint not found.");
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}. Access API at /api/projects`);
});
