import register from "react-server-dom-webpack/node-register";
register();

import express from "express";
import { resolve } from "path";
import { renderToPipeableStream } from "react-server-dom-webpack/server";
import { Server } from "../react/Server";
import { readFileSync } from "fs";

const manifest = readFileSync(
  resolve(__dirname, "../../dist/client/react-client-manifest.json"),
  "utf8"
);
const moduleMap = JSON.parse(manifest);

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

app.get("/rsc", (req, res) => {
  // I'm not sure I'm sending
  // the right thing here
  const { pipe } = renderToPipeableStream(<Server />, moduleMap);
  setTimeout(() => {
    pipe(res);
  }, 500);
});

app.listen(3000, () => {
  console.log("Server up!");
});
