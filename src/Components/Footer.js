const Footer = () => {
    return (
        <>
            < footer className="footer section" >
                <div className="footer__container container grid">
                    <div>
                        <a href className="footer__logo">
                            Holux <i className="bx bxs-home-alt-2" />
                        </a>
                        <p className="footer__description">
                            Our vision is to make all people <br />
                            the best place to live for them.
                        </p>
                    </div>
                    <div className="footer__content">
                        <div>
                            <h3 className="footer__title">
                                About
                            </h3>
                            <ul className="footer__links">
                                <li>
                                    <a href="#" className="footer__link">About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="footer__link">Features</a>
                                </li>
                                <li>
                                    <a href="#" className="footer__link">News &amp; Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="footer__title">
                                Company
                            </h3>
                            <ul className="footer__links">
                                <li>
                                    <a href="#" className="footer__link">How We Work?</a>
                                </li>
                                <li>
                                    <a href="#" className="footer__link">Capital</a>
                                </li>
                                <li>
                                    <a href="#" className="footer__link">Security</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="footer__title">
                                Support
                            </h3>
                            <ul className="footer__links">
                                <li>
                                    <a href="#" className="footer__link">FAQs</a>
                                </li>
                                <li>
                                    <a href="#" className="footer__link">Support center</a>
                                </li>
                                <li>
                                    <a href="#" className="footer__link">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="footer__title">
                                Follow us
                            </h3>
                            <ul className="footer__social">
                                <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                                    <i className="bx bxl-facebook-circle" />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                                    <i className="bx bxl-instagram-alt" />
                                </a>
                                <a href="https://www.pinterest.com/" target="_blank" className="footer__social-link">
                                    <i className="bx bxl-pinterest" />
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__info container">
                    <span className="footer__copy">
                        © Bedimcode. All rigths reserved
                    </span>
                    <div className="footer__privacy">
                        <a href="#">Terms &amp; Agreements</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </footer >
            < a href="#" className="scrollup" id="scroll-up" >
                <i className="bx bx-chevrons-up" />
            </a >

        </>
    );
};
export default Footer;