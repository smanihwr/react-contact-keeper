const express = require('express'); // import is not supported - need to use babel to import
const connectDB = require('./config/db');

const app = express();

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

app.get('/', (req, res) => {
  res.send({ msg: 'Welcome to contact keeper api' });
});

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(5000, () => console.log(`Server started on port ${PORT}`));
