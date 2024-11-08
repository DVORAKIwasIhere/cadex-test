import express, { Request, Response, NextFunction  } from "express";
import taskRoutes from "./routes/contacts";
var cors = require('cors')



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/contacts", taskRoutes);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello, TypeScript Express!");
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});
