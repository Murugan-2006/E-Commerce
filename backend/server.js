import express from "express";
import cors from "cors";

import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
//import cartRouter from "./routes/cartRoute.js";
// Load environment variables


// App config
const app = express();
const port = process.env.PORT || 4000;

// Connect services
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
//app.use("/api/cart", cartRouter);


app.get("/", (req, res) => {
  res.send("This is demo page Murugan Software Engineer");
});

// Start server
app.listen(port, () =>
  console.log(`Server running successfully on port ${port}`)
);
