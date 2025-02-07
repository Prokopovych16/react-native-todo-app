'use-strict';


import { createServer } from "./create-server.js";

const SERVER_PORT = 5700;

createServer().listen(SERVER_PORT, () => {
  console.log(`Server is running on localhost: ${SERVER_PORT}`);
});