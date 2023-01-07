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
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
