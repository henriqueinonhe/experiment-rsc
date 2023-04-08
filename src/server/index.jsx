import express from "express";
import { resolve } from "path";

const app = express();

app.use(express.static("dist"));

app.get("/", async (req, res) => {
  // We'll keep it simple for now
  // const { pipe } = renderToPipeableStream(<App />, {
  //   bootstrapScripts: ["./client/index.js"],
  //   onShellReady: () => {
  //     res.setHeader("content-type", "text/html");
  //     pipe(res);
  //   },
  // });

  res.sendFile(resolve(__dirname, "../../public/index.html"));
});

app.listen(3000, () => {
  console.log("Server up!");
});
