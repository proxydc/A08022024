const express = require("express");
const dbRoutes = require("./src/database/routes");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin:
      app.get("env") == "development"
        ? "http://localhost:8080"
        : "https://mysitevue.onrender.com",//https://resonant-mandazi-c5b84b.netlify.app",
  })
);

app.get("/", (req, res) => {
  res.send("Hello Proxiad Backend!" + " Environment: " + app.get("env"));
});

app.use("/api/v1/database", dbRoutes);

app.listen(PORT, function check(err) {
  console.log(app.get("env"));
  if (err) console.log("error");
  else console.log("started on port " + PORT);
});
