import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <section className='footerSection'>
                <div className='iconContainer'>
                    <a className="linkedInIcon fa-brands fa-linkedin icon" href='https://www.linkedin.com/in/samleungskl/'><span className='screenReader'>LinkedIN</span></a>
                    <a className="envelopeIcon fa-solid fa-envelope icon" href='mailto: samleungskl@gmail.com'><span className='screenReader'>E-mail</span></a>
                </div>
                <div className='designByMsg'>Designed & Built by Sam Leung</div>
                <div className='designYear'>2022</div>
            </section>
        </div>
    );
}

export default Footer;
