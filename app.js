const express = require("express");
const bodyParser = require("body-parser");
const blogRoute = require("./routes/blog");
const passport = require('passport');
const { mongodbConnection } = require("./database/db");
const appController = require("./controller/appController");

const app = express();
const PORT = 4040;

mongodbConnection();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/blog", passport.authenticate("jwt", { session: false }), blogRoute);

app.get("/", (req, res) => {
  res.status(200).send("welcome to blog testing");
});

app.get("/bloglist", appController.getBlogList);
app.get("/authorname/:authorname", appController.getBlogByAuthor);
app.get("/title/:title", appController.getBlogByTitle);
app.get("/tags/:tags", appController.getBlogByTags),
  
  // error handler
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("Something broke!");
  });

// server address
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
