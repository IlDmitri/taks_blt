import React from 'react';

interface HeaderProps {
    navMenu: Array<string>
}

const Header: React.FC<HeaderProps> = ({
    navMenu
}) => {

    return (
        <header className='raw bg-white'>
            <nav className="navbar navbar-expand-md container position-relative">
                <a href='/' className='navbar-brand'>
                    <img src='/logo.svg' alt='Brand logo'/>
                </a>
                <div className='bolt__login'>
                    <button
                        type="button"
                        className="btn rounded-pill text-white px-4 mr-4 mr-lg-0"
                    >
                        Log in
                    </button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        {navMenu.map(item => {
                            return (
                                <li
                                    key={item}
                                    className='nav-item'>
                                    <a href='/' className='nav-link text-dark'>{item}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;