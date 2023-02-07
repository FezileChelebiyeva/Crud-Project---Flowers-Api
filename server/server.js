const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const { Schema } = mongoose;

const flowersSchema = new Schema(
  {
    image: String,
    name: String,
    price: Number,
  },
  { timestamps: true }
);
const Flowers = mongoose.model("flowers", flowersSchema);

app.get("/flowers", (req, res) => {
  Flowers.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.get("/flowers/:id", (req, res) => {
  const { id } = req.params;
  Flowers.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send(doc);
      } else {
        res.status(404).json({ message: err });
      }
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.delete("/flowers/:id", (req, res) => {
  const { id } = req.params;
  Flowers.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(404).json({ message: "deleted" });
    } else {
      res.status(404).json({ message: err });
    }
  });
});

app.post("/flowers", (req, res) => {
  let flower = new Flowers({
    image: req.body.image,
    name: req.body.name,
    price: req.body.price,
  });
  flower.save();
  res.status(200).json({ message: "added" });
});

const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.PASSWORD);

mongoose.connect(DB, (err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/flowers`);
    });
  }
});
