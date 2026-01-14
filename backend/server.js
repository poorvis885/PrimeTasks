const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/taskRoutes"));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
