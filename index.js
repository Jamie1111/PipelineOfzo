import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('79% op Windy Landscape')
})

app.listen(3000)