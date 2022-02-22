import express = require("express")
import {Application, Request, Response} from "express";
import {User} from "./types/User";
import {LoginQueryParam} from "./types/LoginQueryParam";

const app: Application = express();

app.get("/", (req:Request, res: Response ) => {
    res.send({
        status:200,
        message:"Success"
    })
})


app.get("/user", (req:Request, res:Response) => {
    const user: User = {
        id: 1,
        username:"Chorba",
        password: "4444"
    }
    res.send(user)
})


app.get("/login", (req:Request, res:Response) => {
    const lqueryParam: LoginQueryParam = req.query;
    if (!lqueryParam.username) {
        res.send({
            status:404,
            message:"No username"
        })
    }
    if (!lqueryParam.password) {
        res.send({
            status: 404,
            message: "Username or Password is wrong"
        })
    }
    res.send({
        status: 200,
        message: "Logged in"
    })
})

//double press shift for search
app.listen(8081, () => {
    console.log("Connected")
})