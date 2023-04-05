import Header1 from "components/Header1";
import Footer from "components/Footer";
import { getSession } from "next-auth/react";
import { faEnvelope, faEnvelopeOpen, faLocation, faMailReply, faMapMarker, faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"
import { useRouter } from "next/router"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Link from "next/link";
import { CircularProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { set } from "nprogress";
export default function Contact({ carts }) {
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
    const [message, setMessage] = useState('')
    const [messageReceived, setMessageReceived] = useState('')
    const [subject, setSubject] = useState('')
    const [alert, setAlert] = useState(false)
    const [sent, setSent] = useState(false)
    const [progress, setProgress] = useState(false)
    const onClick = async (e) => {
        e?.preventDefault()
        setProgress(true)
        try {
            const api = await fetch('https://kabstore-7p9q.onrender.com/message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name, email: email, message: messageReceived, subject: subject }),
            })
            const data = await api.json()
            if (data.data) {
                setAlert(true)
                setSent(true)
                setProgress(false)
                setTimeout(() => {
                    setSent(false)
                    setAlert(false)
                    setProgress(false)
                }, 2000)
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

            <section class="contact__area pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6">
                            <div class="contact__info">
                                <h3>Find us here.</h3>
                                <ul class="mb-55">
                                    <li class="d-flex mb-35">
                                        <div class="contact__info-icon mr-20">
                                            <i><FontAwesomeIcon icon={faMapMarker} /></i>
                                        </div>
                                        <div class="contact__info-content">
                                            <h6>Address:</h6>
                                            <span>Makuza Peace Plaza, KN 48 St, Kigali, Rwanda</span>
                                        </div>
                                    </li>
                                    <li class="d-flex mb-35">
                                        <div class="contact__info-icon mr-20">

                                            <i><FontAwesomeIcon icon={faEnvelopeOpen} /></i>
                                        </div>
                                        <div class="contact__info-content">
                                            <h6>Email:</h6>
                                            <span><a href="mailto:info@example.com" class="__cf_email__" data-cfemail="a7e4c8c9d3c6c4d3e7c2d5c2c9d3cfc2cac289c4c8ca">sales@kabstores.com</a></span>
                                        </div>
                                    </li>
                                    <li class="d-flex mb-35">
                                        <div class="contact__info-icon mr-20">
                                            <i><FontAwesomeIcon icon={faMobile} /></i>

                                        </div>
                                        <div class="contact__info-content">
                                            <h6>Number Phone:</h6>
                                            <span>(250) 788 458 897</span>
                                        </div>
                                    </li>
                                </ul>


                                <div class="contact__social">
                                    <ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <div class="contact__form">
                                <h3>Contact Us.</h3>
                                <form action="https://www.devsnews.com/template/KABSTORE/KABSTORE/assets/mail.php" id="contact-form">
                                    <div class="row">
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="contact__input">
                                                <label>Name <span class="required">*</span></label>
                                                <input type="text" onChange={(e) => {
                                                    setName(e.target.value)
                                                }} />
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="contact__input">
                                                <label>Email <span class="required">*</span></label>
                                                <input type="email" onChange={(e) => {
                                                    setEmail(e.target.value)
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="contact__input">
                                                <label>Subject <span class="required">*</span></label>
                                                <input type="text" onChange={(e) => {
                                                    setSubject(e.target.value)
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="contact__input">
                                                <label>Message</label>
                                                <textarea cols="30" rows="10" onChange={(e) => {
                                                    setMessageReceived(e.target.value)
                                                }}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="contact__submit">
                                                <button class="os-btn os-btn-black btw mb-20" onClick={onClick}>{progress && <ThemeProvider theme={theme}> <CircularProgress color='primary' size={20} /></ThemeProvider>}
                                                    {!progress && "Send Message"}</button>
                                                {alert && !sent && <Alert severity="error" className="">
                                                    <AlertTitle>Error</AlertTitle>
                                                    {message} — <strong>try again</strong>
                                                </Alert>}
                                                {alert && sent && <Alert severity="success" className=""> <AlertTitle>Success</AlertTitle> Message Sent Successfully — <strong>Done</strong> </Alert>}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p class="ajax-response"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    );
}

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    let carts = []
    if (session) {
        carts = await fetch(`https://kabstore-7p9q.onrender.com/user/${session.id}/cart`)
            .then(response => response.json())
    }
    return {
        props: {
            carts: carts
        }
    }
}