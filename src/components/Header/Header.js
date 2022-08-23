import React from 'react';
import Logo from '../../assets/logo.svg'
import './header.css'


const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <nav className='header__nav'>
                    <div className='header__logo'>
                        <img className='header__logo-img' src={Logo} alt='Logo'/>
                    </div>
                    <ul className='header__list'>
                        <li className='header__list'>Design</li>
                        <li className='header__list'>Health</li>
                        <li className='header__list'>Workout</li>
                        <li className='header__list'>Activity</li>
                        <li className='header__list'>Connect</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;