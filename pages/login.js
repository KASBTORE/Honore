import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { UseSession, signIn, signOut, useSession } from "next-auth/react"
export default function LoginAuth() {
    const router = useRouter();
    const [prevPath, setPrevPath] = useState('');

    useEffect(() => {
        setPrevPath(router.asPath);
    }, [router.asPath]);
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const onClick1 = async (e) => {
        e?.preventDefault()
        setEmail('')
        setPassword('')
        const finalSlashIndex = router.asPath.lastIndexOf('/')
        const previousPath = router.asPath.slice(0, finalSlashIndex)
        console.log(previousPath);
        try {
            console.log(JSON.stringify({
                email: email,
                password: password
            }));
            const api = await fetch('http://localhost:4000/user/login', {
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
    const onClick = async () => {
        console.log("Clicked")
        const res = await signIn('credentials', {
            redirect: false,
            email: email,
            password: password,
        });
        if (res?.error) {
            console.log(res.error)
        } else {
            console.log(null)
            router.back()
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
                            <div>
                                <label for="email-id">Email Address <span>**</span></label>
                                <input id="email-id" type="text" placeholder="Email address..." onChange={(e) => { setEmail(e.target.value) }} />
                                <label for="pass">Password <span>**</span></label>
                                <input id="pass" type="password" placeholder="Enter password..." onChange={(e) => { setPassword(e.target.value) }} />
                                <div class="mt-10"></div>
                                <button className="os-btn os-btn-black w-100" onClick={onClick}>Login </button>
                                {/* <button className="os-btn os-btn-black w-100 mt-3" onClick={() => {
                                    signIn('google', {
                                        callbackUrl: '/'
                                    })
                                }}>Sign in With google </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}