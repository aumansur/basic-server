"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parser
app.use(express_1.default.json());
app.use(express_1.default.text());
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/courses", courseRouter);
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "course created successfully",
        data: course,
    });
});
app.use("/api/v1/users", userRouter);
userRouter.get("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "user created successfully",
        data: user,
    });
});
app.get("/", logger, (req, res) => {
    res.send("Hello Developer mansur");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: "Data received successfully",
        body: req.body,
    });
});
exports.default = app;
