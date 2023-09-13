import { React, useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import Home from '../pages/Home/Home'
import Photos from '../pages/Photos/Photos'
import BookAndPrices from '../pages/BookAndPrices/BookAndPrices'
import About from '../pages/About/About'
import Contacts from '../pages/Contacts/Contacts'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import { Box } from '@mui/system';
import { ArrowUp } from './App.style';

import './App.css'



function App() {
    const [showarrow, setShowarrow] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight * 0.5;

            if (scrollPosition > viewportHeight) {
                setShowarrow(true);
            } else {
                setShowarrow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box sx={{ position: 'relative' }}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace={true} />} />
                    <Route path={'/home'} element={<Home />}></Route>
                    <Route path={'/photos'} element={<Photos />}></Route>
                    <Route path={'/bookandprices'} element={<BookAndPrices />}></Route>
                    <Route path={'/about'} element={<About />}></Route>
                    <Route path={'/contacts'} element={<Contacts />}></Route>
                </Routes>
                <ArrowUp showarrow={showarrow ? true : undefined} onClick={handleScrollToTop} />
                <Footer />
            </Router>
        </Box >
    )
}

export default App