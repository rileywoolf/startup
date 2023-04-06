const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
    throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('bibliobibuli').collection('user');
const currentlyCollection = client.db('bibliobibuli').collection('currently');
const reviewCollection = client.db('bibliobibuli').collection('reviews');

function addCurrently(currently) {
    currentlyCollection.insertOne(currently);
}

function addReview(review) {
    reviewCollection.insertOne(review);
}

async function addUser(username, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      username: username,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
  
    return user;
  }

function getCurrently() {
    const query = {};
    const options = { 
        limit: 4, 
        sort: { _id: -1 },
    };
    const cursor = currentlyCollection.find(query, options);
    return cursor.toArray();
}

function getReviews() {
    const query = {};
    const options = { 
        limit: 3 ,
        sort: { _id: -1 },
    };
    const cursor = reviewCollection.find(query, options);
    return cursor.toArray();
}

function getUser(username) {
    return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

module.exports = {
    addCurrently,
    addReview,
    addUser,
    getCurrently,
    getReviews,
    getUser,
    getUserByToken,
};