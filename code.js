// Tämä on todella yksinkertainen backend
const express = require('express')
const app = express()
const path = require('path')

//Tämän avulla voidaan hakea elokuvien tiedot ja välittää ne eteenpäin
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
// Määritelty portti
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
