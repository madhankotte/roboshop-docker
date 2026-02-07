const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URL || "mongodb://mongodb:27017";
const dbName = "catalogue";

async function seedData() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const items = db.collection("items");

    // Insert sample catalogue items
    await items.insertMany([
      { id: 1, name: "Laptop", price: 1200 },
      { id: 2, name: "Phone", price: 800 },
      { id: 3, name: "Headphones", price: 150 }
    ]);

    console.log("Sample data inserted into catalogue.items");
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    await client.close();
  }
}

seedData();
