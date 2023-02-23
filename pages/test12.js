import LoginAuth from "components/LoginAuth"
import { UseSession, signIn, signOut, useSession } from "next-auth/react"
export default function Login() {
    const { data: session } = useSession()
    if (session) {
        return (
            <div>
                logged in as {session.user.email}
                <button onClick={() => { signOut() }}>Sign out</button>

            </div>
        )
    }
    else {
        return (
            <div>
                please login
                <button onClick={() => { signIn('google', { callbackUrl: '/' }) }}>Sign in with google</button>

            </div>
        )
    }

}