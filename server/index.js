import express from 'express'
import cors from 'cors'
import mockData from '../mock/data.json' assert { type: 'json' }

const VITE_FOO = import.meta.VITE_FOO
const app = express()
const bodyParser = express.bodyParser()
const PORT = 5174

app.use(bodyParser.json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
