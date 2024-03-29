import React from 'react';

import Link from 'next/link';

const Header = () => {

    return (
        <div className='header__main'>
            <Link href='/'><a className='test'>Home</a></Link>
            <Link href='/about'><a className=''>A propos</a></Link>
            <Link href='/projets'><a className=''>Projets</a></Link>
        </div>
    );
}

export default Header;
