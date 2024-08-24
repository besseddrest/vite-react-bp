import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mockData from '../mock/data.json' assert { type: 'json' }

const VITE_API = import.meta.VITE_API
const app = express()
const PORT = 1123

app.use(bodyParser.json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
