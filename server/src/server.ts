const express = require("express");
const app = express();
const PORT = 8000;


app.post('/chats', (req, res)=>{
    
})

app.post('/chats/:chatId/members', (req, res)=>{
    
})

app.post('/chats/:chatId/messages', (req, res)=>{
    
})

app.get("/", (req, res) => {})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});