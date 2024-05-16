import express, { NextFunction, Request, Response, Router } from "express";
const app = express();
const port = 3000;

// parser
app.use(express.json());
app.use(express.text());

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

const userRouter = express.Router();
const courseRouter = express.Router();
app.use("/api/v1/courses", courseRouter);
courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "course created successfully",
    data: course,
  });
});
app.use("/api/v1/users", userRouter);
userRouter.get("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "user created successfully",
    data: user,
  });
});

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello Developer mansur");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Data received successfully",
    body: req.body,
  });
});

export default app;
