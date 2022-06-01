const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const items = ["Buy food", "Cook food","eat food"];
const workItems = [];
app.use(express.static("public"));

app.get("/", function(req, res) {
  const day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items });
});

app.get("/work", function(req, res) {
  res.render("list", { listTitle: "Work list", newListItems: workItems });
});


app.post("/", function(req, res) {
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.post("/work", function(req,res) {
  workItems.push(req.body.newItem);
  res.redirect("/work");
})

app.listen(3002, function() {
  console.log("server is running on port 3002");
});
