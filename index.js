const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// GET route
app.get("/", (req, res) => {
  res.send("API is running 🚀. Use POST /bfhl with JSON body to test.");
});

// POST route
app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    let even_numbers = [], odd_numbers = [], alphabets = [], special_characters = [];
    let sum = 0, concat_string = "";

    data.forEach((item) => {
      if (!isNaN(item)) {
        let num = parseInt(item);
        num % 2 === 0 ? even_numbers.push(item.toString()) : odd_numbers.push(item.toString());
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        concat_string += item;
      } else {
        special_characters.push(item);
      }
    });

    concat_string = concat_string
      .split("")
      .reverse()
      .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join("");

    res.json({
      is_success: true,
      user_id: "ragha_ddmmyyyy",   // put your details
      email: "ragha@vitstudent.ac.in",
      roll_number: "YOUR_ROLL_NO",
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string,
    });
  } catch (err) {
    res.status(500).json({ is_success: false, message: err.message });
  }
});

// 👉 Instead of app.listen, export the app for Vercel
module.exports = app;
