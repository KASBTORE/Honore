import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

export async function connectToDatabase() {
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = client.db()

    return { db, client }
}
