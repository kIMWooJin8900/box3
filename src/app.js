import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import mongoose from "mongoose";
import bread from "./models/bread";
import globalRouter from "./router/globalRouter";


const PORT = process.env.PORT;
const app = express();

app.use(morgan(`dev`));
app.set("view engine", "pug");

mongoose.connect(`mongodb://4leaf:fourleaf0309@210.114.1.127:27017/admin`, {
    dbName: `KWJ_PRA`,
    useNewUrlParser: true,
    useCreateIndex: true,
},
(error) => {
    if (error) {
        console.log("DB 연결 실패");
    } else {
        console.log("BD에 연결성공");
    }
});


app.get("/", async(req, res) => {
    console.log("사용자가 호출했음");

    const result = await bread.find({},{});

    return res.render("screens/home", { bread: result });
});

app.get("/bread", async(req, res) => {
    const result = await bread.find({}, {});

    res.render("/screens/bread", { bread: result });
});


app.get("/", globalRouter);

app.get("/bread", globalRouter);

app.listen(PORT, () => {
    console.log(`${PORT} 서버 시작임`)
})