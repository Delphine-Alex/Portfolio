import React from 'react';

import Link from 'next/link';

const Header = () => {
    return (
        <div className='header__main'>
            <nav>
                <Link href='/'><a className=''>Home</a></Link>
                <Link href='/about'><a className=''>A propos</a></Link>
                <Link href='/projets'><a className=''>Projets</a></Link>
            </nav>
        </div>
    );
}

export default Header;
