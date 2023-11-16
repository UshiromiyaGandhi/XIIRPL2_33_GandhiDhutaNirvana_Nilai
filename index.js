const express = require('express')
const app = express()
const connectDB =require('./config/db')
const nilaiRouter =require('./router/nilai')

const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('hello')
})

app.use(nilaiRouter)

connectDB()

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})