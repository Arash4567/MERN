const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(200,"Foydalanuvchi");
});
// 200 - OK
// 201 - Created
// 204 - No Content
// 500 - Internal Server Error
// 403 - Bad Request
// 404 - Not Found

// Route

// /login

app.get("/login", (req, res) => {
    res.send(200, "Login page");
});

app.get("*", (req, res) => {
    res.send(404, "Sahifa topilmadi! :(");
});

app.listen(8000, "127.0.0.1", () => {
    console.log("Servar 8000 portda ishga tushdi...");
});

// REST API nima?
// CRUD nima?
// GET request - ma`lumot olish
// POST request - ma`lumot yozish
// PUT / PATCH request - ma`lumotni o`zgartirish
// DELETE request - ma`lumotni o`chirish

/* 
Read - GET
Edit - PUT / PATCH
Save - POST
Delete - DELETE*/

/* 
Create - POST
Read - GET
Update - PUT / PATCH
Delete - DELETE */

// sayyohlik agentligi
/* 
RESTful API Routes

Create - /tour

Read - /tours

Update - /tour/id

Delete - /tour/:id
*/

/* 
t.me/users/tgid/channel
t.me/users/tgid/bots
t.me/users/tgid/contacts
*/
/* JSON */