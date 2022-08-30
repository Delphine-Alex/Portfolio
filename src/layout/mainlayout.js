import React from 'react';

import Footer from '../components/footer/footer';
import Header from '../components/header/header';

const Mainlayout = ({ children }) => {
    return (
        <div className='mainlayout'>
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
