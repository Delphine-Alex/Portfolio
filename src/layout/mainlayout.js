import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';



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
