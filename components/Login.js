export default function Login() {
    return (
        <section class="login-area pt-100 pb-100 overlay-open w-full h-full  ">
            <button onClick={cartDelete}><FontAwesomeIcon icon={faXmark} /></button>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="basic-login">
                            <h3 class="text-center mb-60">Signup From Here</h3>
                            <form action="#">
                                <label for="email-id">Email Address <span>**</span></label>
                                <input id="email-id" type="text" placeholder="Email address..." />
                                <label for="pass">Password <span>**</span></label>
                                <input id="pass" type="password" placeholder="Enter password..." />
                                <div class="mt-10"></div>
                                <a href="login.html" class="os-btn os-btn-black w-100">login Now</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}