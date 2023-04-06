const { MongoClient } = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
    throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const currentlyCollection = client.db('bibliobibuli').collection('currently');
const reviewCollection = client.db('bibliobibuli').collection('reviews');

function addCurrently(currently) {
    currentlyCollection.insertOne(currently);
}

function getCurrently() {
    const query = {};
    const options = { limit: 4 };
    const cursor = currentlyCollection.find(query, options);
    return cursor.toArray();
}

function addReview(review) {
    reviewCollection.insertOne(review);
}

function getReviews() {
    const query = {};
    const options = { limit: 3 };
    const cursor = reviewCollection.find(query, options);
    return cursor.toArray();
}

module.exports = {addCurrently, addReview, getCurrently, getReviews};