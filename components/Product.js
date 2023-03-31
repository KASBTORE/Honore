import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Image from "next/image";
import ProductImg from '../img/product.jpeg';
import Alert from '@mui/material/Alert';
import { CircularProgress } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState, forwardRef } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useSession, getSession } from "next-auth/react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function Product({ product }) {
    const router = useRouter();
    const [isRefreshing, setIsRefreshing] = useState(false);
    const { data: session, status } = useSession()
    const refreshData = () => {
        router.replace(router.asPath);
        setIsRefreshing(true);
    };
    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#000',
                darker: '#053e85',
            },
            neutral: {
                main: '#fff',
                contrastText: '#fff',
            },
        },
    });
    const [open, setOpen] = useState(true);
    const [message, setMessage] = useState(false);
    const [alert, setAlert] = useState("");
    const [progress, setProgress] = useState(false)
    const [openT, setOpenT] = useState(false);
    const [transition, setTransition] = useState(undefined);

    const handleClickOpen = () => {
        setOpenT(true);
    };

    const handleClose = () => {
        setOpenT(false);
        router.push('/login')
    };
    useEffect(() => {
        setIsRefreshing(false);
    }, [message]);
    const onClick = async () => {
        // console.log(message);
        setProgress(true)
        if (session?.id) {
            try {
                const api = await fetch(`http://localhost:4000/user/${session.id}/cart`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: product._id,
                        name: product.name,
                        category: product.category,
                        price: product.price,
                        discount: product.discount,
                        status: product.status,
                        picture: product.picture


                    })
                })
                const data = await api.json()

                if (data) {
                    console.log("Message coming");
                    console.log(data);
                    setMessage(true)
                    setOpen(true)
                    setAlert(data.message)
                    refreshData()
                    setProgress(false)
                    console.log(message);
                    console.log(data);
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        else {
            router.push('/login')
        }


    }

    return (
        <>
            <div class="col-xxl-3 col-sm-6 col-md-4">
                {

                    message && <ThemeProvider theme={theme}>
                        <Collapse in={open}>
                            <Alert
                                color='primary'
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpen(false);
                                            setMessage(message)
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                {alert} <FontAwesomeIcon className='ml-2' icon={faCartShopping} />
                            </Alert>
                        </Collapse>
                    </ThemeProvider>}
                <div class="epix-single-product-3 mb-40 style-2 text-center swiper-slide">
                    <div class="epix-product-thumb-3">
                        <div class="epix-action">
                            <Link href={`/product/${encodeURIComponent(product._id)}`} legacyBehavior>
                                <a class="p-cart product-popup-toggle">
                                    <FontAwesomeIcon icon={faEye} />
                                </a>
                            </Link>
                            <a class="p-cart product-popup-toggle">
                                <button onClick={() => {
                                    if (!session?.id) {
                                        handleClickOpen()
                                    }
                                    else {
                                        onClick()
                                    }


                                }}>
                                    {progress && <ThemeProvider theme={theme}> <CircularProgress className='mt-[10px]' color='neutral' size={20} /></ThemeProvider>}
                                    {!progress && <FontAwesomeIcon icon={faCartShopping} />}
                                </button>

                            </a>
                            <ThemeProvider theme={theme}>
                                <Dialog
                                    open={openT}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <DialogTitle>{"Please Log In to continue"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                            In order to add to cart we need to know who you are please sign in into your account to continue with our services.
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>Login</Button>
                                    </DialogActions>
                                </Dialog>
                            </ThemeProvider>
                        </div>
                        <span class="sale">sale</span>
                        <Link href={`/product/${encodeURIComponent(product._id)}`} legacyBehavior>
                            <Image src={ProductImg} width={250} height={100} />
                        </Link>
                    </div>
                    <div class="price-box price-box-3">
                        <span class="price">RWF {product.price}</span>

                    </div>
                    <h5 class="epix-p-title epix-p-title-3"><a href="product">{product.name}</a></h5>
                </div>
                {console.log(message)}

            </div>
        </>
    )
}