const Home = () => {
    return (
        <main className="main">
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__data">
                        <h1 className="home__title">
                            Discover <br /> Most Suitable <br /> Property
                        </h1>
                        <p className="home__description">
                            Find a variety of properties that suit you very easily,
                            forget all difficulties in finding a residence for you
                        </p>
                        <form action className="home__search">
                            <i className="bx bxs-map" />
                            <input type="search" placeholder="Search by location..." className="home__search-input" />
                            <button className="button">
                                Search
                            </button>
                        </form>
                        <div className="home__value">
                            <div>
                                <h1 className="home__value-number">
                                    9K <span>+</span>
                                </h1>
                                <span className="home__value-description">
                                    Premium <br /> Product
                                </span>
                            </div>
                            <div>
                                <h1 className="home__value-number">
                                    2K <span>+</span>
                                </h1>
                                <span className="home__value-description">
                                    Happy <br /> Customer
                                </span>
                            </div>
                            <div>
                                <h1 className="home__value-number">
                                    28K <span>+</span>
                                </h1>
                                <span className="home__value-description">
                                    Awards <br /> Winning
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="home__images">
                        <div className="home__orbe" />
                        <div className="home__img">
                            <img src="assets/img/home.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/*==================== LOGOS ====================*/}
            <section className="logos section">
                <div className="logos__container container grid">
                    <div className="logos__img">
                        <img src="assets/img/logo1.png" alt="" />
                    </div>
                    <div className="logos__img">
                        <img src="assets/img/logo2.png" alt="" />
                    </div>
                    <div className="logos__img">
                        <img src="assets/img/logo3.png" alt="" />
                    </div>
                    <div className="logos__img">
                        <img src="assets/img/logo4.png" alt="" />
                    </div>
                </div>
            </section>

            {/*==================== VALUE ====================*/}
            <section className="value section" id="value">
                <div className="value__container container grid">
                    <div className="value__images">
                        <div className="value__orbe" />
                        <div className="value__img">
                            <img src="assets/img/value.jpg" alt="" />
                        </div>
                    </div>
                    <div className="value__content">
                        <div className="value__data">
                            <span className="section__subtitle">Our Value</span>
                            <h2 className="section__title">
                                Value We Give To You<span>.</span>
                            </h2>
                            <p className="value__description">
                                We always ready to help by providing the best service for you.
                                We believe a good place to live can make your life better.
                            </p>
                        </div>
                        <div className="value__accordion">
                            <div className="value__accordion-item">
                                <header className="value__accordion-header">
                                    <i className="bx bxs-shield-x value__accordion-icon" />
                                    <h3 className="value__accordion-title">
                                        Best interest rates on the market
                                    </h3>
                                    <div className="value__accordion-arrow">
                                        <i className="bx bxs-down-arrow" />
                                    </div>
                                </header>
                                <div className="value__accordion-content">
                                    <p className="value__accordion-description">
                                        Price we provides is the best for you,
                                        we guarantee no price changes on your property due
                                        to various unexpected costs that may come.
                                    </p>
                                </div>
                            </div>
                            <div className="value__accordion-item">
                                <header className="value__accordion-header">
                                    <i className="bx bxs-x-square value__accordion-icon" />
                                    <h3 className="value__accordion-title">
                                        Prevent unstable prices
                                    </h3>
                                    <div className="value__accordion-arrow">
                                        <i className="bx bxs-down-arrow" />
                                    </div>
                                </header>
                                <div className="value__accordion-content">
                                    <p className="value__accordion-description">
                                        Price we provides is the best for you,
                                        we guarantee no price changes on your property due
                                        to various unexpected costs that may come.
                                    </p>
                                </div>
                            </div>
                            <div className="value__accordion-item">
                                <header className="value__accordion-header">
                                    <i className="bx bxs-bar-chart-square value__accordion-icon" />
                                    <h3 className="value__accordion-title">
                                        Best prices on the market
                                    </h3>
                                    <div className="value__accordion-arrow">
                                        <i className="bx bxs-down-arrow" />
                                    </div>
                                </header>
                                <div className="value__accordion-content">
                                    <p className="value__accordion-description">
                                        Price we provides is the best for you,
                                        we guarantee no price changes on your property due
                                        to various unexpected costs that may come.
                                    </p>
                                </div>
                            </div>
                            <div className="value__accordion-item">
                                <header className="value__accordion-header">
                                    <i className="bx bxs-checkbox-checked value__accordion-icon" />
                                    <h3 className="value__accordion-title">
                                        Security of your data
                                    </h3>
                                    <div className="value__accordion-arrow">
                                        <i className="bx bxs-down-arrow" />
                                    </div>
                                </header>
                                <div className="value__accordion-content">
                                    <p className="value__accordion-description">
                                        Price we provides is the best for you,
                                        we guarantee no price changes on your property due
                                        to various unexpected costs that may come.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*==================== CONTACT ====================*/}
            <section className="contact section" id="contact">
                <div className="contact__container container grid">
                    <div className="contact__images">
                        <div className="contact__orbe" />
                        <div className="contact__img">
                            <img src="assets/img/contact.png" alt="" />
                        </div>
                    </div>
                    <div className="contact__content">
                        <div className="contact__data">
                            <span className="section__subtitle">Contact Us</span>
                            <h2 className="section__title">
                                Easy to Contact us<span>.</span>
                            </h2>
                            <p className="contact__description">
                                Is there a problem finding your dream home? Need a
                                guide in buying first home? or need a consultation
                                on residential issues? just contact us.
                            </p>
                        </div>
                        <div className="contact__card">
                            <div className="contact__card-box">
                                <div className="contact__card-info">
                                    <i className="bx bxs-phone-call" />
                                    <div>
                                        <h3 className="contact__card-title">
                                            Call
                                        </h3>
                                        <p className="contact__card-description">
                                            022.321.165.19
                                        </p>
                                    </div>
                                </div>
                                <button className="button contact__card-button">
                                    Call Now
                                </button>
                            </div>
                            <div className="contact__card-box">
                                <div className="contact__card-info">
                                    <i className="bx bxs-message-rounded-dots" />
                                    <div>
                                        <h3 className="contact__card-title">
                                            Chat
                                        </h3>
                                        <p className="contact__card-description">
                                            022.321.165.19
                                        </p>
                                    </div>
                                </div>
                                <button className="button contact__card-button">
                                    Chat Now
                                </button>
                            </div>
                            <div className="contact__card-box">
                                <div className="contact__card-info">
                                    <i className="bx bxs-video" />
                                    <div>
                                        <h3 className="contact__card-title">
                                            Video Call
                                        </h3>
                                        <p className="contact__card-description">
                                            022.321.165.19
                                        </p>
                                    </div>
                                </div>
                                <button className="button contact__card-button">
                                    Video Call Now
                                </button>
                            </div>
                            <div className="contact__card-box">
                                <div className="contact__card-info">
                                    <i className="bx bxs-envelope" />
                                    <div>
                                        <h3 className="contact__card-title">
                                            Message
                                        </h3>
                                        <p className="contact__card-description">
                                            022.321.165.19
                                        </p>
                                    </div>
                                </div>
                                <button className="button contact__card-button">
                                    Message Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*==================== SUBSCRIBE ====================*/}
            <section className="subscribe section">
                <div className="subscribe__container container">
                    <h1 className="subscribe__title">
                        Get Started with Holux
                    </h1>
                    <p className="subscribe__description">
                        Subscribe and find super attractive price
                        quotes from us, Find your residence soon
                    </p>
                    <a href="#" className="button subscribe__button">
                        Get Started
                    </a>
                </div>
            </section>
        </main>
    );
}
export default Home;