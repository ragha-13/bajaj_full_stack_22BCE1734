# Full Stack Assignment - VIT
This project is a REST API built using **Node.js + Express**, deployed on **Vercel** as part of the Full Stack assignment.

## 🚀 Hosted API
**Endpoint (POST):**  
[https://bajaj-full-stack-22-bce-1734.vercel.app/bfhl](https://bajaj-full-stack-22-bce-1734.vercel.app/bfhl)

## 📥 Request Format
Send a **POST** request with a JSON body containing an array of strings, numbers, and/or special characters.

**Example:**
```json
{
  "data": ["a","1","334","4","R","$"]
}

```
## 📤 Response Format

The API responds with:

- **is_success**: Operation status (true/false)  
- **user_id**: Full name in lowercase + dob (ddmmyyyy)  
- **email**: Registered email ID  
- **roll_number**: College Roll Number  
- **odd_numbers**: All odd numbers from input (as strings)  
- **even_numbers**: All even numbers from input (as strings)  
- **alphabets**: All alphabets, converted to uppercase  
- **special_characters**: All special characters  
- **sum**: Sum of all numbers (as string)  
- **concat_string**: Reversed concatenation of alphabets in alternating caps  

### 📝 Example Response
```json
{
  "is_success": true,
  "user_id": "Ragha_Karthikeyan_17091999",
  "email": "ragha.karthikeyan2022@vitstudent.ac.in",
  "roll_number": "22BCE1734",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- **Vercel** (for deployment)
## ✍️ Author
- **Name:** Ragha Karthikeyan
- **Roll No:** 22BCE1734  
- **Email:** ragha.karthikeyan2022@vitstudent.ac.in
