import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function findOrCreateUser(collection, user) {
    const { email } = user;
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
        return existingUser;
    }
    const result = await collection.insertOne(user);
    return result.ops[0];
}
export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.SECRET_ID

        })
    ],
    secret: process.env.NEXT_AUTH_SECRET,
    // callbacks: {
    //     async signIn(user, account, profile) {
    //         try {
    //             await client.connect();
    //             const db = client.db();
    //             const collection = db.collection('users');
    //             const dbUser = await findOrCreateUser(collection, user);
    //             console.log(dbUser);
    //             return dbUser ? Promise.resolve(dbUser) : Promise.resolve(null);
    //         } catch (error) {
    //             return Promise.reject(error);
    //         }
    //     },
    //     async session(session, user) {
    //         try {
    //             await client.connect();
    //             const db = client.db();
    //             const collection = db.collection('users');
    //             const dbUser = await collection.findOne({ email: user.email });
    //             session.user = dbUser;
    //             return Promise.resolve(session);
    //         } catch (error) {
    //             return Promise.reject(error);
    //         }
    //     },
    // }
})