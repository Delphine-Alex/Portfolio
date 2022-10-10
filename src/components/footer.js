import React from 'react';

const Footer = () => {
    return (
        <div className='footer__main'>
            <div className='footer__container'>
                <h2>Restons en contact</h2>
                <div className='footer__links'>
                    <a className='footer__link' href='https://github.com/Delphine-Alex'>Github</a>
                    <a className='footer__link' href='https://www.linkedin.com/in/delphine-paiva/'>LinkedIn</a>
                    <a className='footer__link' href='mailto:delphine.pva@gmail.com'>Email</a>
                </div>
            </div>
            <div className='footer__signature'>Made with ♡ in JavaScript/React</div>
        </div>
    );
}

export default Footer;
