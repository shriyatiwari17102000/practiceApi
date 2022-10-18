const express = require("express");
const ClientSide = require("mongodb").ClientSide;
const app = express();
app.use(express.json());

let database;
app.get("/", (req, res) => {
  database
    .collection("")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

app.put("/api/", (req, res) => {
  database.collection("email-sections").updateOne({ _id: id }),
    { $set: req.body };
});

app.listen(8000, () => {
  ClientSide.connect(
    "mongodb://localhost:27017",
    { useNewUrlParser: true },
    (error, result) => {
      if (error) throw error;
      database = result.db("mongodbblog");
      console.log("Connection Successful");
    }
  );
});
