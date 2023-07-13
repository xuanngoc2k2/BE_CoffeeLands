import express from "express";
import bodyParser from "body-parser";
import initWebRouter from "./route/web.js";
import viewEngine from './config/viewEngine.js'
import connectDB from './config/connectDB.js'

require('dotenv').config();

let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRouter(app);

connectDB();

let port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}cls`);
})


