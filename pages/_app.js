import '../styles/globals.css'
import '../styles/animate.min.css'
import '../styles/boostrap.min.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '../styles/magnific-popup.css'
import '../styles/main.css'
import '../styles/meanmenu.css'
import '../styles/nice-select.css'
// import "../node_modules/pe7-icon/dist/scss/pe-icon-7-stroke.scss";
import '../styles/slick.css'
import '../styles/ui-range-slider.css'
import Router, { useRouter } from 'next/router'
import { use, useState } from 'react'
import Loader from 'components/Loader'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { SessionProvider } from 'next-auth/react'
export default function App({ Component, pageProps, session }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [path, setPath] = useState(router.asPath)
  Router.events.on("routeChangeStart", (url) => {
    console.log("Changing");
    if (url !== path) {
      setLoading(true);
      setPath(url);
    }
  })
  Router.events.on("routeChangeComplete", (url) => {
    console.log("Complete");
    setLoading(false);
  })

  return (
    <SessionProvider session={session}>
      {loading && <Loader />}
      <Component {...pageProps} />
    </SessionProvider>
  )
}
