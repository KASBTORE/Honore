import { signIn } from 'next-auth/react'
import { connectToDatabase } from '../../lib/mongodb'

export default async function signin(req, res) {
    console.log(req.method)
    if (req.method !== 'POST') {
        return res.status(400).json({ error: 'Invalid method', method: req.method })
    }

    const { email, password } = req.body

    // Fetch user data from MongoDB
    const { db } = await connectToDatabase()
    const user = await db.collection('users').findOne({ email })

    if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Invalid credentials' })
    }

    // Sign in the user
    const result = await signIn('credentials', { email })
    console.log(result);
    console.log("default")
    return res.status(200).json(result)
}
