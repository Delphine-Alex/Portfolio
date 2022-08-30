import React from 'react';

import Footer from '../components/footer/footer';
import Header from '../components/header/header';

const Mainlayout = ({ children }) => {
    return (
        <div className='mainlayout__main'>
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Mainlayout;
