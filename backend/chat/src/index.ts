import express from "express"
import dotenv from "dotenv"
dotenv.config()


const app = express()



app.listen(5002, () => {
  console.log("Server running on port 5002")
})