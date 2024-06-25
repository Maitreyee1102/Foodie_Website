import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const foodRouter = express.Router();

// Recreate __dirname in ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the absolute path to the uploads directory
const uploadsDir = path.join(__dirname, "../uploads");

// Ensure the uploads directory exists
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Image storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir); // Use resolved absolute path
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage }); // Upload middleware

foodRouter.post("/add", upload.single("image"), (req, res) => {
    try {
        console.log(req.body);
        console.log(req.file);
        addFood(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while processing the file.");
    }
});
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)

export default foodRouter;
