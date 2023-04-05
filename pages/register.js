import Footer from "components/Footer"
import Header1 from "components/Header1"
import { getSession } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/router"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Link from "next/link";
import { CircularProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export default function Register({ carts }) {
    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#fff',
                darker: '#fff',
            },
            neutral: {
                main: '#fff',
                contrastText: '#fff',
            },
        },
    })
    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [progress, setProgress] = useState(false)

    const onClick = async (e) => {
        e?.preventDefault()
        setProgress(true)
        try {
            const api = await fetch('https://kabstore-7p9q.onrender.com/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: name, email: email, password: password }),
            })
            const data = await api.json()
            if (data.user) {
                setLoggedIn(true)
                setProgress(false)
                setTimeout(() => {
                    setLoggedIn(false)
                    router.push('/login')
                }, 1000)
            }
            else {
                setProgress(false)
                setMessage(data.message)
                setAlert(true)
                setTimeout(() => {
                    setAlert(false)
                }, 5000)
            }
        }
        catch (err) {
            console.log(err)


        }

    }
    return (
        <>
            <Header1 carts={carts} />
            <main>
                {alert && !loggedIn && <Alert severity="error" className="mb-60 absolute top-[50vh] left-[35vw]">
                    <AlertTitle>Error</AlertTitle>
                    {message} — <strong>try again</strong>
                </Alert>}
                {alert && loggedIn && <Alert severity="success" className="mb-60 absolute top-[50vh] left-[35vw]"> <AlertTitle>Success</AlertTitle> Account created Successfully — <strong>Redirecting</strong> </Alert>}
                {/* <div id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div class="object" id="first_object"></div>
                    <div class="object" id="second_object"></div>
                    <div class="object" id="third_object"></div>
                </div>
            </div>
        </div> */}
                {/* <div class="epix-breadcrumb-area">
                    <div class="container">
                        <h4 class="epix-breadcrumb-title">Sign up Page</h4>
                        <div class="epix-breadcrumb">
                            <ul>
                                <li><a href="./">Home</a></li>
                                <li><span>Sign up</span></li>
                            </ul>
                        </div>
                    </div>
                </div> */}

                <section class="login-area pt-100 pb-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <div class="basic-login">
                                    <h3 class="text-center mb-60">Signup From Here</h3>
                                    <div >
                                        <label for="name">Username <span>**</span></label>
                                        <input id="name" type="text" placeholder="Enter Username" onChange={(e) => { setName(e.target.value) }} />
                                        <label for="email-id">Email Address <span>**</span></label>
                                        <input id="email-id" type="text" placeholder="Email address..." onChange={(e) => { setEmail(e.target.value) }} />
                                        <label for="pass">Password <span>**</span></label>
                                        <input id="pass" type="password" placeholder="Enter password..." onChange={(e) => { setPassword(e.target.value) }} />
                                        <div class="mt-10"></div>
                                        <button class="os-btn w-100 btw" onClick={onClick}>{progress && <ThemeProvider theme={theme}> <CircularProgress color='primary' size={20} /></ThemeProvider>}
                                            {!progress && "Register Now"}</button>
                                        <div class="or-divide"><span>or</span></div>
                                        <button class="os-btn w-100 btw"><Link href={"/login"}>Login Now</Link></button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}
export async function getServerSideProps() {
    const session = await getSession()
    let carts = []
    if (session) {
        console.log("Doing this is in index", session);
        console.log(session.id);
        carts = await fetch(`https://kabstore-7p9q.onrender.com/user/${session.id}/cart`)
            .then(response => response.json())
        console.log("hello here area the carts", carts);
    }
    return {
        props: {
            carts: carts
        }
    }
}