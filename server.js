require('./model/mindStealer') 

const sceneRoutes = require('./routes/scene')
// formatTimeAsHtml = require(../view/`formatTimeAsHtml`)

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use('/scene', sceneRoutes)

app.get('/', (req, res) => {
    res.redirect('/scene/intro')
})

app.listen(port, () => {
  console.log(`Game server listening at http://localhost:${port}`)
})