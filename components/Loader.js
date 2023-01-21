import Image from "next/image"
import Logo from '../img/logo/logo-design.PNG'
export default function Loader() {
    return (
        <div id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div class="logo-loader"><Image src={Logo} alt="" width="200" /></div>
                </div>
            </div>
        </div>
    )
}