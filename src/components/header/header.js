import React from 'react';
import useLocalStorage from 'use-local-storage';

import Link from 'next/link';

// import './index.css';


const Header = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    return (
        <div className='header__main' data-theme={theme}>
            <button onClick={switchTheme}>Soleil</button>
            <nav>
                <Link href='/'><a className='test'>Home</a></Link>
                <Link href='/about'><a className=''>A propos</a></Link>
                <Link href='/projets'><a className=''>Projets</a></Link>
            </nav>
        </div>
    );
}

export default Header;
