import express from "express";
import router from "./router";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/", router);

app.listen(8081, () => console.log("Server is listening"));
app.on("listening", function () {
  console.log("Express server started on port %s at %s");
});
