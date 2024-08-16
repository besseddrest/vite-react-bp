import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 5174

app.use(cors())

app.get('/api/v1/foo', (req, res) => {
    res.json({ message: 'Foo!' })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
