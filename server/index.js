const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { rootRouter } = require("./routers");

const app = express();
app.use(express.json())
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

//connect mongoDB
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected");
})

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected");
})



app.use("/api/v1",rootRouter)

const port =process.env.PORT|| 8800;
connect();
app.listen(port, () => {
  console.log(`Connect to backend http://localhost:${port}/api/v1`);
});
