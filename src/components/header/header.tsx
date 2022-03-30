import React from 'react';
import { useNavigate } from "react-router-dom";
import './header.css';

const Header = () => {
    let navigate = useNavigate();

    const navigateToSearch = () => {
        navigate('/search', { replace: true });
      }
    
      const navigateToMain = () => {
        navigate('/', { replace: true });
      }

    return (
        <header>
            <span>FIND YOUR KANJI!</span>
            <button onClick={navigateToSearch} type="button">Kanji Search</button>
            <button onClick={navigateToMain} type="button">Kanji Lists</button>
        </header>
    )
}

export default Header;
