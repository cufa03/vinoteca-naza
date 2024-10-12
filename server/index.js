const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

const uri =
  'mongodb+srv://cufa:Dinamarca2024@cluster0.zjx61.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/sample_mflix';
const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};
async function runMongoDb() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
runMongoDb().catch(console.dir);

app.get('/getUsers', (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log('SERVER IS RUNNING now');
});
