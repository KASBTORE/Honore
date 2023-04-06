import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { UseSession, signIn, signOut, useSession } from "next-auth/react"
import { CircularProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export default function LoginAuth() {
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
    const router = useRouter();
    const [prevPath, setPrevPath] = useState('');
    useEffect(() => {
        // Listen for changes to the router's history stack
        router.beforePopState(({ url, as }) => {
            console.log("this is the previous route", url);
            if (as == 'register') {
                router.push('/')
                console.log("found register");
            } // The previous URL
            console.log(as); // The previous "as" URL (if using next/router's dynamic routing)

            return true; // Allow the router to proceed with navigation
        });
    }, []);

    useEffect(() => {
        setPrevPath(router.asPath);
    }, [router.asPath]);
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const onClick1 = async (e) => {
        e?.preventDefault()
        const finalSlashIndex = router.asPath.lastIndexOf('/')
        const previousPath = router.asPath.slice(0, finalSlashIndex)
        console.log(previousPath);
        try {
            console.log(JSON.stringify({
                email: email,
                password: password
            }));
            const api = await fetch('https://kabstore-7p9q.onrender.com/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: (email), password: (password) }),
            })
            const data = await api.json()
            console.log(data);
        }
        catch (err) {
            console.log(err)
        }

    }
    const [progress, setProgress] = useState(false)
    const [alert, setAlert] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const onClick = async () => {
        console.log("Clicked")
        setProgress(true)
        const res = await signIn('credentials', {
            redirect: false,
            email: email,
            password: password,
        });
        if (res?.error) {
            setProgress(false)
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 2000)
            console.log("getting errors", res.error)
        } else {
            setLoggedIn(true)
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
                setLoggedIn(false)
            }, 2000)

            setProgress(false)
            console.log(null)
            setTimeout(() => { router.back() }, 1000)
        }
        // if (res.url) router.push(res.url);

    }
    console.log('this is the prev path', prevPath);


    return (
        <section class="login-area pt-100 pb-100 overlay-open w-full h-full  ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="basic-login">
                            <h3 class="text-center mb-60">SignIn From Here</h3>
                            {alert && !loggedIn && <Alert severity="error" className="mb-60 absolute top-[0vh] left-[35vw]">
                                <AlertTitle>Error</AlertTitle>
                                Incorrect Password or Email — <strong>try again</strong>
                            </Alert>}
                            {alert && loggedIn && <Alert severity="success" className="mb-60 absolute top-[0vh] left-[35vw]"> <AlertTitle>Success</AlertTitle> Logged In Successfully — <strong>Redirecting</strong> </Alert>}

                            <div>
                                <label for="email-id">Email Address <span>**</span></label>
                                <input id="email-id" type="text" placeholder="Email address..." onChange={(e) => { setEmail(e.target.value) }} />
                                <label for="pass">Password <span>**</span></label>
                                <input id="pass" type="password" placeholder="Enter password..." onChange={(e) => { setPassword(e.target.value) }} />
                                <div class="mt-10"></div>
                                <button className="os-btn os-btn-black w-100" onClick={onClick}>{progress && <ThemeProvider theme={theme}> <CircularProgress color='primary' size={20} /></ThemeProvider>}
                                    {!progress && "Login"} </button>
                                {/* <button className="os-btn os-btn-black w-100 mt-3" onClick={() => {
                                    signIn('google', {
                                        callbackUrl: '/'
                                    })
                                }}>Sign in With google </button> */}
                                <div class="or-divide"><span>or</span></div>
                                <button class="os-btn btw w-100 to-white"><Link href={"/register"}>Register Now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}