require('dotenv').config();
const express = require('express');
const cors = require('cors');
const checkFirestoreConnection = require('./config/check')
const app = express();
const category = require('./router/apiRoutes')

app.use(cors());
app.use(express.json());
checkFirestoreConnection();

app.get('/', (res, req) => {
  console.log("Welcome")
})

try {
  app.use('/api', category)
} catch (error) {
  console.log(error);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



