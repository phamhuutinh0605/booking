const express=require("express");
const {getAllAuth}=require("../controllers/auth.controllers")
const authRouter=express.Router();


authRouter.get("/auth",getAllAuth);
authRouter.get("/",);
authRouter.post("/",);
authRouter.put("/",);
authRouter.delete("/",);

module.exports={
    authRouter
}