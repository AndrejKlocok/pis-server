const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {sequelize} = require('./models')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./src/routes')(app)

sequelize.sync().then(() => {
  app.listen(8081, () => console.log(`Example app listening on port 8081`))
})
