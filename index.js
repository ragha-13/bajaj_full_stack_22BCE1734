const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ GET route for testing in browser
app.get("/", (req, res) => {
  res.send("API is running 🚀. Use POST /bfhl with JSON body to test.");
});

// ✅ POST route for assignment
app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    // Input validation
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    let even_numbers = [];
    let odd_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;
    let concat_string = "";

    // Process input data
    data.forEach((item) => {
      if (!isNaN(item)) {
        // If it's a number
        let num = parseInt(item);
        if (num % 2 === 0) {
          even_numbers.push(item.toString());
        } else {
          odd_numbers.push(item.toString());
        }
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        // If it's an alphabet
        alphabets.push(item.toUpperCase());
        concat_string += item;
      } else {
        // Otherwise, treat as special character
        special_characters.push(item);
      }
    });

    // Reverse + alternating caps for concat_string
    concat_string = concat_string
      .split("")
      .reverse()
      .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join("");

    // Response object
    res.json({
      is_success: true,
      user_id: "your_fullname_ddmmyyyy", // 🔹 Replace with your name + dob
      email: "your_email@xyz.com",       // 🔹 Replace with your email
      roll_number: "YOUR_ROLL_NUMBER",   // 🔹 Replace with your roll number
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

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
