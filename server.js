const express = require('express');
const port = 7825;
const sequelize = require('./database/sequelize')
const restaurantRouter = require('./router/restaurantRouter')
const menuRouter = require('./router/menuRouter')

const app = express();
app.use(express.json())
app.use('/api/v1',restaurantRouter)
app.use('/api/v1',menuRouter)


const server = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

server()

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
})