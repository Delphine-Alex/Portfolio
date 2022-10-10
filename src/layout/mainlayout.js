import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';

import Footer from '../components/footer';
import Header from '../components/header';

const Mainlayout = ({ children }) => {

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    const [toggle, setToggle] = useState(false);

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    return (
        <div className='mainlayout__main' data-theme={theme}>

            <div className='toggle__theme' onClick={() => setToggle(!toggle)}>
                {toggle ? <span className='moon' onClick={switchTheme}></span> :
                    <>
                        <span className='sun' onClick={switchTheme}></span>
                        <small className='sun__ray'></small>
                        <small className='sun__ray'></small>
                        <small className='sun__ray'></small>
                        <small className='sun__ray'></small>
                        <small className='sun__ray'></small>
                        <small className='sun__ray'></small>
                    </>
                }
            </div>

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
