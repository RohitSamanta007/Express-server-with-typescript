import express from "express"

const app = express();
const port = 8000;

app.get("/", (req, res) => {
    return res.status(200).json({
        success: true, 
        message: "Hello from server with  Typescript"
    })
})

app.listen(port, ()=> console.log("Server is running on port no : ", port))